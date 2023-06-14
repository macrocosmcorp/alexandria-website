import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    validateEnvironmentVariables();

    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const { query } = req.body;

    const embedding = await generateEmbedding(query);
    const results = await queryPinecone(embedding);

    return res.status(200).json({ results });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: 'Error querying Pinecone',
      error: error.message,
      stack: error.stack,
    });
  }
};

const validateEnvironmentVariables = () => {
  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
    throw new Error('PINECONE keys not set');
  }
};

const generateEmbedding = async (query: string) => {
  const response = await axios.post(
    'https://api.openai.com/v1/embeddings',
    {
      input: query,
      model: 'text-embedding-ada-002',
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY!}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.data.embedding) {
    throw new Error('No embedding found');
  }

  return response.data.embedding;
};

const queryPinecone = async (embedding: string) => {
  const response = await axios.post(
    process.env.PINECONE_INDEX_NAME!,
    {
      vector: embedding,
      topK: 10,
      includeValues: true,
      includeMetadata: true,
    },
    {
      headers: {
        'Api-Key': process.env.PINECONE_API_KEY!,
        'accept': 'application/json',
        'content-type': 'application/json',
      },
    }
  );

  return response.data.matches.map((match: any) => ({
    id: match.id,
    score: match.score,
    metadata: match.metadata,
  }));
};

export default search;
