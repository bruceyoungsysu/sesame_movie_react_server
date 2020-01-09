import React from 'react';
import MovieCard from "./MovieCard";

export default class MovieGenres extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            deck_left:-60,
            genres:[],
            curgen:"",
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.preSlide = this.preSlide.bind(this);
    }


    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=d113a3fe13f42bdfbcdc57f21764d4a1")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState(
                {
                    movies:movies.results,
                }
            ));
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d113a3fe13f42bdfbcdc57f21764d4a1")
            .then(response => response.json())
            .then(genres=>this.setState({genres:genres.genres}))

    }

    nextSlide(){
        var left = this.state.deck_left;
        if(left>=(-840*1)){
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

    ClickGenreTag(a){
        let id = this.searchGenreID(a);
        let genre_id = "&with_genres=" + id;
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=d113a3fe13f42bdfbcdc57f21764d4a1"+genre_id)
            .then(response=> response.json())
            .then(movies=>this.setState({movies:movies.results}));

    }

    searchGenreID(g){
        let id = -1;
        for(const genre of this.state.genres){
            if(genre.name===g){
                id = genre.id;
            }
        }
        return id;
    }

    render(){
        return(
            <div className="genres">
                <div className="tag-list" style={{"display":"inline"}}>
                    <h3>Genres</h3>
                    <label  onClick={this.ClickGenreTag.bind(this, "Action")}>Action</label>
                    <label  onClick={this.ClickGenreTag.bind(this, "Science Fiction")}>Science Fiction</label>
                    <label  onClick={this.ClickGenreTag.bind(this, "Comedy")}>Comedy</label>
                    <label  onClick={this.ClickGenreTag.bind(this, "Drama")}>Drama</label>
                    <label  onClick={this.ClickGenreTag.bind(this, "Animation")}>Animation</label>
                </div>
                <div className="line"/>
                <div className="genres-hd">
                    <span  className="fa fa-arrow-circle-left arrow" aria-hidden="true" onClick={this.preSlide}/>
                    <span className="fa fa-arrow-circle-right arrow" aria-hidden="true" onClick={this.nextSlide}/>
                </div>
                <div className="genres-bd">
                    <ul className="genres-deck" style={{"left":this.state.deck_left}}>
                        {
                            this.state.movies.map((movie,idx) => {
                                return(
                                    <MovieCard movie={movie} idx={idx} key={idx}/>
                                );})}
                    </ul>
                </div>
            </div>
        )
    }
}