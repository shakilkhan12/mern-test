import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../redux/asynActions/postActions';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { htmlToText } from 'html-to-text';
import { BsPencil, BsTrash, BsBoxArrowRight } from 'react-icons/bs';
import Loader from './Loader';
const Home = (props) => {
	const { user } = useSelector((state) => state.AuthReducer);
	const { posts, loading, message, redirect } = useSelector(
		(state) => state.PostReducer
	);
	const dispatch = useDispatch();
	const { currentUser, token } = user;
	const handleScroll = (e) => {
		const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
		console.log(e.currentTarget);
	};
	React.useEffect(() => {
		// if(!currentUser){
		//     props.history.push('/login');
		// }
		dispatch(fetchPosts(currentUser._id));
		setTimeout(() => {
			dispatch({ type: 'REMOVE_MESSAGE' });
		}, 5000);
		// window.addEventListener('scroll', handleScroll)
	}, [redirect, message]);
	console.log('posts length check: ', posts);
	return (
		<div className='home'>
			<Helmet>
				<meta charSet='utf-8' content='posts' />
				<title>Your posts</title>
				<link name='description' href='Your all posts' />
			</Helmet>
			<div className='container'>
				<div className='row mt-100'>
					<div className='col-12'>
						{message ? <div className='success'>{message}</div> : ''}
						<br />
						<div className='row'>
							{loading ? (
								<Loader />
							) : posts !== undefined && posts.length > 0 ? (
								posts.map((post) => (
									<div className='col-4' key={post._id}>
										<div className='post'>
											<div className='post__image'>
												<img src={`/images/${post.image}`} alt='image' />
											</div>
											<div className='post__body'>
												<div className='post__title'>
													{post.title.slice(0, 30)}...
												</div>
												<div className='post__details'>
													{htmlToText(post.body.slice(0, 50))}...
												</div>
												<div className='post__buttons'>
													<Link className='link' to={`/edit/${post._id}`}>
														<BsPencil />
													</Link>
													<button
														className='link'
														onClick={() =>
															dispatch(deletePost(post._id, currentUser._id))
														}>
														<BsTrash />
													</button>
													<Link to={`/details/${post.slug}`} className='link'>
														<BsBoxArrowRight />
													</Link>
												</div>
											</div>
										</div>
									</div>
								))
							) : (
								<div className=''>You dont have any post</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
