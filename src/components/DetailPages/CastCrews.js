import React from 'react';
import CastDetail from "./CastDetail";

export default class CastCrew extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ccs:[],
            casts:[], // this must be set before map
        }
    };

    componentWillMount (){
        const url = "https://api.themoviedb.org/3/movie/";
        const newurl = url+ this.props.movie_id+"/credits?api_key=d113a3fe13f42bdfbcdc57f21764d4a1";
        fetch(newurl)
            .then(response=>response.json())
            .then(details=>{
                this.setState({casts:details.cast});
                console.log(this.state.casts);
            });

    }
    render() {
        return(
            <div className="cast-crew">
            <h5>Top Billed Casts</h5>
                <ul className="cast-deck">
                {
                    this.state.casts.slice(0,5).map((item, idx)=>(
                        <CastDetail cast={item} key={idx}/>
                    ))

                }
                </ul>
            </div>
        )
    }
}