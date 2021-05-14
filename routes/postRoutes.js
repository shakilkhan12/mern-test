const express = require("express");
const router = express.Router();
const { createPost, fetchPosts, fetchPost, updateValidations, updatePost,deletePost,allPosts, details} = require("../controllers/postController");
const { auth } = require("../middlewares/auth");
router.post('/create', [auth], createPost);
router.get('/posts/:id', [auth], fetchPosts);
router.get('/post/:id', [auth], fetchPost);
router.get('/allposts/:currentPage', allPosts);
router.post("/update", [auth, updateValidations], updatePost);
router.post('/delete/:id', [auth], deletePost);
router.get("/details/:slug", details);

module.exports = router;