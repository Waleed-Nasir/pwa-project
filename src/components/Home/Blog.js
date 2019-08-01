import { Link } from 'react-router-dom'
import ReactWOW from 'react-wow';
import React, { Component } from 'react';

export default class Blog extends React.Component {
    render() {
        return (
            <section id="blog" className="blog-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>Latest Blog Post</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                
                    <ReactWOW delay='0.5s' animation='fadeInUp'>
                        <div className="horizontal-post single-blog-post">
                            <div className="row"> 
                                <div className="col-lg-5"> 
                                    <div className="blog-img">
                                        <Link href="/details-one">
                                            <a onClick={() => window.location.refresh()}>
                                                <img src={require("../../images/blog/1.jpg")} alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7">         
                                    <div className="blog-info">
                                        <h6 className="blog-title">
                                            <Link href="/details-one">
                                                <a onClick={() => window.location.refresh()}>Awesome app landing page</a>
                                            </Link>
                                        </h6>
                                        <div className="post-admin">
                                            By <a href="#">admin</a> / <a href="#">12</a> Comments / <span className="post_date">20 Mar, 2019</span>
                                        </div>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="/details-one">
                                            <a onClick={() => window.location.refresh()} className="default-button">
                                                Read More 
                                                <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                    
                    <ReactWOW delay='0.7s' animation='fadeInUp'>
                        <div className="horizontal-post single-blog-post">
                            <div className="row"> 
                                <div className="col-lg-5"> 
                                    <div className="blog-img">
                                        <Link href="/details-one">
                                            <a onClick={() => window.location.refresh()}>
                                                <img src={require("../../images/blog/2.jpg")} alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                    
                                <div className="col-lg-7">
                                    <div className="blog-info">
                                        <h6 className="blog-title">
                                            <Link href="/details-one">
                                                <a onClick={() => window.location.refresh()}>Awesome app</a>
                                            </Link>
                                        </h6>
                                        <div className="post-admin">
                                            By <a href="#">admin</a> / <a href="#">12</a> Comments / <span className="post_date">21 Mar, 2019</span>
                                        </div>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="/details-one">
                                            <a onClick={() => window.location.refresh()} className="default-button">
                                                Read More 
                                                <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                    
                    <ReactWOW delay='0.9s' animation='fadeInUp'>
                        <div className="horizontal-post single-blog-post">
                            <div className="row">                 
                                <div className="col-lg-5"> 
                                    <div className="blog-img">
                                        <Link href="/details-one">
                                            <a onClick={() => window.location.refresh()}>
                                                <img src={require("../../images/blog/3.jpg")} alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7">     
                                    <div className="blog-info">
                                        <h6 className="blog-title">
                                            <Link href="/details-one">
                                                <a onClick={() => window.location.refresh()}>Awesome app landing page</a>
                                            </Link>
                                        </h6>
                                        <div className="post-admin">
                                            By <a href="#">admin</a> / <a href="#">12</a> Comments / <span className="post_date">22 Mar, 2019</span>
                                        </div>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="#" >
                                            <a onClick={() => window.location.refresh()} className="default-button" >
                                                Read More <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                </div>  
            </section>
        )
    }
}
