import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes: Number,
    retuits: Number,
    liked: Boolean,
    username: String,
    handle: String,
    image: String,
    time: String,
    isUserPost: Boolean
}, {collection: 'tuits'});
export default schema;