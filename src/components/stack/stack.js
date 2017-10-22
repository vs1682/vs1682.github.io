import React, {Component} from 'react';
import Card from './card/card.js';
import html5Logo from '../../assets/images/html5.svg';
import css3Logo from '../../assets/images/css3.svg';
import javascriptLogo from '../../assets/images/javascript.svg';
import bootstrapLogo from '../../assets/images/bootstrap.svg';
import sassLogo from '../../assets/images/sass.svg';
import reactLogo from '../../assets/images/react.svg';
import webpackLogo from '../../assets/images/webpack.svg';
import reduxLogo from '../../assets/images/redux.svg';
import './stack.scss';

class Stack extends Component {

    render(){
        return(
            <div className="stack">
                <Card 
                    imageUrl={html5Logo}
                    imageText="html5"
                    url="https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5"
                    animation="fadeInDown"
                />
                <Card 
                    imageUrl={css3Logo}
                    imageText="css3"
                    url="https://developer.mozilla.org/en/docs/Web/CSS/CSS3"    
                    animation="fadeInDown"
                />
                <Card 
                    imageUrl={javascriptLogo} 
                    imageText="javascript"
                    url="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"    
                    animation="fadeInDown"
                />
                <Card 
                    imageUrl={bootstrapLogo}
                    imageText="bootstrap"
                    url="http://getbootstrap.com/"    
                    animation="fadeInDown"
                />
                <Card 
                    imageUrl={sassLogo}
                    imageText="sass"
                    url="http://sass-lang.com/"
                    animation="fadeInDown"
                />               
                <Card 
                    imageUrl={reactLogo}
                    imageText="react"
                    url="https://facebook.github.io/react/"
                    animation="fadeInDown"
                />
                <Card 
                    imageUrl={reduxLogo}
                    imageText="redux"
                    url="http://redux.js.org/"
                    animation="fadeInDown"
                />
                <Card 
                    imageUrl={webpackLogo}
                    imageText="webpack"
                    url="https://webpack.github.io/"
                    animation="fadeInDown"
                />
            </div>
        );
    }
}

export default Stack;