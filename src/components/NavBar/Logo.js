import React from 'react';
import ReactDOM from "react-dom";
import LoginPage from "../Login/LoginPage";
import DashBoard from "../DashBoard/DashBoard";
import DashNotLogin from "../DashBoard/DashNotLogin";

class Logo extends React.Component{

    constructor(props){
        super(props);
        this.renderHome = this.renderHome.bind(this);
    }

    renderHome(login){
         if(login == "user"){
             ReactDOM.render(<DashBoard />, document.getElementById('rightpanel'));
         }
         else{
             ReactDOM.render(<LoginPage />, document.getElementById('body'));
         }
    }

    render(){
        return(
            <div className="top-left">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#" onClick={()=>this.renderHome(this.props.login)}><img src={require("../../images/sasame2.png")} alt="Logo" height="40" width="40"/></a>
                    <a className="navbar-brand hidden"><img src={require("../../images/sasame.png")} alt="Logo" height="45" width="100"/></a>
                    <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                </div>
            </div>
        )
    }
}

export default Logo;