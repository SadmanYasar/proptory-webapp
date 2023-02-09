import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
import Admin from '@/db/models/admin';
import connectDb from '@/db/connectDb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, password } = req.body;
    const { method } = req;

    const saltRounds = 10;

    await connectDb();

    switch (method) {
        case 'POST':
            try {
                const admin = await Admin.find({});

                if (admin.length === 0) {
                    const passwordHash = await bcrypt.hash(password, saltRounds);
                    const newAdmin = new Admin({ username, password: passwordHash, role: 'ADMIN' });
                    await newAdmin.save()
                    return res.status(200).send({ message: 'Created' });
                } else {
                    throw new Error('Unauthorized');
                }
            } catch (error) {
                res.status(401).json({ message: 'Unauthorized' });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}
