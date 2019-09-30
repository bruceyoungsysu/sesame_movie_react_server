import React from "react";

export default class LoginPopup extends React.Component{
    render() {
        return(
            <div className='popup'>
                <div className='popup\_inner'>
                    <h5 className="popup-title">Login</h5>
                    <button className="popup-close" onClick={this.props.closePopup}>
                        <i className="fa fa-times" aria-hidden="true"/></button>
                    <form className="popup-form">
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn-submit"><div className="popup-btn-text">Submit</div></button>
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