import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
import Agent from '@/db/models/agent';
import connectDb from '@/db/connectDb';

type Agent = {
    agent: {
        id: string;
        phone: string;
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, fullname, password, phone } = req.body;
    const { method } = req;

    const saltRounds = 10;

    await connectDb();

    try {

        const passwordHash = await bcrypt.hash(password, saltRounds);
        const agent = new Agent({ username, fullname, password: passwordHash, phone });
        await agent.save()
        res.status(200).send({ message: 'Created' });
    } catch (error) {
        res.status(400).json({ error });
    }

}