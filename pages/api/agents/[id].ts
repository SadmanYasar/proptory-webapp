import type { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '@/db/connectDb';
import Agent from '@/db/models/agent';
import Listing from '@/db/models/listing';
import jwt from 'jsonwebtoken';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        query: { id },
        method,
        headers: { authorization }
    } = req;
    await connectDb();

    switch (method) {
        case 'GET' /* Get agent by its ID */:
            try {
                // const agent = await Agent.findById(id).populate('listings', { name: 1, description: 1, address: 1, bathrooms: 1, bedrooms: 1, price: 1 });
                const agent = await Agent.findById(id);
                if (!agent) {
                    return res.status(400).json({ success: false });
                }
                const listings = await Listing.find({ agentContact: agent.phone });
                res.status(200).json({ data: { agent, listings } });
            } catch (error) {
                res.status(400).json({ error });
            }
            break;

        case 'POST' /* Post a model by its ID */:
            let token;
            if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
                token = authorization.substring(7);
            }

            if (!token) {
                return res.status(401).json({ error: 'token missing' });
            }

            try {
                const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);
                if (!decodedToken.id) {
                    return res.status(401).json({ error: 'token invalid' });
                }
                const agent = await Agent.findById(id);
                if (!agent) {
                    return res.status(400).json({ error: 'Agent missing' });
                }

                // const listing = new Listing({ ...req.body, agent: id });
                const listing = new Listing({ ...req.body, agentContact: agent.phone });
                await listing.save();

                // agent.listings = [...agent.listings, listing._id];
                // await agent.save();

                res.status(200).json({ success: true, data: listing });
            }
            catch (error: any) {
                if (error?.message === 'jwt expired') {
                    return res.status(400).json({ error: 'token expired' });
                }
                res.status(400).json({ error });
            }
            break;

        // case 'DELETE' /* Delete a model by its ID */:
        //     try {
        //         const deletedPet = await Pet.deleteOne({ _id: id })
        //         if (!deletedPet) {
        //             return res.status(400).json({ success: false })
        //         }
        //         res.status(200).json({ success: true, data: {} })
        //     } catch (error) {
        //         res.status(400).json({ success: false })
        //     }
        //     break

        default:
            res.status(400).json({ success: false })
            break
    }
}
