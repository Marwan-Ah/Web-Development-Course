const express = require('express');
const app = express();

let posts = [];
let postid = 1;

app.use(express.json());

app.post("/posts", (req,res) =>{
        const post = {
            id: postid++,
            body: req.body 
        };
        posts.push(post);
        res.json("Post Saved");
    }
)

app.get("/posts", (req,res) =>{
    res.json(posts);
})

app.get("/posts/:id", (req,res) => {
    res.json(posts.find(p => p.id == req.params.id));
})

app.post("/posts/:id/comments", (req,res) => {
    const post = posts.find(p => p.id == req.params.id);
    if(!post){
        return res.status(404).json("Post not found");
    }
    if(!post.comments){
        post.comments = [];
    }
    post.comments.push(req.body);
    res.json("comment added");
})

app.get("/posts/:id/comments", (req,res) => {
    const post = posts.find(p => p.id == req.params.id);
    if(!post){
        return res.status(404).json("Post not found");
    }
    res.json(post.comments);
})