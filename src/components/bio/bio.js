import React, {Component} from 'react';
import './bio.scss';

class Bio extends Component {
    render(){
        return(
            <div className="bio">
                <h1 className="animated pulse">Vishal Shinde</h1>
                <p className="animated bounceInLeft">Two and a half years of experience in designing and developing Websites
                    . Currently working as Front End developer in Cognizant, India.
                </p>
            </div>
        );
    }
}

export default Bio;