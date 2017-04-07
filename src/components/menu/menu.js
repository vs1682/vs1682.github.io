import React from 'react';
import {Link} from 'react-router-dom';
import PopMenuOnHover from './popMenuOnHover/popMenuOnHover.js';
import './menu.scss';

class FlexboxHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      toggle: false
    }
  }
  
  handleClick(event){
    const target = event.target;
    let toggle = this.state.toggle;
    if(target.nodeName === 'LABEL' || target.nodeName === 'A'){
      console.log(target.nodeName);
      if(toggle)
        this.setState({toggle: !toggle});
    }
    if(target.nodeName === 'BUTTON' || target.nodeName === 'SPAN'){
      this.setState({toggle: !toggle});
    }
  }
  
  render(){
    const element = <label>myWork</label>;
    let showClass = '';
    if(this.state.toggle)
      showClass = 'show-header-links';
    return(
      <div className={"responsive-header " + showClass}>
        <div className="header-links">
          <label onClick={this.handleClick}><Link to="/">home</Link></label>
          <label onClick={this.handleClick}><Link to="/stack">stack</Link></label>
          {/*<label><Link to="/projects">projects</Link></label>*/}
          <PopMenuOnHover putAnyElement={element}>
              <a href="https://github.com/vs1682" className="popMenuElement">
                <span className="fa fa-github"></span>
              </a>
              <a href="https://codepen.io/vs1682" className="popMenuElement">
                <span className="fa fa-codepen"></span>
              </a>
              <a href="https://twitter.com/vs1682" className="popMenuElement">
                <span className="fa fa-twitter"></span>
              </a>
          </PopMenuOnHover>
        </div>
        <button type="button" onClick={this.handleClick}>
          <span className="fa fa-bars"></span>
        </button>
      </div>
    );
  }
}

export default FlexboxHeader;