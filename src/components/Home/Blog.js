import { Link } from 'react-router-dom'
import ReactWOW from 'react-wow';
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

const listData = [
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S2,
        date:'20 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S1,
        date:'22 Mar, 2019'
    }
    ,
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S3,
        date:'23 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S4,
        date:'20 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S5,
        date:'20 Mar, 2019'
    },
    {
        heading: "Rent Home",
        subHead: "Large 2 Bedroom suite in a lovely house in great area.Over 1100 square feet of quality living space with open floor plan...",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lmage:S6,
        date:'20 Mar, 2019'
    }
]
 class Blog extends React.Component {
    render() {
        const { state, showMessage,adds,history } = this.props

        return (
            <section id="blog" className="blog-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>Latest Post</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                  { adds&&adds?Object.values(adds).slice(0,4).map((data,i)=>(
                            <ReactWOW delay={`0.${i}s`} animation='fadeInUp'>
                        <div className="horizontal-post single-blog-post">
                            <div className="row" style={{maxHeight:'300px'}}> 
                                <div className="col-lg-5" > 
                                    <div className="blog-img">
                                        <Link href="/details">
                                            <a onClick={() => this.props.history.push('/details')}>
                                            {data.images&&data.images.length>0?data.images.map((imagePreviewUrl, i)=>{
                                     if(imagePreviewUrl.includes(':video/')){
                                        return <video className="feature-icon"alt="Blog Post Image"  src={imagePreviewUrl} style={{width:'100%'}} loop autoPlay></video>
                                     }else
                                         {return  <img className="feature-icon" alt="Blog Post Image" src={imagePreviewUrl}  style={{width:'100%'}}/>}
                             }):<img className="feature-icon" src={NoImage}/>}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7">         
                                    <div className="blog-info">
                                        <h6 className="blog-title">
                                            <Link href="/details">
                                                <a onClick={() => this.props.history.push('/details')}>{data.title}</a>
                                            </Link>
                                        </h6>
                                        <div className="post-admin">
                                            By <a href="#">admin</a> /  <span className="post_date">{data.user.Name}</span>
                                        </div>

                                        <p>{data.subHead}</p>
                                        
                                        <Link href="/details">
                                        <div className="default-button"
                                        onClick={state.isAuthenticated ? () => history.push(`/details/${data.key}`) : () => showMessage({ message: 'Sorry you need to login to see more details' })}
                                        style={{ height: 30, paddingTop: 5, cursor: 'pointer' }}>
                                        Read more
                                    </div>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>)):<div className="container"> 
                                  <h2  className="banner-title">Please wait...</h2>
                            <LinearProgress  variant={"query"}  />
                            </div> }
                    
                    
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
  export default connect(mapStateToProps, mapDispatchToProps)(Blog);
