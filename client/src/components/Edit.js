import React, {useState} from 'react'
import {fetchPost, updatePost} from "../redux/asynActions/postActions"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios"
import {Helmet} from "react-helmet";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Loader from "./Loader"

const Edit = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {updateErrors, loading,redirect} = useSelector(state => state.PostReducer);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [value, setValue] = useState('');
    React.useEffect( () => {
        
        async function single(){
            try {
                dispatch({type: 'SET_LOADER'});
                const response = await axios.get(`http://localhost:5000/post/${id}`);
                console.log(response);
                dispatch({type: 'CLOSE_LOADER'});
                dispatch({type: 'POST', payload: response.data.post});
                setTitle(response.data.post.title);
                setValue(response.data.post.body);
            } catch (error) {
                console.log(error);
            }
        }
        single();
        if(redirect) {
            props.history.push('/home');
            dispatch({type: 'FALSE_REDIRECT'});
        }
     
    }, [dispatch, id, redirect])
    const editPost = (e) => {
        e.preventDefault();
        console.log('current value :', value);
        dispatch(updatePost({title, body: value, id}));
    }
    return (
    <>{!loading ? <div className="create">
        <Helmet>
           
                <title>Edit Post</title>
                <meta name="description" content="Hello my all react posts" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container">
        <div className="row mt-100">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                    <form onSubmit={editPost}>
                    <div className="group">
                                    {updateErrors.length > 0 ? updateErrors.map(error => (
                                        <React.Fragment key={error.msg}>
                                        <div className="error">
                                            {error.msg}
                                        </div>
                                    </React.Fragment>
                                    )) : ''}
                                </div>
                    <div className="group">
                        <input type="text" name="title" className="control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
            
                    <div className="group">
                    <ReactQuill theme="snow" value={value} onChange={setValue}  placeholder="Post Body..." />
                    </div>
                    <div className="group">
                    <input type="submit" className="btn btn-primary btn-block" value="Edit"/>
                    </div>
                </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div> : <Loader />}</>
        
    )
}

export default Edit
