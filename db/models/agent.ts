import { model, models, Schema } from "mongoose";

const schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    fullname: {
        type: String,
        required: true,
        minlength: 3
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        length: 13
    },
    listings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Listing'
        }
    ]
});

const Agent = models.Agent || model('Agent', schema);

export default Agent;