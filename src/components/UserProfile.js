import React from 'react';
import profile from '../index'
import ReactDOM from "react-dom";
import LeftPanel from "./Panel/LeftPanel";
import Logo from "./NavBar/Logo";

class UserProfile extends React.Component{

    logout(){
        fetch("http://localhost:8080/api/logout",{
            method: 'get',
            credentials: 'include',
        }).then((res)=>console.log(res)).then(profile)
    }
    render(){
        return(
            <header id="header" className="header">
                <Logo login="user"/>
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
                    </div>

                    <div className="dropdown for-notification">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="notification"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="count bg-danger">3</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="notification">
                            <p className="red">You have 3 Notification</p>
                            <a className="dropdown-item media" href="#">
                                <i className="fa fa-check"></i>
                                <p>Server #1 overloaded.</p>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown for-message">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="message"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-envelope"></i>
                            <span className="count bg-primary">4</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="message">
                            <p className="red">You have 4 Mails</p>
                            <a className="dropdown-item media" href="#">
                                <span className="photo media-left"><img alt="avatar" src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524012041206.png"/></span>
                                <div className="message media-body">
                                    <span className="name float-left">Jonathan Smith</span>
                                    <span className="time float-right">Just now</span>
                                    <p>Hello, this is an example msg</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="user-area dropdown float-right">
                    <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                        <img className="user-avatar rounded-circle" src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524012041206.png" alt="User Avatar"/>
                    </a>

                    <div className="user-menu dropdown-menu">
                        <a className="nav-link" href="#"><i className="fa fa- user"></i>My Profile</a>
                        <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span
                            className="count">13</span></a>
                        <a className="nav-link" href="#"><i className="fa fa -cog"></i>Settings</a>
                        <a className="nav-link" href="#" onClick={()=>{
                            ReactDOM.render(<LeftPanel />, document.getElementById('leftpanel'));
                            this.logout()}}><i className="fa fa-power -off"></i>Logout</a>
                    </div>
                </div>

            </div>
        </div></header>
        )
    }
}

export default UserProfile;