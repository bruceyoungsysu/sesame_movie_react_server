import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import MovieCards from "./CotentPages/MovieCards";
import ReactDOM from 'react-dom';
import UserProfile from "./UserProfile";
import TablePage from "../tables/TablePage";

class LeftPanel extends React.Component{
    render(){
        return(
            <div>
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#" onClick={
                                    function () {
                                        ReactDOM.render(<DashBoard />, document.getElementById('rightpanel'));
                                    }
                                }><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                            </li>
                            <li>
                                <a href="#" onClick={function () {
                                    ReactDOM.render(<MovieCards />, document.getElementById('rightpanel'));
                                }}> <i className="menu-icon fa fa-cogs"></i>Movies</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
            </div>
        )
    }
}

export default LeftPanel;