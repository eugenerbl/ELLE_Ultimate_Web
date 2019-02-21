import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/ionicons/css/ionicons.min.css';

const mainLogoStyle = {
	width: '150px',
	height: '42px',
	border: '0'
};

export default class Downloads extends Component {

	render() {
	return (
	<div>
		<header id="header">
			<div className="container">
				<div id="logo" className="pull-left">
					<Link to='/'><img src={require('../Images/ELLE/ELLE-Background-Full.png')} alt="ELLE Ultimate"
					title="Home" style={mainLogoStyle}/></Link>
				</div>

				<nav id="nav-menu-container">
					<ul className="nav-menu">
						<li><Link to='/downloads'>Download</Link></li>
						<li><Link to='/profile'>My Profile</Link></li>
						<li><Link to='/signup'>Sign Up</Link></li>
						<li><Link to='/login'>Login</Link></li>
						<li><a href="www.google.com" className="github"><i className="fa fa-github fa-lg"></i></a></li>
					</ul>
				</nav>
			</div>
		</header>
   
		<section id="intro">
			<div className="intro-content">
				<h2>Downloads</h2>
			</div>
			<div id="intro-carousel" className="owl-carousel">
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/1.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/2.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/3.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/4.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/5.jpg")'}} />
			</div>
		</section>

		
		<section id="call-to-action" className="wow fadeInUp">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 text-center text-lg-left">
				  <h3 className="cta-title">ELLE Mobile</h3>
				  <p className="cta-text"> Take the power of second-language acquisition straight to
					your mobile device. With an upbeat side-scroller and a new augmented reality
					gamemode, you can learn any language on the go.</p>
				  <p className="cta-text">Senior Design Team:</p>
				  <ul style={{color: '#ffffff'}}>
					<li>Christian Acosta</li>
					<li>Kyle Hendricks</li>
					<li>James Jachcinski</li>
					<li>Mustapha Moore</li>
					<li>Dominic Rama</li>
				  </ul>
				  <a className="cta-btn align-middle" href="google.com">Download</a>
				</div>
				<div className="col-lg-6 about-img">
				  <img src={require('../Images/ELLE/mobile3D.jpg')} alt="" style={{maxWidth: '100%'}} />
				</div>
			</div>
		</div>
		</section>

		<section id="call-to-action" className="wow fadeInUp" style={{background: '#50D8AF'}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-6 about-img">
				  <img src={require('../Images/ELLE/PC.jpg')} alt="" style={{maxWidth: '100%'}} />
				</div>
				<div className="col-lg-6 text-center text-lg-right">
				  <h3 className="cta-title">ELLE 2.0</h3>
				  <p className="cta-text"> Enhanced and better suited to help you
					learn a language. Comes with virtual reality and desktop versions.</p>
				  <p className="cta-text">Senior Design Team:</p>
				  <ul style={{color: '#ffffff', textAlign: 'right', listStylePosition: 'inside'}}>
					<li>Mark Behler</li>
					<li>Phillio Da Silva</li>
					<li>Ian Holdeman</li>
					<li>Santiago Perez Arrubla</li>
				  </ul>
				  <a className="cta-btn align-middle" href="google.com">Download</a>
				</div>
			</div>
		</div>
		</section>

		<section id="call-to-action" className="wow fadeInUp">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 text-center text-lg-left">
				  <h3 className="cta-title">ELLE 1.0</h3>
				  <p className="cta-text"> The original. Play the virtual reality version
					on the game's very first build.</p>
				  <p className="cta-text">Senior Design Team:</p>
				  <ul style={{color: '#ffffff'}}>
					<li>Georg Anemogiannis</li>
					<li>Eric Butt</li>
					<li>Tyler Chauhan</li>
					<li>Megan Chipman</li>
					<li>Christopher Ward (Art)</li>
				  </ul>
				  <a className="cta-btn align-middle" href="google.com">Download</a>
				</div>
				<div className="col-lg-6">
				  <img src={require('../Images/ELLE/VR.jpg')} alt="" style={{maxWidth: '100%'}} />
				</div>
			</div>
		</div>
		</section>
		
		<footer id="footer">
			<div class="container">
				<div class="copyright">&copy; Copyright <strong>Reveal</strong>. All Rights Reserved</div>
				<div class="credits">
				{/*
				All the links in the footer should remain intact.
				You can delete the links only if you purchased the pro version.
				Licensing information: https://bootstrapmade.com/license/
				Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Reveal
				*/}
				Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
				</div>
			</div>
		</footer>
	</div>
  );
}
}
