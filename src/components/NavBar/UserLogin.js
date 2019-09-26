import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch,Redirect} from "react-router-dom";
import MovieCards from "../CotentPages/MovieCards";
import DashBoard from "../DashBoard/DashBoard";
import ReactDOM from "react-dom";
import UserProfile from "../UserProfile";
import LoginPage from "../Login/LoginPage";
import Logo from "./Logo";

class UserLogin extends React.Component{
    constructor(props){
        super(props);
        this.aa = function() {
            alert(222);
        }
    }

    render(){
        return(
            <header id="header" className="header">
                <Logo login="none"/>
            <div className="top-right">
                <div className="header-menu">
                    <div className="header-left">
                        <button className="search-trigger"><i className="fa fa-search"></i></button>
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..."
                                       aria-label="Search"/>
                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                            </form>
                        </div></div>


                    <div className="user-area dropdown float-right">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false">
                            <img className="user-avatar rounded-circle" src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524012041206.png" alt="User Avatar"/>
                        </a>

                        <div className="user-menu dropdown-menu">
                            <a className="nav-link" href="#" onClick={function () {
                                ReactDOM.render(<LoginPage />, document.getElementById('body'));
                            }}><i className="fa fa-power -off"></i>Login</a>
                        </div>
                    </div>

                </div>
            </div></header>
        )
    }
}

export default UserLogin;