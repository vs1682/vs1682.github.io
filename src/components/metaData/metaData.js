import React, {Component} from 'react';
import reactLogo from '../../assets/images/react.svg'
import './metaData.scss';

class MetaData extends Component {
    render(){
        return(
            <div className="metaData">
                <div className="roundSidedButton">
                    <a href="https://facebook.github.io/react/">
                        Made with <img width="40" height="40" alt="react" 
                                    src={reactLogo} />
                    </a>
                </div>
                <div className="roundSidedButton">
                    <a href="mailto:vishalshinde1682@gmail.com">Hire Me!</a>
                </div>
            </div>
        );
    }
}

export default MetaData;