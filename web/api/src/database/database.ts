

import mongo from "mongoose";
import { CommentModel, PostModel, UserModel } from "../workers/model";

// Comment mongodb models
export const commentsDB = new mongo.Schema<CommentModel>({
    who: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    up: {
        type: Number,
        default: 0
    },
    down: {
        type: Number,
        default: 0
    }
}, {
    collection: "comments"
})

export const comments = mongo.model('comments', commentsDB);

// User mongodb models
export const userDB = new mongo.Schema<UserModel>({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    },
    admin: {
        type: Boolean,
        require: true
    }
}, {
    collection: "user"
})

export const user = mongo.model('user', userDB);

// User mongodb models
export const postDB = new mongo.Schema<PostModel>({
    title: {
        type: String,
        require: true
    },
    route: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    comment: [{
        who: {
            type: String,
            require: true
        },
        like: {
            type: Number,
            default: 0
        },
        dislike: {
            type: Number,
            default: 0
        }
    }]
}, {
    collection: "post"
})

export const post = mongo.model('post', postDB);