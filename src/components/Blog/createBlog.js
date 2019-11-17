import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoSSR from "react-no-ssr";
import { Preloader, Placeholder } from "react-preloading-screen";
import ReactWOW from "react-wow";
import Loader from "../Shared/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Common/Footer";
import GoTop from "../Common/GoTop";
import { connect } from "react-redux";
import { MainMiddleware, AuthMiddleware } from "../../store/middlewares";
import MaunMiddleware from "../../store/middlewares/MainMiddleware";
import LinearProgress from "@material-ui/core/LinearProgress";
import OwlCarousel from "react-owl-carousel3";
import NoImage from "../../images/NoImage.jpg";
import Uploader from "../Home/Uploader";
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var todayDatw = dd + '/' + mm + '/' + yyyy;
const options = {
  items: 1,
  nav: false,
  dots: false,
  autoplay: true,
  margin: 40,
  smartSpeed: 500,
  autoplayHoverPause: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    }
  }
};

class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      imagesPreviewUrls: [],
      title: "",
      type: "",
      blogText: "",
      show: false,
      completed: 0
    };
  }
  ChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  getUploadContent = (file, reader) => {
    this.props.UploadFB(file);
    this.setState(prevState => ({
      files: [...prevState.files, file],
      imagesPreviewUrls: [...prevState.imagesPreviewUrls, reader]
    }));
    this.setState({ show: true, completed: 0 });
  };
  componentWillReceiveProps = newProps => {
    const { uploaded } = newProps;
    if (
      uploaded.length === this.state.files.length &&
      this.state.files.length !== 0 &&
      this.state.completed === 0
    ) {
      this.props.showMessage({
        message: "Content Uploaded now you can able to post your add"
      });
      this.setState({ show: false, completed: 100 });
    }
  };

  handleSubmit = e => {
    const { Auth, uploaded } = this.props;
    e.preventDefault();
    const { blogText, files, title, type } = this.state;
    console.log("userrrrrrrrrrr", user);
    var user = Auth.user;
    let blogData = {
      blogText: blogText,
      images: uploaded,
      title: title,
      type: type,
      date:todayDatw,
      user
    };
    // if (localStorage.getItem("isAuthenticated") && this.props.checkUser()) {
      this.props.AddBlog(blogData);
    // } else {
    //   this.props.showMessage({
    //     message: "Only admin have access to create blog"
    //   });
      this.setState({ show: false, completed: 100 });
    // }
  };
  render() {
    const { files, completed, show, title, type, blogText } = this.state;
    return (
      <section
        id="testimonial"
        className="testimonial-section "
        style={{ height: "100vh", padding: "150px 0 130px" }}
      >
        <div className="container">
          <div className="row mt-5" style={{ justifyContent: "center" }}>
            <div className="col-lg-8" style={{ zIndex: 10 }}>
              <div className="contact-form">
                <form id="contactForm" onSubmit={e => this.handleSubmit(e)}>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="form-group">
                        <label>Blog Title</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter your blog title"
                          placeholder="Your Blog Title"
                          name="title"
                          value={title}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>Blog For</label>
                        <input
                          type="text"
                          className="form-control"
                          // required={true}
                          data-error="Please enter hosue for rent / sale"
                          placeholder="Type"
                          name="type"
                          value={type}
                          onChange={this.ChangeHandler}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Blog Content</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      // required={true}
                      data-error="Write your Blog Content"
                      placeholder="Enter your Blog Content here..."
                      name="blogText"
                      value={blogText}
                      onChange={this.ChangeHandler}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <Uploader getUploadContent={this.getUploadContent} />
                  {files.length > 0 && (
                    <LinearProgress
                      variant={completed === 100 ? "determinate" : "query"}
                      value={this.state.completed}
                    />
                  )}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="default-button"
                      disabled={show}
                    >
                      {show
                        ? "Please wait Content is uploading"
                        : "Create Blog"}
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                  {/* {this.successMessage()} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    uploaded: state.Main.uploaded,
    Auth: state.Auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddBlog: data => {
      dispatch(MainMiddleware.AddBlog(data));
    },
    UploadFB: files => {
      dispatch(MaunMiddleware.UploadDoc(files));
    },
    showMessage: dta => {
      dispatch(AuthMiddleware.ShowMessage(dta));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBlog);
