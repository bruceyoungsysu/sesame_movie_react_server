import React from 'react';
import Rating from "react-rating";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Tooltip } from '@material-ui/core';
import {
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";
import BriefToolTip from "./BriefToolTip";

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
            if(this.props.movie.title != undefined){
            if(this.props.movie.title.length>15){
                title = this.props.movie.title.slice(0, 14) + " ..."
            }
            else{
                title = this.props.movie.title;
            }}
            if(this.props.movie.name != undefined){
                if(this.props.movie.name.length>15){
                    title = this.props.movie.name.slice(0, 14) + " ..."
                }
                else{
                    title = this.props.movie.name;
                }}
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

        let link;
        if(this.props.movie.title != undefined){
            link = "/movie/"+this.props.movie.id
        }
        else{
            link = "/tv/"+this.props.movie.id
        }


        return(
            <li className="slide-item" id={this.props.idx}>
                <ul className="slide-box">
                    <Link to={link}>
                        <li className="poster">
                            <MuiThemeProvider theme={theme}>
                                <Tooltip title={<BriefToolTip movie = {this.props.movie} />} placement="right"><img alt="." src={poster}/></Tooltip>
                            </MuiThemeProvider>
                        </li>
                        <li className="title"><label>{title}</label></li>
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