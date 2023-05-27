import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { query } = req.body;

        try {
            // Generate Embedding
            const embedResponse = await axios.post('https://api.openai.com/v1/embeddings', {
                input: query,
                model: 'text-embedding-ada-002',
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });

            const queryVector = embedResponse.data.data[0].embedding;

            // Query Pinecone
            // TODO: NEED TO CHANGE THE INDEX NAME AND PROJECT ID
            // https://index_name-project_id.svc.environment.pinecone.io/query
            const pineconeResponse = await axios.post('https://abstracts-97548a4.svc.us-central1-gcp.pinecone.io/query', {
                vector: queryVector,
                topK: 10,
                includeValues: true,
                includeMetadata: true,
            }, {
                headers: {
                    'Api-Key': process.env.PINECONE_API_KEY,
                    'accept': 'application/json',
                    'content-type': 'application/json',
                },
            });

            // Extracting relevant information
            const results = pineconeResponse.data.matches.map((match: { id: any; score: any; metadata: any; }) => ({
                id: match.id,
                score: match.score,
                metadata: match.metadata
            }));

            res.status(200).json({ results });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error querying Pinecone',
                error: error.message,
                stack: error.stack
            });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' }); // Only POST is supported
    }
};

export default search;
