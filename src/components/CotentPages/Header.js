import React from 'react';
import LoginBar from "../Login/LoginBar";
import LoginWelcome from "../Login/LoginWelcom";
import LoginPopup from "../Login/LoginPopup";
import RegisterPopup from "../Login/RegisterPopup";

export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            logged:false,
            userName:"",
            showLogin: false,
            showReg: false
        };
        this.getProfile = this.getProfile.bind(this);
        this.getLogged = this.getLogged.bind(this);
        this.signOff = this.signOff.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleReg = this.toggleReg.bind(this);
        this.getData = this.getData.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.logged === nextState.logged && this.state.showLogin===nextState.showLogin && this.state.showReg===nextState.showReg && this.state.userName===nextState.userName) {
            return false
        }
        return true
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
            showLogin: false,
        });
    }


    getLogged(){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/profile",{
            credentials: 'include'
        })
            .then(response => response.text())
            .then(data=>{
                if(data.length>0){
                    this.setState({logged:true})
                }
                else{
                    this.setState({logged:false})
                }
            })

    };

    getProfile(){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/profile",{
            credentials: 'include'
        })
            .then((res) => res.json())
            .then(data=>{
                this.setState({
                    userName:data.userName
                });
                console.log(this.state.userName);
            })

    }

    signOff(){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/logout",{
            credentials: 'include'
        })
            .then(response => {
                if(response.ok){
                    this.setState({logged:false,userName:""})
                }
            })

    }

    getData(val){
        console.log(val);
    }

    render() {
        let lll;
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/profile",{
            credentials: 'include'
        })
            .then(response => response.text())
            .then(data=>{
                if(data.length>0){
                    this.setState({logged:true})
                }
                else{
                    this.setState({logged:false})
                }
            });
        console.log(this.state.logged);
        if(this.state.logged){
            this.getProfile();
            console.log(this.state.userName);
            lll = <div className="login-buttons">
                <h5 className="login-text">{this.state.userName}</h5>
                <button className="login-button" onClick={this.signOff}>Sign Off</button>
            </div>
        }
        else{
            lll =  <div className="login-buttons">
                <button className="login-button" onClick={this.toggleLogin}>Login</button>
                <button className="login-button" onClick={this.toggleReg}>Register</button>
                {
                    this.state.showLogin?
                        <LoginPopup closePopup={this.toggleLogin}/>:null

                }
                {
                    (!this.state.showLogin && this.state.showReg)?
                        <RegisterPopup text='Click "Close Button" to hide popup'
                                       closePopup={this.toggleReg}/>:null

                }
            </div>
        }

        return(
            <header className="main-header">
                <div className="navbar-orange fixed-top shadow-sm">
                    <a href={"/"}>
                        <img alt="logo"  src={"../../assets/images/sasame.png"}/></a>
                    <form className="form-inline">
                        <input className="form-control" type="text" placeholder="Search a movie..."/>
                        <button className="btn"><i className="fa fa-search" aria-hidden="true"/></button>
                    </form>
                    {lll}
                </div>
            </header>
        )
    }
}
