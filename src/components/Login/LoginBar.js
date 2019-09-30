import React from 'react'
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";

export default class LoginBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showLogin: false,
            showReg: false
        };
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleReg = this.toggleReg.bind(this);
    }

    toggleLogin(){
        this.setState({
            showLogin: !this.state.showLogin,
            showReg:false,
        });
    }

    toggleReg(){
        this.setState({
            showReg: !this.state.showReg,
            showLogin: false
        });
    }

    render() {
        return(
            <div className="login-buttons">
                <button className="login-button" onClick={this.toggleLogin}>Login</button>
                <button className="login-button" onClick={this.toggleReg}>Register</button>
                {
                    this.state.showLogin?
                        <LoginPopup closePopup={this.toggleLogin} />:null

                }
                {
                    (!this.state.showLogin && this.state.showReg)?
                        <RegisterPopup text='Click "Close Button" to hide popup'
                                    closePopup={this.toggleReg} />:null

                }
            </div>
        )
    }
}