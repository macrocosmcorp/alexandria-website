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

            if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
                throw new Error('PINECONE keys not set');
            }

            const pineconeResponse = await axios.post(process.env.PINECONE_INDEX_NAME, {
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
