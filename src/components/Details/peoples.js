import { Link } from "react-router-dom";
import NoSSR from "react-no-ssr";
import { Preloader, Placeholder } from "react-preloading-screen";
import Loader from "../Shared/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Common/Footer";
import GoTop from "../Common/GoTop";
import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthMiddleware, MainMiddleware } from "../../store/middlewares";
import LinearProgress from "@material-ui/core/LinearProgress";

class Peoples extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "",
      age: "",
      noPreference: "",
      active: 'all',
      gender: 'both'
    }
    this.city = React.createRef();
    this.age = React.createRef();
    this.noPreference = React.createRef();
    this.active = React.createRef();
    this.gender = React.createRef();
  }

  calculateAge = dob => {
    if (dob != "Invalid Date") {
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    } else {
      return "N/A";
    }
  };
  doUpdate = (e) => {
    e.preventDefault()
    this.setState({
      city: this.city.current.value, age: this.age.current.value, noPreference: this.noPreference.current.value,
      active: this.active.current.value, gender: this.gender.current.value
    })
  }
  render() {
    const { state, showMessage, user, history, people } = this.props;
    const { city, age, noPreference, gender, active } = this.state;
    var mapData = Object.values(people).filter((data) =>
    (data.uid !== user.uid)&&
    (active !== 'all' ? Boolean(data.active) === (active === 'false'||false?false:true) : true)&&
      (gender !== 'both' ? data&&data.gender?data.gender.toUpperCase() === gender.toUpperCase():true : true) &&
      (age > 0 ? data.dob ? age == this.calculateAge(new Date(data.dob)) : true : true) &&data&&data.address? data.address.toUpperCase().includes(city.toUpperCase()):true)
    console.log('mp', mapData, city, age, noPreference, gender, active)
    return (
      <NoSSR key="1">
        {/* <Preloader fadeDuration={1000}>
                    <Navigation /> */}

        <section className="top-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="contact-form">
                  <form id="contactForm" >
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            required={true}
                            data-error="Please enter city"
                            placeholder="New York City"
                            ref={this.city}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-2">
                        <div className="form-group">
                          <label>Age</label>
                          <input
                            type="number"
                            className="form-control"
                            required={true}
                            data-error="Please enter number of rooms"
                            placeholder="25"
                            ref={this.age}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <label>No Preference</label>
                          <input
                            type="number"
                            className="form-control"
                            required={true}
                            data-error="Please enter number of rooms"
                            placeholder="25"
                            ref={this.noPreference}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-2">
                        <div className="form-group">
                          <label>Last Active</label>
                          <select  ref={this.active} className="form-control" style={{padding:10}}>
                            <option className="form-control" value="all">All</option>
                            <option className="form-control" value={true}>Online</option>
                            <option className="form-control" value={false}>Offline</option>
                          </select>
                          {/* <input
                            type="text"
                            className="form-control"
                            required={true}
                            data-error="Please enter your range"
                            placeholder="Your Price"
                            ref={this.active}
                          /> */}
                          {/* <input type="range" min="1" max="100"  class="slider" id="myRange"></input>
                                             <p>Value: <span id="demo"></span></p> */}
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <label>Gender</label>
                          {/* <input
                            type="text"
                            className="form-control"
                            required={true}
                            data-error="Please enter number of rooms"
                            placeholder="Male/Female"
                            ref={this.gender}
                          /> */}
                           <select  ref={this.gender} className="form-control" style={{padding:10}}>
                            <option className="form-control" value="both">All</option>
                            <option className="form-control" value="Male">Male</option>
                            <option className="form-control" value="Female">Female</option>
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-2 mt-4">
                        <div className="form-group">
                          <button onClick={(e) => this.doUpdate(e)} className="default-button">
                            Find Now...
                            <i className="icofont-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h2 className="banner-title">
                  Find People and connect
                </h2>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Community</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section
          id="blog"
          className="blog-details-section"
          style={{ background: "#1a1a1a" }}
        >
          <div className="container">
            <div className="row">
              {people && people ? (
                !Object.keys(people).length ? (
                  <div className="container">
                    <h2 className="banner-title">Please wait...</h2>
                    <LinearProgress variant={"query"} />
                  </div>
                ) : (
                 mapData.length>0? mapData.map(
                      PDT =>
                        user.uid !== PDT.uid && (
                          <div className="col-lg-3" style={{ height: "460px" }}>
                            <div className="testimonial-item">
                              <div className="post-containre">
                                {/* <span className="about-post">
                                Email :&nbsp;&nbsp; {PDT.email}
                              </span> */}
                                <span className="about-post">
                                  Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{" "}
                                  {PDT.dob
                                    ? this.calculateAge(new Date(PDT.dob))
                                    : "N/A"}
                                </span>
                                <span className="about-post">
                                  Gender &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{" "}
                                  {PDT.gender
                                    ? PDT.gender
                                    : "N/A"}
                                </span>
                                <span className="about-post">
                                  Lives &nbsp;:&nbsp;&nbsp;{" "}
                                  {PDT.address ? PDT.address : "N/A"}
                                </span>
                                <div className="status">
                                  <i className={PDT.active ? "icofont-circled-down online" : "icofont-circled-down offline"}></i>{PDT.active ? "Online" : "Offline"}
                                </div>
                              </div>
                              <p className="post-discription">
                                <b>
                                  <b>Tag Line:</b>
                                </b>{" "}
                                There are many variations of passages of Lorem
                                Ipsum available,but the majorityhave suffered
                                alteration.
                            </p>

                              <div className="testimonial-content">
                                <div className="pic">
                                  <img
                                    src={
                                      PDT.profileImage
                                        ? PDT.profileImage
                                        : require("../../images/client/1.png")
                                    }
                                    alt="client Image"
                                  />
                                </div>
                                <h3 className="title">{PDT.Name}</h3>
                                <span className="post">
                                  {PDT.skill ? PDT.skill : "N/A"}
                                </span>
                                <div
                                  className="default-button"
                                  style={{
                                    marginTop: 25,
                                    height: 30,
                                    paddingTop: 5,
                                    cursor: "pointer"
                                  }}
                                  onClick={
                                    state.isAuthenticated
                                      ? !user.number || !user.dob
                                        ? () =>
                                          showMessage({
                                            message:
                                              "Sorry you need to compelet your profile first"
                                          })
                                        : () => history.push(`/chat/${PDT.uid}`)
                                      : () =>
                                        showMessage({
                                          message:
                                            "Sorry you need to login to use chat feature"
                                        })
                                  }
                                >
                                  Start Chat
                              </div>
                              </div>
                            </div>
                          </div>
                        )
                    ):<div className='col-lg-4'>
                               
                    <h2>Sorry there is match Avilabel</h2>
            </div>
                  )
              ) : (
                  <div className="col-lg-4">
                    <h2>Sorry there is no add Avilabel</h2>
                  </div>
                )}
            </div>
          </div>
        </section>

        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />

        <Placeholder>
          <Loader />
        </Placeholder>
        {/* </Preloader> */}
      </NoSSR>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.Main.people,
    state: state.Auth,
    user: state.Auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showMessage: dta => {
      dispatch(AuthMiddleware.ShowMessage(dta));
    },
    getPost: () => {
      dispatch(MainMiddleware.GetAdds());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Peoples);
