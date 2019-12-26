import React from "react";

export default class LoginWelcome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logged:true,
        };
        this.signOff = this.signOff.bind(this);
    }

    signOff(){
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=d113a3fe13f42bdfbcdc57f21764d4a1")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState(
                {
                    logged:false,
                }
            ));
    }

    render() {
        return(
            <div className="login-buttons">
                <h5 className="login-text">Welcome</h5>
                <button className="login-button" onClick={this.signOff}>Sign Off</button>
            </div>
        )
    }

}