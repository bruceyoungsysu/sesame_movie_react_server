import React from 'react';

class DashBoard extends React.Component{
    render(){
        return(
            <div id="right-panel" className="right-panel">
                <div className="content">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="calender-cont widget-calender">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card weather-box">
                            <h4 className="weather-title box-title">Weather</h4>
                            <div className="card-body">
                                <div className="weather-widget">
                                    <div id="weather-one" className="weather-one"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title box-title">To Do List</h4>
                                    <div className="card-content">
                                        <div className="todo-list">
                                            <div className="tdl-holder tdl-content">
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox"/><i className="check-box"></i><span>Conveniently fabricate interactive technology for ....</span>
                                                                <a href='#' className="fa fa-pencil"></a>
                                                                <a href='#' className="fa fa-check"></a>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div></div>

        )
    }
}
export default DashBoard;