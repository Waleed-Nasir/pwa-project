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
import Detailstwo from './components/Details/details-two';
import Blog from './components/Blog/blog-three';
import Registry from './components/Registry/Register';
import Profile from './components/Home/Profile';
import AddPost from './components/Home/AddPost';
import Chat from './components/ChatBox/Chat';
import Peoples from './components/Details/peoples';
import { connect } from "react-redux"
import ShowMessage from './ShowError'
import { AuthMiddleware } from './store/middlewares';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ShowMessageDB: false,
      message: '',
      error: ''
    }
  }
  componentWillMount(){
    const { state } = this.props
   !localStorage.getItem('isAuthenticated') &&this.props.checkUser()
  }
  componentWillReceiveProps = (newProps) => {
    const { state } = newProps
    const { message, error } = state
    if (message) {
      this.setState({ ShowMessageDB: true, message: message, error: error })
      setTimeout(() => {
        this.setState({ ShowMessageDB: false, message: '', error: '' })
      }, 3000);
    }
  }

  render() {
    const { message, error, ShowMessageDB } = this.state
    return (
      <Layout>
        <div>
          <Router history={History}>
            <div>
              <Route exact path="/" component={Index} {...this.props} />
              <Route path="/details" component={DetailsOne}  {...this.props} />
              <Route path="/properties" component={Blog}  {...this.props} />
              <Route path="/findhome" component={Detailstwo}  {...this.props} />
              <Route path="/registry" component={Registry}  {...this.props} />
              <Route path="/profile" component={Profile}  {...this.props} />
              <Route path="/addpost" component={AddPost}  {...this.props} />
              <Route path="/chat" component={Chat}  {...this.props} />
              <Route path="/peoples" component={Peoples}  {...this.props} />

            </div>
          </Router>
        </div>
        <ShowMessage message={message} error={error} ShowMessage={ShowMessageDB} />
      </Layout>

    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    Buttons: state.Main.Buttons,
    Text: state.Main.Text,
    state: state.Auth,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: () => {dispatch(AuthMiddleware.CheckCurrentUser())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
