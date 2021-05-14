import React from 'react'
import {Helmet} from "react-helmet"
import InputHook from '../hooks/InputHook'
import { useSelector, useDispatch } from "react-redux";
import {loginAction} from "../redux/asynActions/authActions"
import FormBg from "./FormBg"
const Login = (props) => {
    const {loading, loginErrors, user} = useSelector((state) => state.AuthReducer);
    // const [allErrors, setErrors] = React.useState(loginErrors);
    const {currentUser} = user;
    // React.useEffect(() => {
    //   errors ? setErrors(errors) : setErrors([])
    // }, [errors])
    const dispatch = useDispatch();
    const [state, handle] = InputHook({
        email:'',
        password:''
    })
    const loginUser = e => {
        e.preventDefault();
        dispatch(loginAction(state));
    }
    console.log('login errors', loginErrors);
    React.useEffect(() => {
       if(currentUser){
           props.history.push('/home');
       }
    }, [currentUser])
    return (
        <div>
            <Helmet>
            <meta description="utf-8" content="User login" />
                <title>User Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <div className="row mt-80 no-margin">
                <div className="col-8 no-padding">
                    <FormBg />
                </div>
                <div className="col-4 no-padding">
                    <div className="account">
                        <div className="account__section">
                            <form onSubmit={loginUser}>
                                <div className="group">
                                    <h2 className="mb-20 font-300">Login</h2>
                                </div>
                                <div className="group">
                                {loginErrors.length > 0 ? <div className="error"> {loginErrors.map(error => (
                                        <React.Fragment key={error.msg}>
                                                <p>{error.msg}</p> 
                                        </React.Fragment>
                                    ))}</div> : ''}
                                </div>
                                <div className="group">
                                    <input type="email" name="email" className="control" placeholder="Enter Email..." value={state.email} onChange={handle} />
                                </div>
                                <div className="group">
                                    <input type="password" name="password" className="control" placeholder="Enter Password..." value={state.password} onChange={handle} />
                                </div>
                                <div className="group">
                                    <input type="submit" className="btn btn-primary btn-block" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Login
