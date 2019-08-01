import React, { Component } from 'react';
// import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/icofont.css';
import './assets/css/style.scss';
// import './assets/css/color/color-default.scss';
import './assets/css/responsive.css';
import './assets/css/color-switcher.css';
import './static/color/gradient-color-nine.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './components';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Index} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
