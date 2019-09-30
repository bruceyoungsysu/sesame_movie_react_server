import React from 'react';
import ReviewDetail from "./ReviewDetail";

export default class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reviews:[], // this must be set before map
        }
    };

    componentWillMount (){
        const url = "https://api.themoviedb.org/3/movie/";
        const newurl = url+ this.props.movie_id+"/reviews?api_key=d113a3fe13f42bdfbcdc57f21764d4a1&language=en-US&page=1";
        fetch(newurl)
            .then(response=>response.json())
            .then(details=>{
                this.setState({reviews:details.results});
                console.log(this.state.reviews);
            });

    }

    render() {
        return(
            <div className="reviews">
                <h5>Reviews</h5>
                    {
                        this.state.reviews.slice(0,6).map((item, idx)=>(
                            <ReviewDetail review={item} key={idx}/>
                        ))

                    }
            </div>
        )
    }
}