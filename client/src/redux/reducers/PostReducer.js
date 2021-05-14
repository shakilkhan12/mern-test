import axios from "axios"

const initState = {
    errors: [],
    loading: false,
    posts: [],
    redirect: false,
    post: {},
    updateErrors: [],
    message: '',
    all: [],
    pageNumber: 1,
    count: 0,
    perPage: 0
}

const PostReducer = (state = initState, action) => {
    switch(action.type){
        case 'SET_LOADER':
        return {...state, loading: true}
        case 'CLOSE_LOADER':
        return {...state, loading: false}
        case 'ERRORS':
        return {...state, errors: action.payload}
        case 'UPDATED_ERRORS':
        return {...state, updateErrors: action.payload}
        case 'POSTS':
        // console.log('shakil: ', action.payload.posts);
            return {...state, posts: action.payload}
        case 'REDIRECT': 
        return {...state, redirect: true}
        case 'FALSE_REDIRECT':
            return {...state, redirect: false}
        case 'POST':
            return {...state, post: action.payload}
        case 'MESSAGE': 
        return {...state, message: action.payload}
        case 'REMOVE_MESSAGE':
        return {...state, message: '', errors: [], updateErrors: []}
        case 'ALL':
        return {...state, all: action.payload.posts, count: action.payload.count, perPage: action.payload.perPage, pageNumber: action.payload.pageNumber}
        default: 
        return state;
    }
}
export default PostReducer;