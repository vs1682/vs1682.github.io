import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FlexboxHeader from './src/components/menu/menu.js';
import Bio from './src/components/bio/bio.js';
import Stack from './src/components/stack/stack.js';
import MetaData from './src/components/metaData/metaData.js';
import './src/assets/app.scss';

class Portfolio extends React.Component{
  render(){
    return(
      <Router>
        <div className="portfolio">
          <div className="metaDataContainer">
            <MetaData />
          </div>
          <div className="home">
            <Route exact={true} path="/" component={Bio} />
            <Route path="/stack" component={Stack} />
          </div>
          <div className="menu">
            <FlexboxHeader />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));