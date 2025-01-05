import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Name, Email } = req.body;

    if (!Name || !Email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
      const newUser = await prisma.newsletter.create({
        data: { Name, Email },
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
