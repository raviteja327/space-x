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
        // console.log('Launches');
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response) => this.setState({launches: response.data}))
        .catch((error) => console.log(error));
    }

    render(){

        // console.log(this.state.launches[0]);

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

                {/* <Launch className="launch" banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" 
                    title="FalconSat" launchDate="2006-03-25T10:30:00+12:00" 
                    description="Engine failure at 33 seconds and loss of vehicle" 
                />
                <Launch className="launch" banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" 
                    title="DemoSat" launchDate="2007-03-21T13:10:00+12:00" 
                    description="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage" 
                /> */}
            </div>
        )
    }
};
