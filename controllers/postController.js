const formidable = require('formidable');
const { v4: uuidv4 } = require('uuid');
const { body, check, validationResult } = require('express-validator');
const fs = require('fs');
const Post = require('../models/Post');
module.exports.createPost = (req, res) => {
	const form = formidable({ multiples: true });
	form.parse(req, async (err, fields, files) => {
		const { title, body, username, userId, slug, meta } = fields;
		console.log('meta data: ', body);
		const errors = [];

		if (title == '') {
			errors.push({ msg: 'Title is required', param: 'title' });
		}
		if (body == '') {
			errors.push({ msg: 'Body is required', param: 'body' });
		}
		if (slug == '') {
			errors.push({ msg: 'Slug is required', param: 'slug' });
		}
		if (meta == '' || meta == undefined) {
			errors.push({ msg: 'Meta description is required', param: 'meta' });
		}
		if (Object.keys(files).length === 0) {
			errors.push({ msg: 'Image is required', param: 'file' });
		} else {
			const { type } = files.file;
			const split = type.split('/');
			const ext = split[1].toUpperCase();
			if (ext !== 'PNG' && ext !== 'JPG' && ext !== 'JPEG') {
				errors.push({ msg: 'Please choose a valid image', param: 'file' });
			} else {
				files.file.name = uuidv4() + '.' + ext;
			}
		}
		const checkSlug = await Post.findOne({ slug });
		if (checkSlug) {
			errors.push({ msg: 'Please create a unique slug/url', param: 'slug' });
		}
		if (errors.length !== 0) {
			return res.json({ status: 'error', errors });
		}

		const oldPath = files.file.path;
		const newPath = __dirname + `/../client/public/images/${files.file.name}`;
		fs.copyFile(oldPath, newPath, async (err) => {
			if (!err) {
				try {
					const response = await Post.create({
						title: title,
						image: files.file.name,
						body: body,
						username: username,
						userId: userId,
						slug,
						meta,
					});
					return res.json({
						status: 'success',
						msg: 'You have created your post successfuly',
					});
				} catch (error) {
					console.log(error);
				}
			} else {
				console.log(err);
			}
		});
	});
};

module.exports.fetchPosts = async (req, res) => {
	const id = req.params.id;
	try {
		const posts = await Post.find({ userId: id });
		return res.json({ status: 'success', posts: posts });
	} catch (error) {
		console.log(error);
	}
};
module.exports.allPosts = async (req, res) => {
	const pageNumber = parseInt(req.params.currentPage);
	const perPage = 4;
	const skip = (pageNumber - 1) * perPage;
	try {
		const count = await Post.find({}).countDocuments();
		const posts = await Post.find({})
			.skip(skip)
			.limit(perPage)
			.sort({ updatedAt: -1 });
		return res.json({ status: 'success', posts, count, pageNumber, perPage });
	} catch (error) {
		console.log(error);
	}
};
module.exports.fetchPost = async (req, res) => {
	const id = req.params.id;
	try {
		const post = await Post.findOne({ _id: id });
		return res.json({ status: 'success', post });
	} catch (error) {
		console.log(error);
	}
};
module.exports.updateValidations = [
	body('title').not().isEmpty().withMessage('Title is required'),
	body('body').not().isEmpty().withMessage('Body is required'),
];
module.exports.updatePost = async (req, res) => {
	const { title, body, id } = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.json({ status: 'error', errors: errors.array() });
	} else {
		try {
			const updateResult = await Post.findByIdAndUpdate(id, { title, body });
			if (updateResult) {
				res.json({
					status: 'success',
					msg: 'Your post has been updated successfully!',
				});
			}
		} catch (error) {
			console.log(error);
		}
	}
};
module.exports.deletePost = async (req, res) => {
	const id = req.params.id;
	try {
		const response = await Post.findByIdAndRemove(id);
		if (response) {
			res.json({
				status: 'success',
				msg: 'Your post has been deleted successfully',
			});
		}
	} catch (error) {
		console.log(error);
	}
};
module.exports.details = async (req, res) => {
	const slug = req.params.slug;
	try {
		const response = await Post.find({ slug });
		if (response) {
			res.json({ status: 'success', post: response });
		}
	} catch (error) {
		console.log(error);
	}
};
