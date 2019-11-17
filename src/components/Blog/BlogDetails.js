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
class BlogDetails extends React.Component {
  state = {
    details: {}
  };

  componentWillReceiveProps(nextProps) {
    const abc = nextProps && nextProps.blogslist;
    console.log(abc, "nextProps")
    setTimeout(() => {
      if (nextProps.match.params.id && abc && abc[nextProps.match.params.id]) {
        this.setState({ details: abc[nextProps.match.params.id] })
      }
    }, 2000);
    // for (var property in abc) {
    //   if (abc.hasOwnProperty(property)) {
    //     const detailsObject = abc[property];
    //     this.setState({
    //       details: { ...detailsObject }
    //     });
    //   }
    // }
  }
  componentDidMount = () => {
    setTimeout(() => {
      if (this.props.match.params.id && this.props.blogslist && this.props.blogslist[this.props.match.params.id]) {
        this.setState({ details: this.props.blogslist[this.props.match.params.id] })
      }
    }, 2000);

  }
  calculateAge = (dob) => {
    if (dob != "Invalid Date") {
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    else {
      return 'N/A'
    }
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
                <h2 className="banner-title">... Details</h2>
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
                          src={user && user.profileImage && user.profileImage}
                          alt="client Image"
                        />
                        )}
                      </div>


                      <h3 className="title">{user && user.Name}</h3>
                      <span className="post">{user && user.skills}</span>
                      <div className="post-containre" style={{ padding: 15 }}>
                        <span className="post">
                          Email &nbsp;&nbsp;:&nbsp;&nbsp; {user && user.email}
                        </span>
                        <span className="post">
                          Skill :&nbsp;&nbsp; {user && user.skill}
                        </span>
                        <span className="post">
                          Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {this.calculateAge(new Date(user && user.dob))}
                        </span>
                        <span className="post">Live in :&nbsp;&nbsp;{user && user.address}</span>

                      </div>
                    </div>
                  </div>
                  <div className="recent-post"></div>
                  <h4 className="blog-sidebar-title">Post Details</h4>
                  <div className="single-blog-details">
                    <div className="single-blog-img">
                      <div className="single-blog-date">{details.date}</div>
                    </div>
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
                      {details && details.blogText}
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

                {/* <div className="all-comments-content">
                  <h4 className="comment-title">Comments (03)</h4>
                  <div className="comment mb-50">
                    <img
                      src={require("../../images/blog/comment-person1.jpg")}
                      alt="blog"
                    />
                    <div className="comment-details">
                      <h5>
                        Jonson Smith <span>20 Mar 2019 at 11.00 AM</span>
                      </h5>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                      <Link href="#">
                        <a className="replay">
                          <i className="icofont-reply"></i> Replay
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="comment mb-50 reply-comment">
                    <img
                      src={require("../../images/blog/comment-person2.jpg")}
                      alt="blog"
                    />
                    <div className="comment-details reply-comment-details">
                      <h5>
                        Jonson Smith <span>20 Mar 2019 at 11.00 AM</span>
                      </h5>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                      <Link href="#">
                        <a className="replay">
                          <i className="icofont-reply"></i> Replay
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="comment">
                    <img
                      src={require("../../images/blog/comment-person3.jpg")}
                      alt="blog"
                    />
                    <div className="comment-details">
                      <h5>
                        Jonson Smith <span>20 Mar 2019 at 11.00 AM</span>
                      </h5>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                      <Link href="#">
                        <a className="replay">
                          <i className="icofont-reply"></i> Replay
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comment-form">
                  <h4 className="comment-title">Post Your Comment</h4>
                  <form method="post" action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                          required={true}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          required={true}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          className="form-control"
                          id="website_url"
                          name="website_url"
                          placeholder="Website URL"
                          type="text"
                          required={true}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          className="form-control"
                          rows="5"
                          id="message"
                          name="message"
                          placeholder="Type Comments..."
                          required={true}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="text-center">
                          <button type="submit" className="default-button">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
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
    blogslist: state.Main.blogslist,
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
)(BlogDetails);
