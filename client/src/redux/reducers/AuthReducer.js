import jwtDecode from "jwt-decode";
import axios from "axios"
import setAuthToken from "../../utils/setToken";

const token = localStorage.getItem('token');
let currentUser = '';
if(token){
    setAuthToken(token);
    const decodedToken = jwtDecode(token);
    const expireAt = new Date(decodedToken.exp * 1000);
  if (new Date() > expireAt) {
    localStorage.removeItem("token");
  } else {
      currentUser = decodedToken.user; 
      
  }
}
const initState = {
    login: true,
    errors: [],
    user: {token: token, currentUser: token ? currentUser : ''},
    loading: false,
    loginErrors: []
}


const AuthReducer = (state = initState, action) => {
   switch(action.type){
       case 'REGISTER_REQUEST': 
       return {...state, loading: true}
       case 'REGISTER_SUCCESS': 
       return {...state, loading: false}
       case 'AUTH_ERRORS': 
       return {...state, errors: action.payload}
       case 'SET_TOKEN':
       return {...state, user: {token: action.payload.token, currentUser: action.payload.user }}
       case 'LOGIN_REQUEST': 
       return {...state, loading: true}
       case 'LOGIN_SUCCESS':
       return {...state, loading: false, loginErrors: []}
       case 'LOGOUT': 
       localStorage.removeItem('token');
       return {...state, user: {token: '', currentUser: ''}}
       case 'LOGIN_ERRORS': 
       return {...state, loginErrors: action.payload}
       default: 
       return state;
   }
}
export default AuthReducer;