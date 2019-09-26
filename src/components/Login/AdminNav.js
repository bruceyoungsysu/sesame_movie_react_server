import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import MovieCards from "../CotentPages/MovieCards";
import ReactDOM from 'react-dom';
import UserProfile from "../UserProfile";
import TablePage from "../../tables/TablePage";
import RatingPages from "../../tables/RatingPages";
import AdminTable from "../../tables/AdminTable";
import UserTables from "../../tables/UserTables";

class AdminNav extends React.Component{
    render(){
        return(
            <div>
                <aside id="left-panel" className="left-panel">
                    <nav className="navbar navbar-expand-sm navbar-default">
                        <div id="main-menu" className="main-menu collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Tables</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="fa fa-table"></i><a href="#" onClick={
                                            function () {
                                                ReactDOM.render(<TablePage />, document.getElementById('rightpanel'));}
                                        }>Movie Table</a></li>
                                        <li><i className="fa fa-table"></i><a href="#" onClick={
                                                function () {
                                                    ReactDOM.render(<UserTables />, document.getElementById('rightpanel'));}
                                        }>User Table</a></li>
                                        <li><i className="fa fa-table"></i><a href="#" onClick={
                                            function () {
                                                ReactDOM.render(<AdminTable />, document.getElementById('rightpanel'));}
                                        }>Admin Table</a></li>
                                        <li><i className="fa fa-table"></i><a href="#" onClick={
                                            function () {
                                                ReactDOM.render(<RatingPages />, document.getElementById('rightpanel'));}
                                        }>Rating Table</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </aside>
            </div>
        )
    }
}

export default AdminNav;