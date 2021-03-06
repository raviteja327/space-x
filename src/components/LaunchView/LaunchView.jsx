import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import './styles.css';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    duration: 1000,
}


class LaunchView extends React.Component {

    state = {
        launch: {
            links: {
                flickr_images: []
            }
        }
    }

    componentDidMount = () => {
        axios.get('https://api.spacexdata.com/v3/launches/'+this.props.match.params.flight_number)
        .then((response) => 
        this.setState({launch: response.data})
        )
        .catch((error) => console.log(error));
    }

    launchAttr = (title, key) => {
        const value = this.state.launch[key]
        return(
            <div className="attribute">
                <h1>{title}</h1> : &nbsp; &nbsp; &nbsp; <p>{value}</p>
            </div>
        )
    }

    render(){
        const images = this.state.launch.links.flickr_images.length > 0;
        return(
            <div className="launch-view">
                {this.launchAttr('Mission Name', 'mission_name')}
                {this.launchAttr('Flight Number', 'flight_number')}
                {this.launchAttr('Launch Date', 'launch_date_local')}
                {
                    images && (
                    <Zoom {...zoomOutProperties}>
                        {
                            this.state.launch.links.flickr_images.map((each, index) => {
                                return(
                                    <img key={index} style={{width: "100%"}} src={each} alt='images' />
                                )
                            }
                                
                            )
                        }
                    </Zoom>
                    )

                }
                <p className="launch-details">{this.state.launch.details}</p>
            </div>
        )
    }
};

export default withRouter(LaunchView) ;
