import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector, useDispatch } from "react-redux";
import { registerAction } from "../redux/asynActions/authActions"
import FormBg from './FormBg'
import InputHook from "../hooks/InputHook"
const Register = (props) => {
    const {loading, errors, user} = useSelector((state) => state.AuthReducer);
    const [allErrors, setErrors] = React.useState(errors);
    const {currentUser} = user;
    React.useEffect(() => {
      errors ? setErrors(errors) : setErrors([])
    }, [errors])
    
    const dispatch = useDispatch();
    const [state, handle, clear] = InputHook({
        name: '',
        email: '',
        password: ''
    });
    const registerUser = (e) => {
        e.preventDefault();
        dispatch(registerAction(state))
    }
    React.useEffect(() => {
        if(currentUser){
            props.history.push('/home');
        }
     }, [currentUser])
    return (
        <div className="register">
            <Helmet>
            <meta description="utf-8" content="User Register" />
                <title>User Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="row mt-80 no-margin">
                <div className="col-8 no-padding">
                    <FormBg />
                </div>
                <div className="col-4 no-padding">
                    
                    <div className="account">
                        <div className="account__section">
                            <form onSubmit={registerUser}>
                                <div className="group">
                                    <h2 className="mb-20 font-300">Register user</h2>
                                </div>
                                <div className="group">
                                    {allErrors.length > 0 ? <div className="error"> {allErrors.map(error => (
                                        <React.Fragment key={error.msg}>
                                                <p>{error.msg} </p>
                                        </React.Fragment>
                                    ))}</div> : ''}
                                </div>
                                <div className="group">
                                    <input type="text" name="name" className="control" placeholder="Enter Name..." value={state.name} onChange={handle} />
  
                                </div>
                                <div className="group">
                                    <input type="email" name="email" className="control" placeholder="Enter Email..." value={state.email} onChange={handle} />
                                </div>
                                <div className="group">
                                    <input type="password" name="password" className="control" placeholder="Create Password..." value={state.password} onChange={handle} />
                                </div>
                                <div className="group">
                                    <input type="submit" className="btn btn-primary btn-block" value={loading ? 'loading...' : 'Register'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
