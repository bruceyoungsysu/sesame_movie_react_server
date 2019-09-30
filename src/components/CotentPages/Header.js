import React from 'react';
import LoginBar from "../Login/LoginBar";

export default class Header extends React.Component{
    render() {
        return(
            <header className="main-header">
                <div className="navbar-orange fixed-top shadow-sm">
                    <img alt="logo"  src={"../../assets/images/sasame.png"}/>
                    <form className="form-inline">
                        <input className="form-control" type="text" placeholder="Search a movie..."/>
                        <button className="btn"><i className="fa fa-search" aria-hidden="true"/></button>
                    </form>
                    <LoginBar/>
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}
