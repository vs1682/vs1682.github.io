import React, {Component} from 'react';
import './popMenuOnHover.scss';

class PopMenuOnHover extends Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    }
    this.popUpMenu = this.popUpMenu.bind(this);
  }
  
  popUpMenu() {
    this.setState({hovered: !this.state.hovered});
  }
  
  render(){
    let popMenuClassName = this.state.hovered?"popMenu":"showNone";
    return(
      <div className="containerForHover" 
        onMouseEnter={this.popUpMenu} 
        onMouseLeave={this.popUpMenu}>
        <div className="putAnyElementContainer">
          {this.props.putAnyElement}
        </div>
        <div className={popMenuClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PopMenuOnHover;