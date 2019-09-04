import { Link } from 'react-router-dom'
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Loader from '../Shared/Loader';
import Navigation from '../Navigation/Navigation';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop'
import React, { Component } from 'react';
import './sli.css'
import S1 from '../../images/web/s1.jpg'
import S2 from '../../images/web/mike.jpg'
import { connect } from "react-redux"
class FindPROP extends React.Component {
    render() {
      
        return (
            <NoSSR key="1">
                {/* <Preloader fadeDuration={1000}>
                    <Navigation /> */}

                    <section className="top-banner-area"> 
                        <div className="container"> 
                        <div className="row">
                        <div className="col-md-12 col-lg-12"> 
                                <div className="contact-form"> 
                                    <form id="contactForm" onSubmit={this.onSubmit}>
                                        <div className="row"> 
                                            <div className="col-lg-3"> 
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        required={true}
                                                        data-error="Please enter city" 
                                                        placeholder="City" 
                                                        // value={this.state.formFields.name}
                                                        // onChange={this.nameChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-3"> 
                                                <div className="form-group">
                                                    <label>Rooms</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        required={true}
                                                        data-error="Please enter number of rooms" 
                                                        placeholder="E.g 3" 
                                                        // value={this.state.formFields.email}
                                                        // onChange={this.emailChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        
                                        <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your range" 
                                                placeholder="Your Price" 
                                                // value={this.state.formFields.subject}
                                                // onChange={this.subjectChangeHandler}
                                            />
                                             {/* <input type="range" min="1" max="100"  class="slider" id="myRange"></input>
                                             <p>Value: <span id="demo"></span></p> */}
                                            <div className="help-block with-errors"></div>
                                        </div>
                                      </div>

                                        <div className="col-lg-3 mt-4">
                                        <div className="form-group">

                                            <button type="submit" className="default-button">
                                               Find Now...
                                                <i className="icofont-arrow-right"></i>
                                            </button>
                                        </div>
                                        </div>
                                        </div>

                                        {/* {this.successMessage()} */}
                                    </form>
                                </div>
                        </div>
                    </div>
                            <div className="row"> 
                                <div className="col-lg-6"> 
                                    <h2 className="banner-title">Find your new home per match your requirements</h2>   
                                </div>
                                <div className="col-lg-6"> 
                                    <ol className="breadcrumb">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li className="active">Find Home</li>
                                    </ol>   
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="blog" className="blog-details-section"> 
                        <div className="container"> 
                            <div className="row"> 
                            <div className='col-lg-3 col-md-6'>

                               <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <img className="feature-icon" src={S2}/>
                                        <div className="post-profile">
                                            <img src={S1} alt="client Image"  height="60px !important"/>
                                        </div>
                                    </div>
                                    <h4>Highly Dec</h4>
                                    <p className="post-discription">There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                    <div className="post-containre">
                                        <span className="about-post">Owner :&nbsp;&nbsp; Alisa Match</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; 4</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 444$</span>
                                    </div>
                                        <div className="default-button" style={{height:30,paddingTop:5,cursor: 'pointer'}}>
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                      view
                                    </div>
                            </div>
                                </div>
                                <div className='col-lg-3 col-md-6'>

<div className="single-feature"> 
     <div className="feature-icon">
         <img className="feature-icon" src={S2}/>
         <div className="post-profile">
             <img src={S1} alt="client Image"  height="60px !important"/>
         </div>
     </div>
     <h4>Highly Dec</h4>
     <p className="post-discription">There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
     <div className="post-containre">
         <span className="about-post">Owner :&nbsp;&nbsp; Alisa Match</span>
         <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; 4</span>
         <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 444$</span>
     </div>
         <div className="default-button" style={{height:30,paddingTop:5,cursor: 'pointer'}}>
         {/* <i className="icofont-cloud-download"></i>  */}
       view
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
  export default connect(mapStateToProps, mapDispatchToProps)(FindPROP)