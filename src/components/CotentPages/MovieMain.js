import React from 'react'
import Header from "./Header";
import MovieTrending from "./MovieTrending";
import MovieGenres from "./MovieGenres";

class MovieMain extends React.Component{

    render(){
        return(
            <div>
                <MovieTrending/>
                <MovieGenres/>
            </div>
        )
    }
}

export default MovieMain;