import connectDb from '@/db/connectDb';
import Agent from '@/db/models/agent';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, password } = req.body;
    const { method } = req;
    await connectDb();

    const foundAgent = await Agent.findOne({ username });

    const passwordMatch = foundAgent === null
        ? false
        : await bcrypt.compare(password, foundAgent.password);

    if (!foundAgent || !passwordMatch) {
        return res.status(400).json({ error: 'Wrong credentials' });
    }

    const agentForToken = {
        username: foundAgent.username,
        id: foundAgent._id,
    }

    res.status(200).json({ id: foundAgent._id, value: jwt.sign(agentForToken, process.env.JWT_SECRET!, { expiresIn: "7d" }) });
}
