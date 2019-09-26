import React from 'react';
import ReactDOM from 'react-dom';
import DetailInfo from "./DetailInfo";
import CastCrew from "./CastCrews";
import Reviews from "./Reviews";

export default class MovieDetail extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            movie_id:-1,
            details:[],
            reviews:[]
        }
    }

    componentWillMount() {
        // pass the id first
        const {id} = this.props.match.params;
        this.setState({"movie_id":id});
    }

    componentDidMount (){

        fetch("https://api.themoviedb.org/3/movie/28/credits?api_key=d113a3fe13f42bdfbcdc57f21764d4a1")
            .then(respose=>respose.json())
            .then(credits=>console.log(credits));

        fetch("https://api.themoviedb.org/3/movie/28/reviews?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=1")
            .then(response => response.json())  //handle promises
            .then(reviews=>this.setState(
                {
                    reviews:reviews.results,
                }
            ));
    }


    render() {
        return(
            <div>
                <DetailInfo movie_id={this.state.movie_id}/>
                <CastCrew movie_id={this.state.movie_id}/>
                <Reviews movie_id={this.state.movie_id}/>
            </div>
        )
    }
}
