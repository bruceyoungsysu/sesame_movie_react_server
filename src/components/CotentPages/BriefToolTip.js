import React from 'react';

export default class BriefToolTip extends React.Component{

    render() {

        return(
            <div  className="brief-tooltip">
                <div className="tip-head">
                <h6>{this.props.movie.title}</h6>
                <label>{this.props.movie.release_date}</label>
                </div>
                <p>{this.props.movie.overview}</p>
            </div>
        )
    }
}