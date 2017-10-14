import React, {Component} from 'react';
import './bio.scss';

class Bio extends Component {
    render(){
        return(
            <div className="bio">
                <h1 className="animated fadeIn">Vishal Shinde</h1>
                <p className="animated fadeIn">Three years of experience in designing and developing Websites
                    . Currently working as a Front End developer at Raja Software Labs, Pune, India.
                </p>
            </div>
        );
    }
}

export default Bio;