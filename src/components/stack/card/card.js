import React, { Component } from 'react';
import './card.scss';

class Card extends Component {
    render() {
        let animationClass = this.props.animation !== ''?("animated " + this.props.animation): this.props.animation;
        return (
            <a href={this.props.url}>
                <div className={"card " + animationClass}>
                    <img width="100" height="100" alt={this.props.imageText} src={this.props.imageUrl} />
                    <label>{this.props.imageText}</label>
                </div>
            </a>
        );
    }
}

export default Card;