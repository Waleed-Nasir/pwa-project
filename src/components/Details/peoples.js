import { Link } from 'react-router-dom'
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Loader from '../Shared/Loader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop'
import React, { Component } from 'react';
import { connect } from "react-redux"

 class Peoples extends React.Component {
    render() {
        return (
            <NoSSR key="1">
                {/* <Preloader fadeDuration={1000}>
                    <Navigation /> */}

                    <section className="top-banner-area"> 
                        <div className="container"> 
                            <div className="row"> 
                                <div className="col-lg-6"> 
                                    <h2 className="banner-title">Find People do Chats and much more</h2>   
                                </div>
                                <div className="col-lg-6"> 
                                    <ol className="breadcrumb">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li className="active">Peoples</li>
                                    </ol>   
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="blog" className="blog-details-section" style={{background:'#1a1a1a'}}> 
                        <div className="container"> 
                            <div className="row"> 
                            <div className="col-lg-3" style={{height:'460px'}}> 
                                <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email :&nbsp;&nbsp; 444$</span>
                                        <span className="about-post">Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Lives &nbsp;:&nbsp;&nbsp; 4</span>
                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                        <div className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}>
                                     Start Chat
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3" style={{height:'460px'}}> 
                                <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email :&nbsp;&nbsp; 444$</span>
                                        <span className="about-post">Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Lives &nbsp;:&nbsp;&nbsp; 4</span>
                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                        <div className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}>
                                     Start Chat
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3" style={{height:'460px'}}> 
                                <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email :&nbsp;&nbsp; 444$</span>
                                        <span className="about-post">Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Lives &nbsp;:&nbsp;&nbsp; 4</span>
                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                        <div className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}>
                                     Start Chat
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3" style={{height:'460px'}}> 
                                <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email :&nbsp;&nbsp; 444$</span>
                                        <span className="about-post">Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Lives &nbsp;:&nbsp;&nbsp; 4</span>
                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                        <div className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}>
                                     Start Chat
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3" style={{height:'460px'}}> 
                                <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email :&nbsp;&nbsp; 444$</span>
                                        <span className="about-post">Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Lives &nbsp;:&nbsp;&nbsp; 4</span>
                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                        <div className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}>
                                     Start Chat
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3" style={{height:'460px'}}> 
                                <div className="testimonial-item">
                                    <div className="post-containre">
                                        <span className="about-post">Email :&nbsp;&nbsp; 444$</span>
                                        <span className="about-post">Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Lives &nbsp;:&nbsp;&nbsp; 4</span>
                                    </div>
                                    <p className="post-discription"><b><b>Tag Line:</b></b> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                   
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                        <div className="default-button" style={{marginTop:25,height:30,paddingTop:5,cursor: 'pointer'}}>
                                     Start Chat
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
      Buttons: state.Main.Buttons,
      Text: state.Main.Text,
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      ChangeText: () => console.log('call')
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Peoples);