import React from 'react';
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import profile from "../../index";
import DashBoard from "../DashBoard/DashBoard";

class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:'',
            age:-1,
            sex:'',
        };

        this.register = function () {
            fetch("http://localhost:8080/api/register",{
                method: 'post',
                body: JSON.stringify(this.state),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) {
                    if(response.ok){
                        profile();
                        console.log(response.text());
                        ReactDOM.render(<DashBoard />, document.getElementById('rightpanel'));
                    }
                    else {
                        console.log(response.ok);
                        alert('Network response was not ok.');
                    }
                })
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    test(){
        console.log(this.state)
    }
    render(){
        return(
            <body>
            <div id="leftpanel"></div>
            <div id="rightpanel"></div>
            <div className="sufee-login d-flex align-content-center flex-wrap home-no-login">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a>
                                <img src={require("../../images/sasame.png")} alt="Logo" height="90" width="240" margin-bottom="5px"/>
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="User Name" value={this.state.userName}
                                    name="userName" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" value={this.state.password}
                                    name="password" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="text" className="form-control" placeholder="" value={this.state.age}
                                    name="age" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Sex</label>
                                    <input type="text" className="form-control" placeholder="" value={this.state.sex}
                                    name="sex" onChange={this.handleChange}/>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> Agree the terms and policy
                                    </label>
                                </div>
                                <button type="button" className="btn btn-warning btn-flat m-b-30 m-t-30" onClick={
                                    ()=>this.register()
                                }>Register
                                </button>
                                <div className="register-link m-t-15 text-center">
                                    <p>Already have account ? <a href="#" onClick={
                                        ()=>{ReactDOM.render(<LoginPage />, document.getElementById('rightpanel'))}
                                    }> Sign in</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></body>

    )
    }
}

export default RegisterPage;