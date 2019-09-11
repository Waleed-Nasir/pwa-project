import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import houseit from '../../images/Houseit-logo/houseit.png'
import icon from '../../images/Houseit-logo/houseit-icon.png'
import { connect } from "react-redux"
import { AuthMiddleware } from '../../store/middlewares';

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
    componentWillMount = (newProps) => {
        const { isAuthenticated } = this.props
        var pathName = window.location.pathname
        if(!isAuthenticated){
        switch (pathName) {
            case '/chat':
                window.location.pathname = '/'
                break;
            case '/profile':
                window.location.pathname = '/'
                break;
            case '/addpost':
                window.location.pathname = '/'
                break;
        }}else if(isAuthenticated &&  window.location.pathname === '/registry'){
            window.location.pathname = '/profile'
        }
    }
    componentWillReceiveProps = (newProps) => {
        const { isAuthenticated } = newProps
        var pathName = window.location.pathname
        if(!isAuthenticated){
        switch (pathName) {
            case '/chat':
                window.location.pathname = '/'
                break;
            case '/profile':
                window.location.pathname = '/'
                break;
            case '/addpost':
                window.location.pathname = '/'
                break;
        }}else if(isAuthenticated &&  window.location.pathname === '/registry'){
            window.location.pathname = '/profile'
        }
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
        if (false) {
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

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderMenus = (props) => {
        // For external pages like blog & blog details
        // if (window.location.pathname === '/details-one' || 
        //     window.location.pathname === '/details-two' || 
        //     window.location.pathname === '/blog-one' || 
        //     window.location.pathname === '/blog-two' || 
        //     window.location.pathname === '/blog-three'){
        const { state } = props
        var adb = state.isAuthenticated
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a
                        onClick={this.toggleNavbar}
                        className="nav-link"
                        href='/'
                    >
                        Home
                            </a>

                </li>
                <li className="nav-item">
                    <a
                        onClick={this.toggleNavbar}
                        className="nav-link"
                        href='/peoples'

                    >
                        People`s
                            </a>

                </li>
                {adb && <li className="nav-item">
                    <a
                        onClick={this.toggleNavbar}
                        className="nav-link"
                        href='/chat'

                    >
                        Chat Room
                            </a>

                </li>}
                <li className="nav-item">
                    <a
                        onClick={this.toggleNavbar}
                        className="nav-link"
                        href='/findhome'

                    >
                        Find Home / Room
                            </a>

                </li>

                {adb && <li className="nav-item">
                    <a
                        onClick={this.toggleNavbar}
                        className="nav-link"
                        href='/addpost'

                    >
                        Add Home / Room
                            </a>

                </li>}
                {adb && <li className="nav-item">
                    <a
                        onClick={this.toggleNavbar}
                        className="nav-link"
                        href='/Profile'

                    >
                        Profile
                            </a>

                </li>}
                {adb ?
                    <li className="nav-item">
                        <div
                            onClick={() => this.props.SignOut()}
                            className="nav-link"
                        >
                            Logout
                       </div>

                    </li>
                    : <li className="nav-item">
                        <a href='/registry'
                            onClick={this.toggleNavbar}
                            className="nav-link"
                        >
                            LogIn / Register
                            </a>

                    </li>}
            </ul>
        );

    }

    render() {
        const { collapsed } = this.state;
        const { state } = this.props
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav id="navbar" className={"navbar fixed-top navbar-expand-md navbar-light top-menu"}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={icon} width="40px" />
                        <img src={houseit} width="120px" />
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
                        {this.renderMenus(this.props)}
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.Auth,
        isAuthenticated: state.Auth.isAuthenticated
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        SignOut: () => { dispatch(AuthMiddleware.SignOut()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);