import React, {useEffect} from 'react'
import {Helmet} from "react-helmet";
import {htmlToText} from "html-to-text";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../redux/asynActions/postActions";
import ReactHtmlParser from "react-html-parser";
import Prism from 'prismjs';
import Loader from './Loader';
const Details = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const {loading, post} = useSelector(state => state.PostReducer);
    useEffect(() => {
    dispatch(fetchPost(slug));
    }, [])
    console.log(post)
    return (
        <div className="details mt-100">
            <div className="container">
            {!loading ? 
                <div className="row">
                    <div className="col-10">
                    <div className="detail">
                        <h1 className="detail__title">
                          {post.title}  
                        </h1>
                        <div className="posts__author">
            {/* <span>{post.username[0]}</span> */}
            <div className="posts__author__name">{post.username}</div>
                                    </div> 
                                    <div className="detail__img">
                                        <img src={`/images/${post.image}`} alt="post image"/>
                                    </div>
                                    <div className="detail__body">
                                        {ReactHtmlParser(post.body)}
                                    </div>
                    </div>
                    </div>
                
            </div> : <Loader />}
            <Helmet>
            <meta charSet="utf-8" content="Hello my all react posts" />
    <title>{slug}</title>
    <meta name="description" content="Free Web tutorials" />
            </Helmet>
            </div>
        </div>
    )
}

export default Details
