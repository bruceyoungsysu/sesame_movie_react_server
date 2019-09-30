import React from 'react';

export default class RegisterPopup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:'',
            email:''
        };
        this.register = this.register.bind(this);
    }

    register(){
        fetch("http://localhost:8080/api/register",{
            method: 'post',
            body: JSON.stringify(this.state),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
        console.log("222");
    }

    render() {
        return(
            <div className='popup popup-register'>
                <div className='popup\_inner'>
                    <h5 className="popup-title regi-title">Register Your Account</h5>
                    <button className="popup-close" onClick={this.props.closePopup}>
                        <i className="fa fa-times" aria-hidden="true"/></button>
                    <form className="popup-form">
                        <div className="form-group">
                            <input type="email" className="form-control" id="InputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                        </div>
                        <div className="form-group">
                            <input type="username" className="form-control" id="InputUsername1"
                                   placeholder="Password"/>
                            <small id="usernameHelp" className="form-text text-muted">Your username should not be less than 5 characters.</small>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="InputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn-submit" onClick={this.register}><div className="popup-btn-text">Register</div></button>
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