import React from 'react';
import ReactDOM from "react-dom";
import TablePage from "../../tables/TablePage";
import AdminNav from "./AdminNav";

class AdminPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            adminID:'',
        };
        this.login = function () {
            fetch("http://localhost:8080/api/adminlogin",{
                method: 'post',
                body: JSON.stringify(this.state.adminID),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) {
                    if(response.ok){
                        ReactDOM.render(<AdminNav />, document.getElementById('leftpanel'));
                        ReactDOM.render(<TablePage />, document.getElementById('rightpanel'));
                        return response;
                    }
                    else {
                        console.log(response.ok);
                        alert('Wrong login info!');
                    }
                })
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <body>
            <div id="leftpanel"></div>
            <div id="rightpanel"></div>
            <div className="sufee-login d-flex align-content-center flex-wrap home-no-login">
                <div className="container">
                    <div className="login-content">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Admin ID</label>
                                    <input type="username" className="form-control" placeholder="Username" value={this.state.adminID}
                                           name="adminID" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password"
                                           name="password"/>
                                </div>
                                <button type="button" className="btn btn-success btn-flat m-b-30 m-t-30" onClick={()=>this.login()}>Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div></body>
        )
    }
}

export default AdminPage;