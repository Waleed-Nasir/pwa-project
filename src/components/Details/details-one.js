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
import OwlCarousel from "react-owl-carousel3";
const options = {
  items: 1,
  nav: true,
  dots: false,
  touchDrag: false,
  mouseDrag: true,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  navText: [
    "<i class='icofont-long-arrow-left'></i>",
    "<i class='icofont-long-arrow-right'></i>"
  ]
};
class Details extends React.Component {
  state = {
    details: {}
  };

  componentWillReceiveProps(nextProps) {
    const abc = nextProps && nextProps.adds;
    for (var property in abc) {
      if (abc.hasOwnProperty(property)) {
        console.log(abc[property]);
        const detailsObject = abc[property];
        this.setState({
          details: {...detailsObject}
        });
      }
    }
  }

  calculateAge = (dob) => {
    if(dob != "Invalid Date"){
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);}
    else{
      return 'N/A'
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      if (this.props.match.params.id && this.props.adds && this.props.adds[this.props.match.params.id]) {
        this.setState({ details: this.props.adds[this.props.match.params.id] })
      }
    }, 2000);

  }
  render() {
    const details = this.state && this.state.details;
    const user = details && details.user;
    return (
      <NoSSR key="1">
        {/* <Preloader fadeDuration={1000}>
                    <Navigation /> */}

        <section className="top-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                   
                <h2 className="banner-title"> {details.title} Details ....</h2>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-details-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="blog-sidebar">
                  <div
                    className="testimonial-item"
                    style={{
                      zIndex: 10,
                      background: "rgb(52, 228, 229)",
                      minHeight: 220
                    }}
                  >
                    <div
                      className="testimonial-content"
                      style={{ zIndex: 10, background: "rgb(52, 228, 229)" }}
                    >
                      <div className="pic">
                        <img
                          src={user&&user.profileImage}
                          alt="client Image"
                        />
                      </div>

                      <h3 className="title">{user && user.Name}</h3>
                      <span className="post">{user && user.skills}</span>
                      <div className="post-containre" style={{ padding: 15 }}>
                        <span className="post">
                          Email &nbsp;&nbsp;:&nbsp;&nbsp; {user && user.email}
                        </span>
                        <span className="post">
                          Phone :&nbsp;&nbsp; {user && user.number}
                        </span>
                        <span className="post">
                          Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; { this.calculateAge(new Date(user && user.dob))}
                        </span>
                        <span className="post">Live in :&nbsp;&nbsp;{user && user.address}</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post"></div>
                  <h4 className="blog-sidebar-title">Post Details</h4>
                  <div className="post-containre">
                    <span className="about-post">Country :&nbsp;&nbsp; {details && details.country}</span>
                    <span className="about-post">City :&nbsp;&nbsp; {details && details.city}</span>
                    <span className="about-post">Area Code :&nbsp;&nbsp; {details && details.areacode}</span>
                    <span className="about-post">Address :&nbsp;&nbsp; {details && details.address}</span>
                    <span className="about-post">Slogan :&nbsp;&nbsp; {details && details.slogan}</span>
                      <span className="about-post">BathRoom :&nbsp;&nbsp; {details && details.BathRoom}</span>
                      <span className="about-post">Hosue for :&nbsp;&nbsp; {details && details.type}</span>
                    <span className="about-post">
                      Room &nbsp;:&nbsp;&nbsp; {details && details.rooms}
                    </span>
                    <span className="about-post">
                      Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{details && details.price}$
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-8 col-lg-8">
                <div className="single-blog-details">
                  <div className="single-blog-img">

                    <div className="pic">
                      <OwlCarousel
                        className="testimonial-carousel owl-carousel owl-theme"
                        {...options}
                      >
                        {details && details.images && details.images.map((imagePreviewUrl, i) =>
                          <img
                            src={imagePreviewUrl}
                            alt="client Image"
                          />
                        )}
                      </OwlCarousel>
                    </div>
                  </div>
                  <h3 className="single-blog-title">
                    {details.title}
                  </h3>
                  <div className="single-post-admin">
                    By <a href="#">{user && user.Name}</a> / <a href="#">12</a> Comments
                  </div>
                  <div className="details-text-area">
                    <p>
                      {details && details.about}
                    </p>

                  </div>
                  <div className="post-tag-media">
                    <div className="row">
                      <div className="col-md-8">
                        <ul className="tag">
                          <li>
                            <span>Tags :</span>
                          </li>
                          <li>
                            <Link href="#">
                              <a>{user && user.tag}</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <div className="post-social-media">
                          <Link href="#">
                            <a>
                              <i className="icofont-facebook"></i>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <i className="icofont-twitter"></i>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <i className="icofont-google-plus"></i>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <i className="icofont-linkedin"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
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
    Buttons: state.Main.Buttons,
    Text: state.Main.Text,
    adds: state.Main.addpost
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ChangeText: () => console.log("call"),
    getPost: () => {
      dispatch(MainMiddleware.GetAdds());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
