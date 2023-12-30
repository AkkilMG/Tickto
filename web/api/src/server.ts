// 

import express from 'express';
import fs from 'fs';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongo from 'mongoose';
require('dotenv').config();

import { User } from './routes/user_route';
import { Categories } from "./routes/categories_route";
import { Comments } from './routes/comments_route';
import { Posts } from './routes/posts_route';


const app = express();

mongo.Promise = Promise;
mongo.connect(process.env.MONGODB)
const db = mongo.connection
db.on('error', (error: Error) => console.log("Check your mongodb please. There is an issue with mongodb."))
db.on('open', () => console.log("Mongodb is connected."))
app.use(express.json())

app.use(cors({
    origin: '*', // process.env.DOMAIN,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers'],
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //process.env.DOMAIN);
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers'); 
    next();
});

app.set('trust proxy', true);
app.use(bodyParser.json());

var server = http.createServer(app);

app.get("/", async(req, res) => {
    res.status(200).json({success: true})
    return
})


// Users API routes
app.use("/api/user", User)

// Posts API routes
app.use("/api/posts", Posts)

// Comments API routes
app.use("/api/comments", Comments)

// Categories API routes
app.use("/api/categories", Categories);

server.listen(7000, () => console.log(`Server running at http://localhost:7000`));