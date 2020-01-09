import React from "react";
import MovieCard from "./MovieCard";

export default class TopRated extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page1:[],
            page2:[],
            deck_left:-60,
            movies:[],

        };
        this.nextSlide = this.nextSlide.bind(this);
        this.preSlide = this.preSlide.bind(this);
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=1")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState({movies:this.state.movies.concat(movies.results)})
            );
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=2")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState({movies:this.state.movies.concat(movies.results)})
            );
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=3")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState({movies:this.state.movies.concat(movies.results)})
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

    render() {
        return(
            <div className="top-rated screening">
                <div className="tag-list top-rated-tag">
                    <h3>Top Rated</h3>
                </div>
                <div className="screen-line"/>
                <div className="screening-hd">
                    <span  className="fa fa-arrow-circle-left arrow" aria-hidden="true" onClick={this.preSlide}/>
                    <span className="fa fa-arrow-circle-right arrow" aria-hidden="true" onClick={this.nextSlide}/>
                </div>

                <div className="genres-bd top-rated-bd">
                    <ul className="genres-deck top-rated-deck" style={{"left":this.state.deck_left}}>
                        {
                            this.state.movies.map((movie, idx)=>{
                                 return(
                                     <MovieCard movie={movie} idx={idx} key={idx}/>
                                 )
                             })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}