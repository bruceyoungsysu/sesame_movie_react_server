import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieMain from "./components/CotentPages/MovieMain";
import Header from "./components/CotentPages/Header";
import styles from "./style.css"
import MovieDetail from "./components/DetailPages/MovieDetail";
import TVDetails from "./components/DetailPages/TVDetails";


function profile(){
    fetch("https://gentle-hamlet-03315.herokuapp.com/api/profile",{
        credentials: 'include'
    })
        .then((res) => res.text())
        .then(function (text) {
            const logged = text.length;
            if(logged){
                console.log("logged!");
                return true;
            }
        })
}

const routing = (
    <div style={styles}>
    <Router>
        <div>
            <Route exact path="/" component={MovieMain} />
            <Route path="/movie/:id" component={MovieDetail} />
            <Route path="/tv/:id" component={TVDetails}/>
        </div>
    </Router>
    </div>
);

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(routing, document.getElementById('root'));

export default routing;
