import React from "react";
import Markdown from 'react-markdown'

export default class ReviewDetail extends React.Component{
    render() {
        return(
            <div className="review-detail">
                <h5>{"Review by "+ this.props.review.author}</h5>
                <Markdown className="review-text">

                    {this.props.review.content}

                </Markdown>
            </div>
        )
    }
}