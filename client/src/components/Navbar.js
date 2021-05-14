import React from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
const Navbar = () => {
    const {user, loading} = useSelector(state => state.AuthReducer);
    const {currentUser} = user;
    const dispatch = useDispatch();
    const links = () => {
    return !loading ? currentUser ? (<React.Fragment><li><Link to="/home"><span className="inlineBlock ml-10 cursor">{currentUser.name.toUpperCase()}</span ></Link></li> <li><Link to="/create">Create Post</Link></li> <li><span className="inlineBlock ml-10 cursor" onClick={() => dispatch({type: 'LOGOUT'})}>Logout</span></li></React.Fragment>) : (<React.Fragment><li><Link to="/register">Register</Link></li>
        
        <li><Link to="/login">Login</Link></li></React.Fragment>) : '...'
    }
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <Link to={`/page/1`}><img src="/images/logo-dark.png" alt="logo"/></Link>
                    </div>
                    <div className="navbar__right">
                        
                        {links()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
