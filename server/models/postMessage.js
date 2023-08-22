import mongoose from "mongoose";

//  mongoose gives uniformity to the data stored in the database. We're going to specify that every post is going to have these fields
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//  Turn schema into a model
const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;