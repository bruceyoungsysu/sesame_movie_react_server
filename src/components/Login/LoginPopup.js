import React from "react";

export default class LoginPopup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:'',
            email:''
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.test = this.test.bind(this);
    }

    login(){

        fetch("https://gentle-hamlet-03315.herokuapp.com/api/login",{
            method: 'post',
            body: JSON.stringify(this.state),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res)=>console.log(res));
        console.log("logged in");
    }

    test(){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/users",{
            method: 'get',
        })
            .then(res=>console.log(res))
    }

    handleChange(event){
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
        console.log(this.state)
    }

    render() {
        return(
            <div className='popup'>
                <div className='popup\_inner'>
                    <h5 className="popup-title">Login</h5>
                    <button className="popup-close" onClick={this.props.closePopup}>
                        <i className="fa fa-times" aria-hidden="true"/></button>
                    <form className="popup-form">
                        <div className="form-group">
                            <input type="username" className="form-control" id="InputUserName" onChange={this.handleChange}
                                  name="userName" aria-describedby="emailHelp" placeholder="Enter username"/>
                            <small id="usernameHelp" className="form-text text-muted">Your username should not be less than 5 characters.</small>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChange}
                                   name="password" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn-submit" onClick={this.login()}><div className="popup-btn-text">Submit</div></button>
                        <div className="popup-line"/>
                        <div className="third-parties">
                            <button className="third-party-btn fb-btn"><i className="fa fa-facebook" aria-hidden="true"></i></button>
                            <button className="third-party-btn gg-btn"><i className="fa fa-google-plus" aria-hidden="true"></i></button>
                            <button className="third-party-btn tw-btn"><i className="fa fa-twitter" aria-hidden="true"></i></button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }

}