import React from 'react'
import MovieTrending from "./MovieTrending";
import MovieGenres from "./MovieGenres";
import TopRated from "./TopRated";
import TVShows from "./TVShows";

class MovieMain extends React.Component{

    render(){
        return(
            <div>
                <MovieTrending/>
                <MovieGenres/>
                <TVShows/>
            </div>
        )
    }
}

export default MovieMain;