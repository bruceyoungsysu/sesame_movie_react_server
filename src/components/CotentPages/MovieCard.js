import React from 'react';
import ReactDOM from "react-dom";
import Rating from "react-rating";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Tooltip } from '@material-ui/core';
import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles
} from "@material-ui/core/styles";
import BriefToolTip from "./BriefToolTip";
import MovieDetail from "../DetailPages/MovieDetail";

export default class MovieCard extends React.Component{
    constructor(props){
        super(props);
        this.setState({movie:this.props.movie});
        this.state={
            url: "https://image.tmdb.org/t/p/",
            size: "w500",
            movie:"",
        };}


        getitle(){
            let title;
            if(this.props.movie.title.length>15){
                title = this.props.movie.title.slice(0, 14) + " ..."
            }
            else{
                title = this.props.movie.title;
            }
            return title
        }

        getposter(){
            let url = this.state.url + this.state.size + this.props.movie.poster_path;
            return url
        }



    render() {
        // get title
        let title = this.getitle();
        let poster = this.getposter();

        const theme = createMuiTheme({
            overrides: {
                MuiTooltip: {
                    tooltip: {
                        fontSize: "0.8em",
                        color: "gray",
                        backgroundColor: "white",
                    }
                }
            }
        });


        return(
            <li className="slide-item" id={this.props.idx}>
                <ul className="slide-box">
                    <Link to={"/"+this.props.movie.id}>
                    <li className="poster">
                            <MuiThemeProvider theme={theme}>
                            <Tooltip title={<BriefToolTip movie = {this.props.movie} />} placement="right"><img alt="." src={poster}/></Tooltip>
                            </MuiThemeProvider>
                    </li>
                    <li className="title"><a>{title}</a></li>
                    </Link>
                    <li className="rating">
                        <Rating initialRating={this.props.movie.vote_average/2} emptySymbol={<span className="fa fa-star"/>}
                        fullSymbol={<span className="fa fa-star checked"/>} readonly={true}/>
                        <span className="score">{this.props.movie.vote_average}</span>
                    </li>
                </ul>
            </li>
        )
    }
}