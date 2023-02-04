import connectDb from '@/db/connectDb';
import Listing from '@/db/models/listing';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        query: { id },
        method,
    } = req;
    await connectDb();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const listing = await Listing.findById(id).populate('agent', { phone: 1 });
                if (!listing) {
                    return res.status(404).json({ error: 'Listing does not exist' });
                }

                res.status(200).json({ data: listing });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
