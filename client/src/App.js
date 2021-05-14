import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux"
import "./sass/main.scss"
import store from "./redux/index"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import PrivateLinks from './private/PrivateLinks';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Posts from './components/Posts';
import Details from "./components/Details";
function App() {
  return (
    <Provider store={store}>
    <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact component={Posts} />
       <Route path="/page/:currentPage?" exact component={Posts} />
       <Route path="/register" exact component={Register} />
       <Route path="/login" exact component={Login} />
       <Route path="/details/:slug" exact component={Details} />
       <PrivateLinks exact path="/home" component={Home} />
       <PrivateLinks exact path="/create" component={Create} />
       <PrivateLinks exact path="/edit/:id" component={Edit} />
       
     </Switch>
    </Router>
    </Provider>
  );
}

export default App;
