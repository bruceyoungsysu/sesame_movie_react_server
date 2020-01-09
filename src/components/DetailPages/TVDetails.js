import React from "react";
import DetailInfo from "./DetailInfo";
import CastCrew from "./CastCrews";
import Reviews from "./Reviews";

export default class TVDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id:-1,
            details:[],
            genres:[],
            date:"",
            url: "https://image.tmdb.org/t/p/",
            size: "w500",
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

    componentWillMount() {
        // pass the id first
        const {id} = this.props.match.params;
        this.setState({"id":id});
        const url = "https://api.themoviedb.org/3/tv/";
        const newurl = url+ id+"?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US";
        console.log(newurl)
        fetch(newurl)
            .then(response=>response.json())
            .then(details=>{
                this.setState({details:details});
                this.setState({date:details.last_air_date});
                this.setState({genres:details.genres});
                console.log(details);
            });
    }

    componentDidMount (){
        window.scrollTo(0, 0);
        console.log(this.state.id);
    }

    render() {
        return(
            <div>
                <DetailInfo movie_id={this.state.id} type={"tv"}/>
                <CastCrew movie_id={this.state.id} type={"tv"}/>
                <Reviews movie_id={this.state.id} type={"tv"}/>
            </div>
        )
    }
}