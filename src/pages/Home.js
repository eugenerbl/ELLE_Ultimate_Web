import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/ionicons/css/ionicons.min.css';

const Home = (props) => {
  return (
	<div>
	{/*import { Jumbotron, Button } from 'reactstrap';*/}
	{/*<Jumbotron>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">This is a simple message to new users.</p>
        <hr className="my-2" />
        <p>Helpful Information will be added soon!</p>
        <p className="lead">
          <Button tag={Link} color="primary" to='/login' >Login</Button>
          <Button tag={Link} color="info" to='/signup' >Signup</Button>
        </p>
	</Jumbotron>*/}
	
		<header id="header">
			<div className="container">
				<div id="logo" className="pull-left">
					<Link to='/'><img src={require('../Images/ELLE/ELLE-Background-Full.png')} alt="ELLE Ultimate"
					title="Home" className="mainLogoStyle"/></Link>
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
				<h2>Learn a <span>new language</span><br />your way.</h2>
				<div>
					<a href="#about" className="btn-get-started scrollto">Get Started</a>
					<a href="#portfolio" className="btn-projects scrollto">Download ELLE</a>
				</div>
			</div>
			<div id="intro-carousel" className="owl-carousel">
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/1.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/2.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/3.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/4.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/5.jpg")'}} />
			</div>
		</section>

		<section id="about" className="wow fadeInUp">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 about-img">
						<img src={require('../Images/ELLE/about-img.jpg')} alt=""/>
					</div>
					<div className="col-lg-6 content">
						<h2>Meet ELLE- the Ultimate Language Learner.</h2>
						<h3>Introducing a new way to learn a new language.</h3>
						<ul>
							<li><i className="ion-android-checkmark-circle" /> Play an endless runner game where you choose the right words to keep going!</li>
							<li><i className="ion-android-checkmark-circle" /> Create an account to view your stats, compare your scores, and make new language packs!</li>
							<li><i className="ion-android-checkmark-circle" /> Available in desktop, mobile, and virtual reality versions!</li>
						</ul>
					</div>
				</div>
			</div>
			<br />
		</section>
	
		<section id="services" className="wow fadeInUp">
			<div className="container">
				<div className="section-header">
					<h2>Services</h2>
					<p> Creating an account with us gives you an extended profile and exclusive tools to make the most of your ELLE experience.</p>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="box wow fadeInLeft">
							<div className="icon"><i className="fa fa-bar-chart" /></div>
							<h4 className="title">Statistics</h4>
							<p className="description">View play data from every session you've ever played. See how well you do on certain languages
							and what words you should work on the most.</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="box wow fadeInRight">
							<div className="icon"><i className="fa fa-language" /></div>
							<h4 className="title">Create Language Packs</h4>
							<p className="description">Build a dictionary of words to be tested on with ease. Play games with any packs that you create,
							or play games with packs made by other players.</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="box wow fadeInLeft" data-wow-delay="0.2s">
							<div className="icon"><i className="fa fa-list-ol" /></div>
							<h4 className="title">Study Vocabulary</h4>
							<p className="description">View a list of vocabulary words from every language pack you have encountered. You can view words,
							their translations, and their image and audio files.</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="box wow fadeInRight" data-wow-delay="0.2s">
							<div className="icon"><i className="fa fa-user" /></div>
							<h4 className="title">Communicate with Instructors</h4>
							<p className="description">ELLE makes it easy for instructors to see how you are progressing through a language.
							They can see your accuracy and sessions and use it to help you learn.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

	<section id="team" className="wow fadeInUp">
		<div className="container">
			<div className="section-header">
				<h2>Group Members</h2>
			</div>
			<div className="row">
				<div className="col-lg-1"><div className="member" /></div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						<div className="pic"><img src={require('../Images/ELLE/team-1.jpg')} alt=""/></div>
						<div className="details">
							<h4>Kalonte Jackson-Tate</h4>
							<span>Chief Executive Officer</span>
							<div className="social">
								<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
								<a href><i className="fa fa-linkedin" /></a>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						<div className="pic"><img src={require('../Images/ELLE/team-2.jpg')} alt=""/></div>
						<div className="details">
							<h4>Eugene Lucino</h4>
							<span>Front End- Website</span>
							<div className="social">
								<a href><i className="fa fa-facebook" /></a>
								<a href><i className="fa fa-linkedin" /></a>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						<div className="pic"><img src={require('../Images/ELLE/team-3.jpg')} alt=""/></div>
						<div className="details">
							<h4>Christopher Rodbourne</h4>
							<span>CTO</span>
							<div className="social">
								<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
								<a href><i className="fa fa-linkedin" /></a>
							</div>
							</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						<div className="pic"><img src={require('../Images/ELLE/team-4.jpg')} alt=""/></div>
						<div className="details">
							<h4>Josh Sewnath</h4>
							<span>Accountant</span>
							<div className="social">
								<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
								<a href><i className="fa fa-linkedin" /></a>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						<div className="pic"><img src={require('../Images/ELLE/testimonial-4.jpg')} alt=""/></div>
						<div className="details">
							<h4>Patrick Thompson</h4>
							<span>Accountant</span>
							<div className="social">
								<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
								<a href><i className="fa fa-linkedin" /></a>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-1"><div className="member" /></div>
			</div> <br />
				
			<div className="section-header">
				<h2>Sponsors</h2>
			</div>
			<div className="row" style={{textAlign: 'center'}}>
				<div className="col-lg-12">
					<h2>UCF GaIM Research Group</h2>
					<p>Orlando Tech Center Bldg 500, Orlando, FL 32826</p><p>
					<a href="https://gamesresearch.cah.ucf.edu/">Official Site</a>
					<br />
				</p></div>
			</div>
			<div className="row" style={{textAlign: 'center'}}>
				<div className="col-lg-4">
					<h4>Dr. Emily Johnson</h4>
					<p>Postdoctoral Research Associate</p>
				</div>
				<div className="col-lg-4">
					<h4>Dr. Amy Giroux</h4>
					<p>Computer Research Specialist, Center of Humanities and Digital Research</p>
				</div>
				<div className="col-lg-4">
					<h4>Dr. Don Merritt</h4>
					<p>Director, Office of Instructional Resources</p>
				</div>
			</div>
		</div>
	</section>

	
	<footer id="footer">
		<div className="container">
			<div className="copyright">&copy; Copyright <strong>Reveal</strong>. All Rights Reserved</div>
			<div className="credits">
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
};

export default Home;
