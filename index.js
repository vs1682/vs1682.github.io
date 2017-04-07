import React from 'react';
import ReactDOM from 'react-dom';

import FlexboxHeader from './src/components/menu/menu.js';

import MetaData from './src/components/metaData/metaData.js';

import './src/assets/app.scss';

class Portfolio extends React.Component{
  render(){
    return(
      <Router>
        <div className="portfolio">
          <div className="metaDataContainer">
          
          </div>
          <div className="home">
          
          </div>
          <div className="menu">
          
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));