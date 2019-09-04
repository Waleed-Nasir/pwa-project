import OwlCarousel from 'react-owl-carousel3';
import React, { Component } from 'react';
import { connect } from "react-redux"


 class Profile extends React.Component {
    render() {
        return (
            <section id="testimonial" className="testimonial-section "> 
                <div className="container"> 
                    <div className="row mt-5"> 
                        <div className="col-lg-4"> 
                                <div className="testimonial-item" style={{zIndex:10}}>
                                    <i className="icofont-quote-left"></i>
                                    <p className="description">
                                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.</q>
                                    </p>
                                    <div className="testimonial-content">
                                        <div className="pic">
                                            <img src={require("../../images/client/1.png")} alt="client Image" />
                                        </div>
                                        <h3 className="title">Tareq</h3>
                                        <span className="post">UI / UX Designer</span>
                                    </div>
                                </div>
                          
                        </div>
                        <div className="col-lg-8"  style={{zIndex:10}}> 
                                <div className="contact-form" > 
                                    <form id="contactForm" onSubmit={this.onSubmit}>
                                        <div className="row"> 
                                            <div className="col-lg-6"> 
                                                <div className="form-group">
                                                    <label>Full Name</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        required={true}
                                                        data-error="Please enter your name" 
                                                        placeholder="Your Name" 
                                                        // value={this.state.formFields.name}
                                                        // onChange={this.nameChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6"> 
                                                <div className="form-group">
                                                    <label>E-mail</label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        required={true}
                                                        data-error="Please enter your email" 
                                                        placeholder="Email Address" 
                                                        // value={this.state.formFields.email}
                                                        // onChange={this.emailChangeHandler}
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row"> 
                                        <div className="col-lg-8"> 
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your subject" 
                                                placeholder="Your subject" 
                                                // value={this.state.formFields.subject}
                                                // onChange={this.subjectChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4"> 

                                        <div className="form-group">
                                            <label>Age</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your subject" 
                                                placeholder="Your subject" 
                                                // value={this.state.formFields.subject}
                                                // onChange={this.subjectChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Slogan / Tag line</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your subject" 
                                                placeholder="Your subject" 
                                                // value={this.state.formFields.subject}
                                                // onChange={this.subjectChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <label>Skill`s</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your subject" 
                                                placeholder="Your subject" 
                                                // value={this.state.formFields.subject}
                                                // onChange={this.subjectChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your subject" 
                                                placeholder="Your subject" 
                                                // value={this.state.formFields.subject}
                                                // onChange={this.subjectChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <label>Location</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                required={true}
                                                data-error="Please enter your subject" 
                                                placeholder="Your subject" 
                                                // value={this.state.formFields.subject}
                                                // onChange={this.subjectChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                      
                                        <div className="form-group">
                                            <label>Biography / about </label>
                                            <textarea 
                                                className="form-control" 
                                                id="message" 
                                                rows="4" 
                                                required={true}
                                                data-error="Write your message" 
                                                placeholder="Enter your message here..." 
                                                // value={this.state.formFields.text}
                                                // onChange={this.textChangeHandler}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="default-button">
                                                Update
                                                {/* <i className="icofont-arrow-right"></i> */}
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
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);