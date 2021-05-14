import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { useDispatch, useSelector } from 'react-redux';
import InputHook from '../hooks/InputHook';
import { createAction } from '../redux/asynActions/postActions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet';

const Create = (props) => {
	const { errors, loading, redirect } = useSelector(
		(state) => state.PostReducer
	);
	const { user } = useSelector((state) => state.AuthReducer);
	const { currentUser } = user;
	console.log('user: ', currentUser.name);
	const dispatch = useDispatch();
	const [state, handle, clear] = InputHook({
		title: '',
		body: '',
	});
	const [image, setImage] = React.useState('');
	const [currentImage, setCurrentImage] = React.useState('Choose Image');
	const [title, setTitle] = React.useState('');
	const [body, setBody] = React.useState('');
	const [slug, setSlug] = React.useState('');
	const [slugButton, setSlugButton] = React.useState(false);
	const [value, setValue] = React.useState('');
	const [preview, setPreivew] = React.useState('');
	const [description, setDescription] = React.useState();
	const imageHandle = (e) => {
		setImage(e.target.files[0]);
		setCurrentImage(e.target.files[0].name);
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloaded = () => {
			setPreivew(reader.result);
		};

		reader.readAsDataURL(file);
	};
	const handleTitle = (e) => {
		setTitle(e.target.value);

		const createSlug = e.target.value.trim().split(' ').join('-');

		setSlug(createSlug);
	};
	const handleSlug = (e) => {
		setSlugButton(true);
		setSlug(e.target.value);
	};
	const customSlug = () => {
		setSlug(slug.trim().split(' ').join('-'));
	};

	const buttonRef = React.useRef(null);

	const createPost = (e) => {
		e.preventDefault();
		console.log('post description: ', description);
		const formData = new FormData();
		formData.append('file', image);
		formData.append('title', title);
		formData.append('body', value);
		formData.append('userId', currentUser._id);
		formData.append('username', currentUser.name);
		formData.append('slug', slug);
		formData.append('meta', description);
		dispatch(createAction(formData));
	};

	React.useEffect(() => {
		if (redirect) {
			props.history.push('/home');
			dispatch({ type: 'FALSE_REDIRECT' });
		}
		console.log(buttonRef.current);
	}, [redirect]);
	return (
		<div className='create'>
			<Helmet>
				<meta description='utf-8' content='posts' />
				<title>Create a new post</title>
				<link name='description' href='Creat a new post' />
			</Helmet>
			<div className='container'>
				<div className='row mt-100'>
					<div className='col-6'>
						<div className='card'>
							<div className='card__body'>
								<form onSubmit={createPost}>
									<div className='group'>
										{errors.length > 0 ? (
											<div className='error'>
												{' '}
												{errors.map((error) => (
													<React.Fragment key={error.msg}>
														<p>{error.msg}</p>
													</React.Fragment>
												))}
											</div>
										) : (
											''
										)}
									</div>
									<div className='group'>
										<label>Post title</label>
										<input
											type='text'
											name='title'
											className='control'
											placeholder='Title'
											value={title}
											onChange={handleTitle}
										/>
									</div>
									<div className='group'>
										<label htmlFor='sameFile' className='label'>
											{currentImage}
										</label>
										<input
											type='file'
											name='file'
											id='sameFile'
											className='file'
											onChange={imageHandle}
										/>
									</div>
									<label>Post body</label>
									<ReactQuill
										theme='snow'
										value={value}
										onChange={setValue}
										placeholder='Post Body...'
									/>
									<div className='group'></div>
									<div className='group'>
										<input
											type='submit'
											className='btn btn-primary btn-block'
											value={loading ? 'loading...' : 'Create'}
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className='col-6'>
						<div className='create__right'>
							<label>Post URL/Slug</label>
							<input
								type='text'
								value={slug}
								onChange={handleSlug}
								className='control'
								placeholder='Slug...'
							/>
							<br />
							<br />
							{slugButton ? (
								<button className='btn btn-primary' onClick={customSlug}>
									Save
								</button>
							) : (
								''
							)}
							<br />
							{preview ? (
								<div className='previewImage'>
									<img src={preview} />
								</div>
							) : (
								''
							)}{' '}
							<br />
							<label>Meta description</label>
							<textarea
								className='control'
								defaultValue={description}
								onChange={(e) => setDescription(e.target.value)}
								cols='30'
								rows='10'
								placeholder='Meta Description...'
								maxLength='150'></textarea>
							<p className='maxLength'>
								Max Length 150 / {description ? description.length : 0}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Create;
