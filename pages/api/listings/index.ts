import connectDb from '@/db/connectDb';
import Listing from '@/db/models/listing';
import type { NextApiRequest, NextApiResponse } from 'next'
import escapeStringRegexp from 'escape-string-regexp';

const ITEMS_PER_PAGE = 20;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const page = (req.query.page) || 1;
    const search = (req.query.search) || '';

    const $regex = escapeStringRegexp(search.toString());

    // Put all your query params in here
    let query;

    if (search && search.length > 5) {
        query = {
            name: { $regex },
        };
    } else {
        query = {};
    }

    try {
        await connectDb();
        const skip = (Number(page) - 1) * ITEMS_PER_PAGE; // 1 * 20 = 20

        const countPromise = Listing.estimatedDocumentCount(query);

        const itemsPromise = Listing.find(query).limit(ITEMS_PER_PAGE).skip(skip);

        const [count, items] = await Promise.all([countPromise, itemsPromise]);

        const pageCount = Math.ceil(count / ITEMS_PER_PAGE); // 400 items / 20 = 20

        res.status(200).json({
            pagination: {
                count,
                pageCount,
            },
            items,
        })
    } catch (e) {
        console.error(e);
        res.status(400).json({ e });
    }

}
