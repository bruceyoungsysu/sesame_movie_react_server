import React from "react";

export default class MovieButton extends React.Component{
    render() {
        return(
            <div className="buttons">
                <button type="button" className="btn">
                    <i className="fa fa-list fa-lg" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn">
                    <i className="fa fa-bookmark fa-lg" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn">
                    <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn">
                    <i className="fa fa-star fa-lg" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}