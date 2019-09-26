import React from 'react';
import ReactDOM from "react-dom";
import MovieCard from "./MovieCard";

export default class MovieTrending extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            deck_left:-60,

        };
        this.nextSlide = this.nextSlide.bind(this);
        this.preSlide = this.preSlide.bind(this);
    }


    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&page=1")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState({movies:movies.results})
            );
    }

    nextSlide(){
        var left = this.state.deck_left;
        if(left>=(-840*3)){
            left = left-168*5;
        }
        this.setState({deck_left:left});
    }

    preSlide(){
        var left = this.state.deck_left;
        if(left<=(-100)){
            left = left+168*5;
        }
        this.setState({deck_left:left});
    }

    render(){

        return(
            <div className="screening">
                <div className="tag-list">
                    <h3>Upcoming</h3>
                </div>
                <div className="screen-line"/>
                <div className="screening-hd">
                    <span  className="fa fa-arrow-circle-left arrow" aria-hidden="true" onClick={this.preSlide}/>
                    <span className="fa fa-arrow-circle-right arrow" aria-hidden="true" onClick={this.nextSlide}/>
                </div>
                <div className="screening-bd">
                    <ul className="slide-deck" style={{"left":this.state.deck_left}}>
                        {
                            this.state.movies.map((movie,idx) => {
                                return(
                                    <MovieCard movie={movie} idx={idx}/>
                                    );})}
                    </ul>
                </div>

            </div>
        )
    }
}