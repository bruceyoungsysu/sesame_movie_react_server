import React from "react";
import MovieCard from "./MovieCard";

export default class TVShows extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page1:[],
            page2:[],
            deck_left:-60,
            movies:[],

        };
        // this.nextSlide = this.nextSlide.bind(this);
        this.preSlide = this.preSlide.bind(this);
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=1")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState({movies:this.state.movies.concat(movies.results)})
            );
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=3")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState({movies:this.state.movies.concat(movies.results)})
            );
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=2")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState({movies:this.state.movies.concat(movies.results)})
            );
    }

    nextSlide=page_num=>e=>{
        var left = this.state.deck_left;
        if(left>=(-840*(page_num-1))){
            left = left-168*5;
        }
        this.setState({deck_left:left});
    };

    preSlide(){
        var left = this.state.deck_left;
        if(left<=(-100)){
            left = left+168*5;
        }
        this.setState({deck_left:left});
    }

    render() {
        let page_num = Math.floor(this.state.movies.length/10);
        console.log(page_num);
        return(
            <div className="top-rated screening">
                <div className="tag-list top-rated-tag">
                    <h3>TV Shows</h3>
                </div>
                <div className="screen-line"/>
                <div className="screening-hd">
                    <span  className="fa fa-arrow-circle-left arrow" aria-hidden="true" onClick={this.preSlide}/>
                    <span className="fa fa-arrow-circle-right arrow" aria-hidden="true" onClick={this.nextSlide(page_num)}/>
                </div>

                <div className="genres-bd top-rated-bd">
                    <ul className="genres-deck top-rated-deck" style={{"left":this.state.deck_left, "width":page_num*860+"px"}}>
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