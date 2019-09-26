import React from 'react';
import SkyLight from 'react-skylight';
import StarRatingComponent from "react-star-rating-component";
import ReactDOM from "react-dom";

class RatingPages extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            keys: [],
            clicked: {key:{movie_id:"", user_id:""}, rating:""}
        };
        this.updateRecord = this.updateRecord.bind(this);
        this.initState = this.initState.bind(this);
        this.deleteByID = this.deleteByID.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    initState(){
        var initState = {key:{movie_id:"", user_id:""}, rating:""};
        this.setState({clicked:initState});
        this.state.clicked = initState;
        console.log(this.state.clicked)
    }

    deleteByID(userid, movieid){
        // delete from state
        fetch("http://localhost:8080/api/rating/delete/"+userid+"/"+movieid,{
            method: 'delete',
        })
            .then(response=>response.json())
            .then((movies)=>{
                console.log(movies);
                this.setState(
                    {
                        content:movies,
                    }
                );
            })

    }

    componentDidMount(){
        fetch("http://localhost:8080/api/ratings")
            .then(response => response.json())  //handle promises
            .then(movies=>this.setState(
                {
                    content:movies,
                    keys:Object.keys(movies[0])
                }
            ));
    }

    updateRecord(){
        //update to state
        fetch("http://localhost:8080/api/addRating",{
            method: 'post',
            body: JSON.stringify(this.state.clicked),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response=>response.json())
            .then((movies)=>{
                console.log(this.state.keys);
                this.setState(
                    {
                        content:movies,
                    }
                );
            })
    }

    render(){
        var myBigGreenDialog = {
            backgroundColor: '#ffffff',
            color: '#ffffff',
            width: '50%',
            height: '600px',
            marginTop: '-300px',
            marginLeft: '-13%',
        };

        return(
            <div id="right-panel" className="right-panel">
                <div className="content">
                    <table className="table table-striped"><tbody>
                    <tr>
                        <td>Movie ID</td>
                        <td>User ID</td>
                        <td>Rating</td>
                        <td><button onClick={()=>{
                            this.initState();
                            this.customDialog.show();
                        }}>+</button></td>
                    </tr>
                    {
                        this.state.content.map((movie,idx) => {
                            return(
                                <tr>

                                    <td onClick={()=>{
                                                    this.setState({clicked:movie});
                                                    this.customDialog.show();
                                    }}>{movie["key"]["movie_id"]}</td>
                                    <td onClick={()=>{
                                        this.setState({clicked:movie});
                                        this.customDialog.show();
                                    }}>{movie["key"]["user_id"]}</td>
                                    <td onClick={()=>{
                                        this.setState({clicked:movie});
                                        this.customDialog.show();
                                    }}>{movie["rating"]}</td>

                                    <td onClick={()=>{
                                        this.deleteByID(movie["key"]["movie_id"], movie["key"]["user_id"]);

                                    }}><button>delete</button></td>
                                </tr>
                            );
                        })}

                    </tbody></table>
                    <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={ref => this.customDialog = ref}>
                        <form>
                                <div className="form-row">
                                    <p className="col">Movie ID</p>
                                    <input type="text" className="col" value={this.state.clicked["key"]["movie_id"]}
                                                   onChange={(event)=>{
                                                       var temp = this.state.clicked;
                                                       temp["key"]["movie_id"] = event.target.value;
                                                       this.setState({
                                                           clicked:temp
                                                       });
                                                       console.log(this.state.clicked);
                                                   }}/>
                                </div>

                                <div className="form-row">
                                <p className="col">User ID</p>
                                <input type="text" className="col" value={this.state.clicked["key"]["user_id"]}
                                onChange={(event)=>{
                                var temp = this.state.clicked;
                                temp["key"]["user_id"] = event.target.value;
                                this.setState({
                                    clicked:temp
                                });
                                console.log(this.state.clicked);
                            }}/>
                                </div>

                            <div className="form-row">
                                <p className="col">Rating</p>
                                <input type="text" className="col" value={this.state.clicked["rating"]}
                                       onChange={(event)=>{
                                           var temp = this.state.clicked;
                                           temp["rating"] = event.target.value;
                                           this.setState({
                                               clicked:temp
                                           });
                                           console.log(this.state.clicked);
                                       }}/>
                            </div>

                            <button type="button" onClick={()=>{
                                console.log(this.state.clicked);
                                this.updateRecord();
                            }}> update </button>
                        </form>
                    </SkyLight>
                </div></div>
        )
    }
}

export default RatingPages;