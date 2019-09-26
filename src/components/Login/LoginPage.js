import React from 'react';
import profile from '../../index'
import ReactDOM from "react-dom";
import LeftPanel from "../Panel/LeftPanel";
import DashBoard from "../DashBoard/DashBoard";
import RegisterPage from "./RegisterPage";
import AdminPage from "./AdminPage";

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:""
        };
        this.login = function () {
            fetch("http://localhost:8080/api/login",{
                method: 'post',
                body: JSON.stringify(this.state),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) {
                    if(response.ok){
                        return response
                    }
                    else {
                        console.log(response.ok);
                        alert('Network response was not ok.');
                    }
                })
                .then(function(response) {
                    return response.text().then(function(text) {
                        return text ? JSON.parse(text) : 0
                    })
                })
                .then((text)=>{
                    console.log(text);
                    if(text){
                profile();
                ReactDOM.render(<LeftPanel />, document.getElementById('leftpanel'));
                ReactDOM.render(<DashBoard />, document.getElementById('rightpanel'));}
                else{
                    alert('not valid');
                    }
                })
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    toRegister(){
        ReactDOM.render(<RegisterPage />, document.getElementById('body'));
    }

    toAdmin(){
        ReactDOM.render(<AdminPage/>, document.getElementById('body'));
    }

    
    render(){
        return(
            <body>
            <div id="leftpanel"></div>
            <div id="rightpanel"></div>
            <div className="sufee-login d-flex align-content-center flex-wrap home-no-login">
                <div className="container">
                    <div className="login-content ">
                        <div className="login-logo">
                            <a>
                                <img src={require("../../images/sasame.png")} alt="Logo" height="90" width="240" margin-bottom="5px"/>
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="username" className="form-control" placeholder="Username" value={this.state.userName}
                                    name="userName" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" value={this.state.password}
                                    name="password" onChange={this.handleChange}/>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> Remember Me
                                    </label>
                                    <label className="pull-right" color="orange">
                                        <a href="#">Forgotten Password?</a>
                                    </label>

                                </div>
                                <button type="button" className="btn btn-warning btn-flat m-b-30 m-t-30" onClick={()=>this.login()}>Sign in
                                </button>
                                <div className="social-login-content">
                                    <div className="social-button">
                                        <button type="button" className="btn social facebook btn-flat btn-addon mb-3"><i
                                            className="ti-facebook"></i>Sign in with facebook
                                        </button>
                                        <button type="button" className="btn social twitter btn-flat btn-addon mt-2"><i
                                            className="ti-twitter"></i>Sign in with twitter
                                        </button>
                                    </div>
                                </div>
                                <div className="register-link m-t-15 text-center">
                                    <p>Don't have account ? <a href="#" onClick={this.toRegister}> Sign Up Here</a></p>
                                </div>
                                <div className="register-link m-t-15 text-center">
                                    <p>Login as <a href="#" onClick={this.toAdmin}> Admin</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></body>
        )
    }
}

export default LoginPage;