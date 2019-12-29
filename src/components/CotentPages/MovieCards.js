import React from 'react';
import SkyLight from 'react-skylight';
import StarRatingComponent from 'react-star-rating-component';
import RatingSerice from '../../services/RatingService'

class ExampleCustom extends React.Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}
ExampleCustom.displayName = 'ExampleCustom';

export default class MovieCards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            selected:{},
            rating:0,
            login:-1
        };
        this.getRatingById = this.getRatingById.bind(this);
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        console.log(nextValue);
        console.log(this.state.selected);
        RatingSerice.addOneRating(this.state.selected.movieID,nextValue );
    }

    getRatingById(m_id){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/ratings/"+m_id, {
            method: 'get',
            credentials: 'include',
        })

            .then((response)=> {
                if(response.ok){
                    this.setState({login:1},function () {
                        console.log(this.state.login);
                        this.customDialog.show()});
                    return response.json()
                }
            })
            .then((rating) => {
                if(rating ==null){
                    this.setState({
                        rating: 0
                    });
                }
                else{
                this.setState({
                rating: rating.rating
            });}
            });
    }


    componentDidMount(){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/movies")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState(
            {
                movies:movies,
            }
        ));
    }

    render(){
        var myBigGreenDialog = {
            backgroundColor: '#FB966E',
            color: '#ffffff',
            width: '500px',
            height: '300px',
            marginTop: '-300px',
            marginLeft: '-13%',
        };

        return(
            <div id="right-panel" className="right-panel">
                <div className="content">
                    <div className="row">
                        {
                            this.state.movies.map((movie,idx) => {
                                    return(
                                        <div className="col-md-3 col-lg-3" id={idx}>
                                            <section>
                                            <a href="/#" onClick={() => {
                                                this.setState({
                                                    selected:movie
                                                });
                                                console.log(movie.movieID);
                                                this.getRatingById(movie.movieID);
                                            }}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="box-title">{movie.title}</h4>
                                                        <div className="calender-cont widget-calender">
                                                            <img src="favicon.ico"/>
                                                        </div>
                                                    </div>
                                                </div></a></section>
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
                <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={ref => this.customDialog = ref}>
                    <p className="text-center">Title: {this.state.selected.title}</p>
                    <p className="text-center">Budget: {this.state.selected.budget}</p>
                    <p className="text-center">Status: {this.state.selected.status}</p>
                    <p className="text-center">Company: {this.state.selected.productionComp}</p>
                    <p className="text-center">TMPD_ID: {this.state.selected.tmpdID}</p>
                    <p className="text-center">Popularity: {this.state.selected.popularity}</p>



                    <form>
                        <div className="text-center ">
                            {/*<p>Rating</p>*/}
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value = {this.state.rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                        </div>
                    </form>
                </SkyLight>
            </div>
        )
    }
}