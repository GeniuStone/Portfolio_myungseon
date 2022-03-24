/* 게시글의 스키마 */
import mongoose from 'mongoose';

// 스키마 객체 가져오고
const { Schema } = mongoose;

// 게시글의 스키마 작성
const PostSchema = new Schema({
    postNum: Number,
    title: String,
    body: String,    
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String,
    },
    viewCount : { type: Number, default: 0}
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
