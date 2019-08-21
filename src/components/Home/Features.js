import ReactWOW from 'react-wow';
import React, { Component } from 'react';
import S1 from '../../images/web/s1.jpg'
import S2 from '../../images/web/mike.jpg'
import S3 from '../../images/web/Photo_2.jpg'
import S4 from '../../images/web/s2.jpg'
import S5 from '../../images/web/s3.jpg'
import S6 from '../../images/web/s4.jpg'
export default class Features extends React.Component {
    render() {
        return (
            <section id="features" className="awsome-features"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>New Post`s</h2>
                                    {/* <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p> */}
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-sm-6 col-md-4 col-lg-3"> 
                            <ReactWOW delay='0.4s' animation='fadeInUp'>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S2}/>
                                        {/* <i className="icofont-sun"></i> */}
                                        <div style={{width:60,height:60,position:'absolute',marginTop:-35,marginLeft:15}}>
                                            <img src={S1} alt="client Image"  height="60px !important"/>
                                        </div>
                                    </div>
                                    <h4>High Resolution</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ReactWOW>
                        </div>
            
                        <div className="col-sm-6 col-md-4 col-lg-3"> 
                            <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S3}/>
                                        {/* <i className="icofont-light-bulb"></i> */}
                                    </div>
                                    <h4>Unique Design</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-sm-6 col-md-4 col-lg-3"> 
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S3}/>
                                        {/* <i className="icofont-imac"></i> */}
                                    </div>
                                    <h4>Full Responsive</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ReactWOW>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3"> 
                            <ReactWOW delay='0.8s' animation='fadeInUp'>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S4}/>
                                        {/* <i className="icofont-eye"></i> */}
                                    </div>
                                    <h4>RETINA READY</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ReactWOW>
                        </div>
{/*                         
                        <div className="col-sm-6 col-md-4 col-lg-3"> 
                            <ReactWOW delay='0.7s' animation='fadeInUp'>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S3}/>  
                                    // <i className="icofont-code-alt"></i>
                                    </div>
                                    <h4>CLEAN CODES</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-sm-6 col-md-4 col-lg-3"> 
                            <ReactWOW delay='0.8s' animation='fadeInUp'>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S3}/>  
                                    // <i className="icofont-eye"></i>
                                    </div>
                                    <h4>RETINA READY</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ReactWOW>
                        </div>
                        
                        <div className="col-sm-6 col-md-4 col-lg-3"> 
                            <ReactWOW delay='0.9s' animation='fadeInUp'>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S3}/>  
                                    // <i className="icofont-space-shuttle"></i>
                                    </div>
                                    <h4>UNLIMITED FEATURES</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ReactWOW>
                        </div> */}
                    </div>
                    <a href="#app-download" className="default-button">
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                       See More...
                                    </a>
                </div> 
            </section>
        )
    }
}
