import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <Container>
                <Nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          
          <a className="navbar-brand font-weight-bold" href="#"><img src="Images/logo.PNG" alt=""/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
          <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
            <div className="navbar-nav px-auto mx-auto">
                <Nav.Item><Link to="/" className="nav-item nav-link text-dark">HOME</Link></Nav.Item>
            <Nav.Item><Link to="/shop" className="nav-item nav-link text-dark">SHOP</Link></Nav.Item>
            <Nav.Item><Link to="/picnic" className="nav-item nav-link text-dark">PICNIC</Link></Nav.Item>
            <Nav.Item><Link to="/promotion" className="nav-item nav-link text-dark">PROMOTION</Link></Nav.Item>
            <Nav.Item><Link to="/blog" className="nav-item nav-link text-dark">BLOG</Link></Nav.Item>
            <Nav.Item><Link to="/contact" className="nav-item nav-link text-dark">CONTACT</Link></Nav.Item>
            </div>
              <div>
                  <ul className="navbar-nav ml-auto">
                      <li><a href="#" className="text-dark"><i className="fas fa-search mr-4"></i></a></li>
                      <li><a href="#" className="text-dark"><i className="fas fa-shopping-cart"><span className="badge badge-primary-top">2</span></i></a></li>
                  </ul>
              </div>
          </div>
          </div>
      </Nav>
            </Container>
        )
    }
}

export default Navbar
