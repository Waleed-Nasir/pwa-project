import { Link } from "react-router-dom";
import NoSSR from "react-no-ssr";
import { Preloader, Placeholder } from "react-preloading-screen";
import ReactWOW from "react-wow";
import Loader from "../Shared/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Common/Footer";
import GoTop from "../Common/GoTop";
import React, { Component } from "react";
import { connect } from "react-redux";
import { MainMiddleware, AuthMiddleware } from "../../store/middlewares";
class Blog extends React.Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { Main } = this.props
    return (
      <NoSSR key="1">
        <section className="top-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="banner-title">HouseIt Blog </h2>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">HouseIt Blog </li>
                
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-details-section">
          <div className="container">
            <div className="row">
            <div className="col-md-12 col-lg-12">
                <div className="row">
             {Main.blogslist&&Object.values(Main.blogslist).map((data)=> 
                  <div className="col-md-12 col-lg-4">
                    <ReactWOW delay="0.1s" animation="fadeInUp">
                      <div className="single-blog-post">
                        <div className="blog-img" onClick={()=>this.props.history.push('BlogDetails/'+data.key)}>
                          <Link href="/details">
                            <a>
                              <img
                                src={data.images[0]}
                                alt="Blog Post Image"
                              />
                            </a>
                          </Link>
                          <div className="blog-date">{data.date}</div>
                        </div>

                        <div className="blog-info">
                          <h6 className="blog-title">
                            <Link href="/details">
                              <a>{data.title}</a>
                            </Link>
                          </h6>
                          <div className="post-admin">
                          Posted By <a href="#">{data.user.Name}</a>
                          </div>
                          <div style={{height:100, overflow:"hidden"}}>
                           <b>Type:</b> {data.blogText}
                          </div>
                          <b>See more...</b>
                          <Link >
                            <a className="read-more-btn" onClick={()=>this.props.history.push('BlogDetails/'+data.key)}>Read More</a>
                          </Link>
                        </div>
                      </div>
                    </ReactWOW>
              </div>)}
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
      </NoSSR>
    );
  }
}
const mapStateToProps = state => {
  return {
    Main: state.Main,
    Auth: state.Auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddBlog: data => {
      dispatch(MainMiddleware.AddBlog(data));
    },
    showMessage: dta => {
      dispatch(AuthMiddleware.ShowMessage(dta));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);