import React from 'react';

export default class CastDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: "https://image.tmdb.org/t/p/",
            size: "w200",
        }
    };

    get_profile() {
        const profile_url = this.state.url+ this.state.size + this.props.cast.profile_path;
        return profile_url;
    }

    render() {
        let profile = this.get_profile();
        return(
            <li className="cast-item">
                <ul className="cast-box">
                    <li className="poster">
                        <img alt="." src={profile} className="cast-poster"/>
                    </li>
                    <li className="title"><div className="cast-name">{this.props.cast.name}</div>
                        <p className="cast-char">{this.props.cast.character}</p></li>
                </ul>
            </li>
        )
    }
}