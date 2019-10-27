import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel3';
import React, { Component } from 'react';
import S1 from '../../images/web/s1.jpg'
import S2 from '../../images/web/mike.jpg'
import S3 from '../../images/web/Photo_2.jpg'
import S4 from '../../images/web/s2.jpg'
import S5 from '../../images/web/s3.jpg'
import S6 from '../../images/web/s4.jpg'
import { connect } from "react-redux"
import { LinearProgress } from '@material-ui/core';
import { AuthMiddleware, MainMiddleware } from '../../store/middlewares';
import NoImage from '../../images/NoImage.jpg'
const options = {
    nav: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: false,
    navText: [
        "<i class='icofont-swoosh-left'></i>", 
        "<i class='icofont-swoosh-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}
const options2 = {
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
        },
    }
}
 class Features extends React.Component {
     
     render() {
        const { state, showMessage,adds,history } = this.props
        console.log('history',history)
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
                            <div className="col-lg-12"> 
                                <OwlCarousel 
                                    className="screenshot-carousel owl-carousel owl-theme"
                                    {...options}
                                >
                                      {adds&&adds?!Object.keys(adds).length?
                                 <div className="container"> 
                                  <h2  className="banner-title">Please wait...</h2>
                            <LinearProgress  variant={"query"}  />
                            </div>:Object.values(adds).map(addData=>(
                             <div >
                                <div className="single-feature">
                                    <div className="feature-icon">
                                    <OwlCarousel 
                                        className="testimonial-carousel owl-carousel owl-theme"
                                        {...options2}
                                    >
                                 {addData.images&&addData.images.length>0?addData.images.map((imagePreviewUrl, i)=>{
                                     if(imagePreviewUrl.includes(':video/')){
                                        return <video className="feature-icon"  src={imagePreviewUrl} height="60px !important" loop autoPlay></video>
                                     }else
                                         {return  <img className="feature-icon" src={imagePreviewUrl}  height="60px !important"/>}
                             }):<img className="feature-icon" src={NoImage}/>}
                              
                            </OwlCarousel>
                                        <div className="post-profile">
                                            <img src={addData.user.profileImage} alt="client Image" height="60px !important" />
                                        </div>
                                    </div>
                                    <h4>{addData.title}</h4>
                                    <p className="post-discription">{addData.slogan}</p>
                                    <div className="post-containre">
                                        <span className="about-post">Owner :&nbsp;&nbsp; {addData.user.Name}</span>
                                        <span className="about-post">Room  &nbsp;:&nbsp;&nbsp; {addData.rooms}</span>
                                        <span className="about-post">Price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {addData.price}</span>
                                    </div>
                                    <div className="default-button"
                                        onClick={state.isAuthenticated ? () => history.push(`/details/${addData.key}`) : () => showMessage({ message: 'Sorry you need to login to see more details' })}
                                        style={{ height: 30, paddingTop: 5, cursor: 'pointer' }}>
                                        view
                                    </div>
                                </div>
                            </div>)): <div className='col-lg-4'>
                               
                                    <h2>Sorry there is no add Avilabel</h2>
                            </div>}
                                </OwlCarousel>
                            </div>
                        {/* <div className="col-lg-12"> 
                         
           
                            {/* </ReactWOW> */}
            
                        
                    </div>
                    <a href="/findhome" className="default-button">
                                        {/* <i className="icofont-cloud-download"></i>  */}
                                       See More...
                                    </a>
                </div> 
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      Buttons: state.Main.Buttons,
      Text: state.Main.Text,
      state: state.Auth,
      adds:state.Main.addpost
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        showMessage: (dta) => { dispatch(AuthMiddleware.ShowMessage(dta)) },
        getPost:()=>{dispatch(MainMiddleware.GetAdds())}
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Features);