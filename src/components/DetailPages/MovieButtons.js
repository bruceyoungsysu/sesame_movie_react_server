import React from "react";
import {red} from "@material-ui/core/colors";

export default class MovieButton extends React.Component{

    constructor(props){
        super(props);
        this.state={
            logged:false,
            heart: false,
        };

        this.getRecord = this.getRecord.bind(this);
        this.getLogged = this.getLogged.bind(this);
        this.changeHeart = this.changeHeart.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.logged === nextState.logged && this.state.heart === nextState.heart) {
            return false
        }
        return true
    }

    getLogged(){
        fetch("http://localhost:8080/api/profile",{
            credentials: 'include'
        })
            .then(response => response.text())
            .then(data=>{
                if(data.length>0){
                    this.setState({logged:true})
                }
                else{
                    this.setState({logged:false})
                }
            })

    };

    getRecord(){
        if(this.state.logged){
        fetch("http://localhost:8080/api/likes/" + this.props.movie_id, {
                credentials:'include'
            })
            .then((res)=>res.text())
            .then((text)=>text.length?JSON.parse(text):{})
            .then(data=>{
                console.log(data);
                this.setState({heart:data.like});
            })

            // .then(data=>{
            //     console.log(data);
            //     this.setState({heart:data.like});
            //     console.log(this.state.heart)
            // })

    }};


    changeHeart(){
        if(this.state.logged){
        let state = this.state.heart;
        console.log(this.state.heart);
        this.setState({heart: !state});
        console.log(this.state.heart);
        // change the server part of data
        fetch("http://localhost:8080/api/likes/" + this.props.movie_id,
            {
                credentials:'include',
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(!state),
            })
            .then(res=>console.log(res))
    }}

    render() {
        this.getLogged();
        this.getRecord();
        console.log(this.state.heart);
        let heart_button;
        if(this.state.heart===true){
            heart_button = <button type="button" className="btn">
                <i className="fa fa-heart fa-lg heart-on" aria-hidden="true" onClick={this.changeHeart}/>
            </button>
        }
        else{
            heart_button = <button type="button" className="btn">
                <i className="fa fa-heart fa-lg" aria-hidden="true" onClick={this.changeHeart}/>
            </button>
        }
        return(
            <div className="buttons">
                <button type="button" className="btn">
                    <i className="fa fa-list fa-lg" aria-hidden="true"/>
                </button>
                <button type="button" className="btn">
                    <i className="fa fa-bookmark fa-lg" aria-hidden="true"/>
                </button>
                {heart_button}
                <button type="button" className="btn">
                    <i className="fa fa-star fa-lg" aria-hidden="true"/>
                </button>
            </div>
        )
    }
}