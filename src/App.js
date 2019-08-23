import React, { Component } from 'react';
// import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/icofont.css';
import './assets/css/style.scss';
// import './assets/css/color/color-default.scss';
import './assets/css/responsive.css';
import './assets/css/color-switcher.css';
import './static/color/gradient-color-four.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './components';
import Layout from './components/Layout';
import DetailsOne from './components/Details/details-one';
import Blog from './components/Blog/blog-three';
import Registry from './components/Registry/Register';
import Profile from './components/Home/Profile';
import AddPost from './components/Home/AddPost';
class App extends Component {
  render() {
    return (
      <Layout>
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Index} {...this.props} />
            <Route exact path="/details" component={DetailsOne}  {...this.props} />
            <Route exact path="/properties" component={Blog}  {...this.props} />
            <Route exact path="/registry" component={Registry}  {...this.props} />
            <Route exact path="/profile" component={Profile}  {...this.props} />
            <Route exact path="/addpost" component={AddPost}  {...this.props} />

          </div>
        </Router>
      </div>
      </Layout>

    );
  }
}

export default App;
