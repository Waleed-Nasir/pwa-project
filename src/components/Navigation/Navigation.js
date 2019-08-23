import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import houseit from '../../images/Houseit-logo/houseit.png'
import icon from '../../images/Houseit-logo/houseit-icon.png'

class Navigation extends React.Component {
    _isMounted = false;

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                elementId.classList.add("menu-shrink");
            } else {
                elementId.classList.remove("menu-shrink");
            }
        });
        window.scrollTo(0, 0);

        // if (!(window.location.pathname === '/details' || window.location.pathname === '/properties' || window.location.pathname === '/registry' || window.location.pathname === '/blog-two' || window.location.pathname === '/blog-three')){
            let mainNavLinks = document.querySelectorAll("nav ul li a");
         if(false){   
            window.addEventListener("scroll", () => {
                let fromTop = window.scrollY;
            
                mainNavLinks.forEach(link => {
                    let section = document.querySelector(link.hash);
            
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            });
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    renderMenus = () => {
        // For external pages like blog & blog details
        if (window.location.pathname === '/details-one' || 
            window.location.pathname === '/details-two' || 
            window.location.pathname === '/blog-one' || 
            window.location.pathname === '/blog-two' || 
            window.location.pathname === '/blog-three'){
            return(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link"
                            >
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                About
                            </a>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Features
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Screenshots
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Pricing
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/registry">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Faqs
                            </a>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link active" 
                            >
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/registry">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                LogIn / Register
                            </a>
                        </Link>
                    </li> 
                </ul>
            );
        }

        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => 100} 
                        className="nav-link active" 
                        href="#home"
                    >
                        Home
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#about"
                    >
                        About
                    </AnchorLink>
                </li>
                {/* <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#features"
                    >
                        Features
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#screenshots"
                    >
                        Screenshots
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#pricing"
                    >
                        Pricing
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#faqs"
                    >
                        Faqs
                    </AnchorLink>
                </li> */}
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#blog"
                    >
                        Blog
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#contact"
                    >
                        Contact
                    </AnchorLink>
                </li>
                <li className="nav-item">
                <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#contact"
                    >
                                LogIn / Register
                            </AnchorLink>
                </li> 
            </ul>
        );
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return(
            <nav id="navbar" className={"navbar fixed-top navbar-expand-md navbar-light top-menu"}>
                <div className="container">
                   <a className="navbar-brand" href="/">
                    <img src={icon} width="40px"/>
                    <img src={houseit} width="120px"/>
                    </a>

                    <button 
                        onClick={this.toggleNavbar} 
                        className={classTwo}
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        { this.renderMenus() }
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;