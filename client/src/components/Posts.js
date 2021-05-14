import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { allPosts } from '../redux/asynActions/postActions';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { htmlToText } from 'html-to-text';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';
import Loader from './Loader';
const Posts = () => {
	const dispatch = useDispatch();
	const { all, loading, count, perPage, pageNumber } = useSelector(
		(state) => state.PostReducer
	);
	let { currentPage } = useParams();
	if (currentPage === undefined) {
		currentPage = 1;
	}
	let totalPages = Math.ceil(count / perPage);
	let startLoop = pageNumber;
	let diff = totalPages - pageNumber;
	if (diff <= 2) {
		startLoop = totalPages - 2;
	}
	let endLoop = parseInt(startLoop) + 2;
	if (startLoop <= 0) {
		startLoop = 1;
	}
	const prev = () => {
		if (pageNumber > 1) {
			return (
				<li className='pagination__li'>
					<Link to={`/page/${parseInt(currentPage) - 1}`}>
						<BsChevronDoubleLeft />
					</Link>
				</li>
			);
		}
	};
	const next = () => {
		if (pageNumber < totalPages) {
			return (
				<li className='pagination__li'>
					<Link to={`/page/${parseInt(currentPage) + 1}`}>
						<BsChevronDoubleRight />
					</Link>
				</li>
			);
		}
	};
	const links = () => {
		let store = [];
		for (let i = startLoop; i <= endLoop; i++) {
			store.push(
				<li key={i} className='pagination__li'>
					<Link to={`/page/${i}`}>{i}</Link>
				</li>
			);
		}
		return store;
	};
	useEffect(() => {
		dispatch(allPosts(currentPage));
	}, [currentPage]);

	return (
		<>
			<div className='posts'>
				<Helmet>
					<meta description='utf-8' content='posts' />
					<title>Home</title>
					<link rel='canonical' href='http://mysite.com/example' />
				</Helmet>
				<div className='container'>
					<div className='row'>
						{!loading ? (
							all.map((post) => (
								<div className='col-8 mb-10' key={post._id}>
									<div className='row bg-white ptb-20'>
										<div className='col-8'>
											<div className='posts__author'>
												<span>{post.username[0].toUpperCase()}</span>
												<div className='posts__author__name'>
													{post.username.toUpperCase()}
												</div>
											</div>
											<div className='posts__body'>
												<Link
													to={`/details/${post.slug}`}
													className='posts__body__title'>
													{post.title.slice(0, 60)}
												</Link>
												<div className='posts__body__details'>
													{htmlToText(post.body.slice(0, 100))}
												</div>
												<div className='posts__footer'>
													<span>Posted at</span>{' '}
													{moment(post.updatedAt).fromNow()}
												</div>
											</div>
										</div>
										<div className='col-4'>
											<div className='posts__image'>
												<img src={`/images/${post.image}`} alt='' />
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							<Loader />
						)}
					</div>
					{!loading ? (
						count > 4 && all.length > 0 ? (
							<div className='row'>
								<div className='col-12'>
									<div className='pagination'>
										<ul className='pagination__ul'>
											{prev()}
											{links()}
											{next()}
										</ul>
									</div>
								</div>
							</div>
						) : (
							''
						)
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
};

export default Posts;
