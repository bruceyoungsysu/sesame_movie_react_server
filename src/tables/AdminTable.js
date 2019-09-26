import React from 'react';
import SkyLight from 'react-skylight';
import StarRatingComponent from "react-star-rating-component";
import ReactDOM from "react-dom";

class AdminTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            keys: [],
            clicked: {}
        };
        this.updateRecord = this.updateRecord.bind(this);
        this.initState = this.initState.bind(this);
        this.deleteByID = this.deleteByID.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    initState(){
        var initState = {};
        var i;
        for(i=0; i<this.state.keys.length; i++){
            var key = this.state.keys[i];
            initState[key]="";
        }
        this.setState({clicked:initState});
        this.state.clicked = initState;
        console.log(this.state.clicked)
    }

    deleteByID(id){
        // delete from state
        fetch("http://localhost:8080/api/admin/delete/"+id,{
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
        fetch("http://localhost:8080/api/admins")
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
        fetch("http://localhost:8080/api/addAdmin",{
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
                        {
                            this.state.keys.map((key, idx)=>{
                                return(
                                    <td>{key}</td>
                                )})
                        }
                        <td><button onClick={()=>{
                            this.initState();
                            this.customDialog.show();
                        }}>+</button></td>
                    </tr>
                    {
                        this.state.content.map((movie,idx) => {
                            return(
                                <tr>
                                    {
                                        this.state.keys.map((key, idx)=>{
                                            return(
                                                <td onClick={()=>{
                                                    this.setState({clicked:movie});
                                                    this.customDialog.show();
                                                }}>{movie[key]}</td>
                                            )})
                                    }
                                    {/*<td onClick={()=>{*/}
                                        {/*this.deleteByID(movie.adminID);*/}

                                    {/*}}><button>delete</button></td>*/}
                                </tr>
                            );
                        })}

                    </tbody></table>
                    <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={ref => this.customDialog = ref}>
                        <form>
                            {
                                this.state.keys.map((key,idx)=>{
                                    return(
                                        <div className="form-row">
                                            <p className="col">{key}</p>
                                            <input type="text" className="col" value={this.state.clicked[key]}
                                                   onChange={(event)=>{
                                                       var temp = this.state.clicked;
                                                       temp[key] = event.target.value;
                                                       this.setState({
                                                           clicked:temp
                                                       });
                                                       console.log(this.state.clicked);
                                                   }}/>
                                        </div>
                                    )
                                })
                            }

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

export default AdminTable;