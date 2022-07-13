import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Sticky from 'react-stickynode';
import '../../assets/vendors/animate/animate.css';
import {Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../../assets/images/logo.png"

class Header extends Component {
	state = {
        scroll: 0
      };
	  componentDidMount(){
		// Aos Animation
		AOS.init({
			duration : 1000
		  });

		//On scroll class add
		window.addEventListener('scroll', () => {
			let activeClass = 'slideInDown';
			if(window.scrollY === 0){
				activeClass = '';
			}
			this.setState({ activeClass });
		  });
	  }

    // componentDidMount() {
	// 	AOS.init({
	// 		duration : 1000
	// 	  });


	// 	  window.addEventListener('scroll', () => {
	// 		let activeClass = 'fadeInDownBig';
	// 		if(window.scrollY === 0){
	// 			activeClass = '';
	// 		}
	// 		this.setState({ activeClass });
	// 	  });




	// 	//   window.addEventListener("scroll", () => {
	// 	// 	this.state(window.scrollY > 50);
	// 	//   });

	// 	// Cart Dropdown 
	// 	// var cartBtn = document.getElementById("cartBtn")
    //     // var cartDropdown = document.querySelector(".cart-dropdown")
		
    //     // cartBtn.addEventListener('click',function(){
    //     //     cartDropdown.classList.toggle("show")
	// 	// })
		

	// 	// Search Form Popup
	// 	// var searchBtn = document.getElementById("quik-search-btn")
    //     // var searchForm = document.querySelector(".nav-search-bar")
    //     // var closeBtn = document.getElementById("search-remove")
		
    //     // searchBtn.addEventListener('click',function(){
    //     //     searchForm.classList.add("show")
    //     // })

    //     // closeBtn.addEventListener('click',function(){
    //     //     searchForm.classList.remove("show")
    //     // })

    //     // Mobile Menu sidebar function
    //     var btn = document.querySelector('.menuicon');
    //     var nav = document.querySelector('.menu-links');
       
    //     function toggleFunc() {
    //         btn.classList.toggle("open");
    //         nav.classList.toggle("show");
    //     }

    //     btn.addEventListener('click', toggleFunc);

    //     // Mobile Submenu open close function
    //     var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
    //     for (var y = 0; y < navMenu.length; y++) {
    //         navMenu[y].addEventListener('click', function () { menuClick(this) });
    //     }

    //     function menuClick(current) {
    //         const active = current.classList.contains("open")
    //         navMenu.forEach(el => el.classList.remove('open'));
            
    //         if(active){
    //             current.classList.remove('open') 
    //             console.log("active")
    //         } else{
    //             current.classList.add('open');
    //             console.log("close")
    //         }
    //     }
		
    //       }

    render() {
        return (
            <>
				<header className="header rs-nav">
					<Navbar className={`d-none d-lg-block animated ${this.state.activeClass}`} collapseOnSelect expand="lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img src={Logo} alt=""/></Link>
								</div>
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											<li className="d-none d-sm-block ">
												<Link to="get_in_touch" className="btn btn-warning">Get In Touch</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={Logo} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li><NavLink to="/about">About us<i className="fa fa-chevron-down"></i></NavLink>
											<ul className="sub-menu">
												<li><NavLink to="/about"><span>Simulanis Story</span> </NavLink></li>
												<li><NavLink to="/awards"><span>Meritorious Journey</span></NavLink></li>
												<li><NavLink to="/team"><span>Team</span></NavLink></li>
											</ul>
										</li>
										<li className="has-mega-menu "><NavLink to="#">What we do<i className="fa fa-chevron-down"></i></NavLink>
											<ul className="mega-menu">
												<li><NavLink to="#">Solution</NavLink>
													<div className="row">
														<div className="col-md-6">
															<ul>
																<li><NavLink to="/xr-training"><span>XR Training</span></NavLink></li>
																<li><NavLink to="/simulator"><span>Simulators</span></NavLink></li>
																<li><NavLink to="/quixbox"><span>Quizbox</span></NavLink></li>
																<li><NavLink to="/ehs"><span>EHS</span></NavLink></li>
															</ul>
														</div>
														<div className="col-md-6">
															<ul>
																<li><NavLink to="/remote-assist"><span>Remote Assistance</span></NavLink></li>
																<li><NavLink to="/reflexis"><span>Reflexis</span></NavLink></li>
																<li><NavLink to="/sanalexa"><span>Sanalexa</span></NavLink></li>
															</ul>
														</div>
													</div>
												</li>
												<li><NavLink to="#">Industries</NavLink>
													<div className="row">
														<div className="col-md-6">
															<ul>
																<li><NavLink to="/pharmaceutical"><span>Pharmaceutical</span></NavLink></li>
																<li><NavLink to="/automotive"><span>Automotive</span></NavLink></li>
																<li><NavLink to="/automation"><span>Automation</span></NavLink></li>
																<li><NavLink to="/oilandgas"><span>Oil & Gas</span></NavLink></li>
																<li><NavLink to="/fmcg"><span>FMCG</span></NavLink></li>
															</ul>
														</div>
														<div className="col-md-6">
															<ul>
																<li><NavLink to="/energy-and-utilities"><span>Energy & Utilities</span></NavLink></li>
																<li><NavLink to="/paint-and-chemicals"><span>Paint & Chemicals</span></NavLink></li>
																<li><NavLink to="/construction"><span>Construction</span></NavLink></li>
																<li><NavLink to="/engineering"><span>Engineering</span></NavLink></li>
															</ul>
														</div>
													</div>
												</li>
											</ul>
										</li>
                                        <li><NavLink to="#">Metaverse<i className="fa fa-chevron-down"></i></NavLink>
											<ul className="sub-menu">
												<li><a href="https://academy.simulanis.io/" target="_blank"><span>Learn</span> </a></li>
											</ul>
										</li>
										<li><NavLink to="/application">Applications</NavLink></li>
										<li><NavLink to="#">Resources<i className="fa fa-chevron-down"></i></NavLink>
											<ul className="sub-menu">
												<li><NavLink to="/blogs"><span>Blogs</span> </NavLink></li>
												<li><NavLink to="/case-study"><span>Case Study</span></NavLink></li>
											</ul>
										</li>
										{/* <li><NavLink to="#">Career</NavLink>
										</li> */}
									</ul>
									<div className="nav-social-link">
										<NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
										<NavLink to="#"><i className="fa fa-google-plus"></i></NavLink>
										<NavLink to="#"><i className="fa fa-linkedin"></i></NavLink>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Navbar>
					<>
						{['xl'].map((expand) => (
							<Navbar key={expand} bg="light" expand={expand} className="d-block d-xl-none">
								<Container fluid>
									<Navbar.Brand> <a href="/"> <img src={Logo} alt="" /> </a> </Navbar.Brand>
									<Link to="get_in_touch" className="btndanger">Get In Touch</Link>
									<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
									<Navbar.Offcanvas
									id={`offcanvasNavbar-expand-${expand}`}
									aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
									placement="end"
									>
									<Offcanvas.Header closeButton>
										<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
											<a href="/"><img src={Logo} style={{width:'120px'}} alt="" /></a>
										</Offcanvas.Title>
									</Offcanvas.Header>
									<Offcanvas.Body>
										<Nav className="justify-content-end flex-grow-1 pe-3">
										<NavDropdown
											title="About us"
											id={`offcanvasNavbarDropdown-expand-${expand}`}
										>
											<NavDropdown.Item href="/about">Simulanis Story</NavDropdown.Item>
											<NavDropdown.Item href="/awards">Meritorious Journey </NavDropdown.Item>
											<NavDropdown.Item href="/team">Team </NavDropdown.Item>
										</NavDropdown>
										{/* <Nav.Link href="/about">Link</Nav.Link> */}
										<NavDropdown
											title="What We Do"
											id={`offcanvasNavbarDropdown-expand-${expand}`}
										>
											<p className='mmheading'>Solution</p>
											<NavDropdown.Item href="/xr-training">XR Training</NavDropdown.Item>
											<NavDropdown.Item href="/simulator">Simulators</NavDropdown.Item>
											<NavDropdown.Item href="/ehs">EHS</NavDropdown.Item>
											<NavDropdown.Item href="/remote-assist">Remote Assistance</NavDropdown.Item>
											<NavDropdown.Item href="/reflexis">Reflexis</NavDropdown.Item>
											<NavDropdown.Item href="/sanalexa">Sanalexa</NavDropdown.Item>
											<NavDropdown.Divider />
											<p className='mmheading'>Industries</p>
											<NavDropdown.Item href="/pharmaceutical">Pharmaceutical</NavDropdown.Item>
											<NavDropdown.Item href="/automotive">Automotive</NavDropdown.Item>
											<NavDropdown.Item href="/automation">Automation</NavDropdown.Item>
											<NavDropdown.Item href="/oilandgas">Oil & Gas</NavDropdown.Item>
											<NavDropdown.Item href="/fmcg">FMCG</NavDropdown.Item>
											<NavDropdown.Item href="/energy-and-utilities">Energy & Utilities</NavDropdown.Item>
											<NavDropdown.Item href="/paint-and-chemicals">Paint & Chemicals</NavDropdown.Item>
											<NavDropdown.Item href="/construction">Construction</NavDropdown.Item>
											<NavDropdown.Item href="/engineering">Engineering</NavDropdown.Item>
										</NavDropdown>
										<NavDropdown
											title="Metaverse"
											id={`offcanvasNavbarDropdown-expand-${expand}`}
										>
											<NavDropdown.Item href="https://academy.simulanis.io/">Learn</NavDropdown.Item>
										</NavDropdown>
										<Nav.Link href="#">Application</Nav.Link>
										<NavDropdown
											title="Resources"
											id={`offcanvasNavbarDropdown-expand-${expand}`}
										>
											<NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
											<NavDropdown.Item href="/case-study">Case Study</NavDropdown.Item>
										</NavDropdown>

										</Nav>
									</Offcanvas.Body>
									</Navbar.Offcanvas>
								</Container>
							</Navbar>
						))}
					 </>

				</header>
            </>
        );
    }
}

export default Header;