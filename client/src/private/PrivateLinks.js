import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Route, Redirect} from "react-router-dom"
const PrivateLinks = ({component: Component, ...rest}) => {
    const {user} = useSelector(state => state.AuthReducer);
    const {currentUser} = user;
    console.log('Private link: ', currentUser);
    return (
        <Route {...rest} render={props => (
            currentUser ? <Component {...props} /> : <Redirect to='/login' />
        )}>
        </Route>
    )
}

export default PrivateLinks
