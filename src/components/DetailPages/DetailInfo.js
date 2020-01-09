import React from 'react';
import MovieButton from "./MovieButtons";

export default class DetailInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            details:[],
            url: "https://image.tmdb.org/t/p/",
            size: "w500",
            release_date:"",
            genres:[],
            movie_id:-1,
        }
    };

    getposter(){
        let url = this.state.url+this.state.size+this.state.details.poster_path;
        return url
    };

    getbackdrop(){
        let backdrop = this.state.url + "w500" + this.state.details.backdrop_path;
        return backdrop;
    }

    componentWillMount (){
        const url = "https://api.themoviedb.org/3/"+this.props.type+"/";
        this.setState({movie_id:this.props.movie_id});
        const newurl = url+ this.props.movie_id+"?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US";
        fetch(newurl)
            .then(response=>response.json())
            .then(details=>{
                this.setState({details:details});
                if(details.release_date){
                    this.setState({release_date:details.release_date});
                }
                else if(details.last_air_date){
                    this.setState({release_date:details.last_air_date});
                }
                this.setState({genres:details.genres});
                console.log(details);
            });

    }

    render() {
        const backdrop_style = {
            "background-image":"url("+this.getbackdrop()+")",
            "background-repeat":"no-repeat",
            "background-size":"cover",
        };

        let poster = this.getposter();
        let backdrop = this.getbackdrop();
        console.log(backdrop);
        return(
            <div className="detail-info">
                <div className="poster">
                    <img alt="." src={poster}/>
                </div>
                <div className="detail-title">
                    <h1 className="title">{this.state.details.title|| this.state.details.name}</h1>
                    <span className="date">{this.state.release_date.split("-")[0]}</span>
                </div>
                <MovieButton movie_id = {this.props.movie_id}/>
                <div className="detail-overview">
                    <h5>Overview</h5>
                    <p>{this.state.details.overview}</p>
                </div>
                <div className="detail-genre">
                    <h5>Genres</h5>
                    {
                        this.state.genres.map((genre, idx)=>(
                            <span className="g" key={idx}>{genre.name}</span>
                        ))
                    }
                </div>
                <img className="backdrop" src={backdrop}/>
            </div>
        )
    }
}