const {model, Schema} = require("mongoose");
const postSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    slug: {
        required: true, 
        type: String
    },
    meta: {
        required: true,
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
},{ timestamps: true })

module.exports = model('post', postSchema);