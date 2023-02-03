import { model, models, Schema } from "mongoose";

const schema = new Schema({
    agent: {
        type: Schema.Types.ObjectId,
        ref: 'Agent'
    },
    matterportId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 5
    },
    address: {
        type: String,
        required: true,
        minlength: 3
    },
    bathrooms: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Listing = models.Listing || model('Listing', schema);

export default Listing;