import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from './Navigation/Navigation';
import Loader from './Shared/Loader';
import Slider from './Home/Slider';
import About from './Home/About';
import HowItWorks from './Home/HowItWorks';
import Features from './Home/Features';
import Counter from './Home/Counter';
import Screenshots from './Common/Screenshots';
import Testimonial from './Home/Testimonial';
import Pricing from './Home/Pricing';
import Faq from './Common/Faq';
import Team from './Home/Team';
import AppDownload from './Home/AppDownload';
import Blog from './Home/Blog';
import Contact from './Common/Contact';
import Footer from './Common/Footer';
import GoTop from './Common/GoTop';
import React, { Component } from 'react';
import Layout from './Layout';

class Index extends React.Component {
    render(){
        return(
            // <NoSSR key="1">
                // <Preloader fadeDuration={1000}>
                //     <Navigation />
                <div>

                    <Slider />
                    <Features />
                    <Blog />
                    <Counter />
                    <About />
                    <Screenshots />
                    <Testimonial />
                    {/* <HowItWorks /> */}
                    {/* <Pricing /> */}
                    {/* <Faq /> */}
                    {/* <Team /> */}
                    {/* <AppDownload /> */}
                    <Contact />
                    <Footer />
                    {/* <GoTop scrollStepInPx="50" delayInMs="16.66" /> */}
                    <Placeholder>
                        <Loader />
                    </Placeholder>
                    </div>
        );
    }
}

export default Index;