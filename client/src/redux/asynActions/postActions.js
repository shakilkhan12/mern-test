import axios from 'axios';
const token = localStorage.getItem('token');
console.log('post action token: ', token);
axios.defaults.headers.common = {
	token: token ? token : '',
};
export const createAction = (postData) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'SET_LOADER' });
			const { data } = await axios.post(
				'http://localhost:5000/create',
				postData
			);
			if (data.status === 'error') {
				dispatch({ type: 'CLOSE_LOADER' });
				dispatch({ type: 'ERRORS', payload: data.errors });
				console.log('all errors: ', data.errors);
			} else if (data.status === 'success') {
				dispatch({ type: 'CLOSE_LOADER' });
				dispatch({
					type: 'MESSAGE',
					payload: 'Your post has been created successfully',
				});
				dispatch({ type: 'REDIRECT' });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchPosts = (id) => {
	console.log('Your all post function:', token);
	return async (dispatch) => {
		try {
			dispatch({ type: 'SET_LOADER' });
			const response = await axios.get(`http://localhost:5000/posts/${id}`);
			console.log('login user posts:', response.data);
			dispatch({ type: 'POSTS', payload: response.data.posts });
			dispatch({ type: 'CLOSE_LOADER' });
		} catch (error) {
			console.log(error);
		}
	};
};
export const allPosts = (currentPage) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'SET_LOADER' });
			const response = await axios.get(
				`http://localhost:5000/allposts/${currentPage}`
			);
			console.log('response: ', response.data);
			dispatch({ type: 'CLOSE_LOADER' });
			dispatch({
				type: 'ALL',
				payload: {
					posts: response.data.posts,
					pageNumber: response.data.pageNumber,
					perPage: response.data.perPage,
					count: response.data.count,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
};
export const fetchPost = (slug) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'SET_LOADER' });
			const response = await axios.get(`http://localhost:5000/details/${slug}`);
			console.log('details post: ', response.data);
			dispatch({ type: 'CLOSE_LOADER' });
			dispatch({ type: 'POST', payload: response.data.post[0] });
		} catch (error) {
			console.log(error);
		}
	};
};
export const updatePost = (post) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'SET_LOADER' });
			const response = await axios.post('http://localhost:5000/update', post);
			dispatch({ type: 'CLOSE_LOADER' });
			if (response.data.status === 'error') {
				dispatch({ type: 'UPDATED_ERRORS', payload: response.data.errors });
				console.log(response.data);
			} else if (response.data.status === 'success') {
				dispatch({ type: 'CLOSE_LOADER' });
				dispatch({
					type: 'MESSAGE',
					payload: 'Your post has been updated successfully',
				});
				dispatch({ type: 'REDIRECT' });
			}
		} catch (error) {
			console.log(error);
		}
	};
};
export const deletePost = (id, userId) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'SET_LOADER' });
			const { data } = await axios.post(`http://localhost:5000/delete/${id}`);
			dispatch({ type: 'CLOSE_LOADER' });
			if (data.status === 'success') {
				dispatch({ type: 'CLOSE_LOADER' });
				dispatch({
					type: 'MESSAGE',
					payload: 'Your post has been Deleted successfully',
				});
				// fetchPosts(userId);
			}
		} catch (error) {
			console.log(error);
		}
	};
};
