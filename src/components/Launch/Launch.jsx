import React from 'react';
import './styles.css';

export default class Launch extends React.Component {
    render(){
        return(
            <div className="launch">
                <img src={this.props.banner} alt="SpaceX" />
                <div className="content">
                    <div className="info">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.launchDate}</h2>
                    </div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
};
