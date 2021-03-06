import React from 'react';
import Launch from '../Launch/Launch';
import './styles.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class LaunchList extends React.Component {

    state = {
        launches: []
    }

    componentDidMount = () => {
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response) => this.setState({launches: response.data}))
        .catch((error) => console.log(error));
    }

    render(){

        return(
            <div className="launch-list">

                {this.state.launches.map((launch, index) => {
                    return (
                        <div key={'launch_'+index}>
                            <Link to={'/launchview/'+launch.flight_number}>
                                <Launch className="launch" id={launch.flight_number} banner={launch.links.flickr_images[0] ? launch.links.flickr_images : 'https://www.teslarati.com/wp-content/uploads/2020/01/Starlink-V1-L3-B1051-LC-40-012920-Richard-Angle-launch-5-crop-2-c.jpg'}
                                    title={launch.mission_name} launchDate={launch.launch_date_local}
                                    description={launch.details}
                                />
                            </Link>
                        </div>
                    )
                })}

            </div>
        )
    }
};
