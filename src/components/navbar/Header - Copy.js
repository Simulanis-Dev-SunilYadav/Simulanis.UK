import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import '../../assets/vendors/animate/animate.css'

import AOS from "aos";
import "aos/dist/aos.css";


import Logo from "../../assets/images/Simulanis-Logo.svg"
import ProductImg1 from "../../assets/images/product/pic1.jpg"
import ProductImg2 from "../../assets/images/product/pic2.jpg"
import IconImg1 from "../../assets/images/icon/contact/icon1.png"
import IconImg2 from "../../assets/images/icon/contact/icon2.png"
import IconImg3 from "../../assets/images/icon/contact/icon3.png"

class Header extends Component {
	state = {
        scroll: 0
      };
    componentDidMount() {
		AOS.init({
			duration : 1000
		  });


		  window.addEventListener('scroll', () => {
			let activeClass = 'fadeInDownBig';
			if(window.scrollY === 0){
				activeClass = '';
			}
			this.setState({ activeClass });
		  });




		//   window.addEventListener("scroll", () => {
		// 	this.state(window.scrollY > 50);
		//   });

		// Cart Dropdown 
		// var cartBtn = document.getElementById("cartBtn")
        // var cartDropdown = document.querySelector(".cart-dropdown")
		
        // cartBtn.addEventListener('click',function(){
        //     cartDropdown.classList.toggle("show")
		// })
		

		// Search Form Popup
		// var searchBtn = document.getElementById("quik-search-btn")
        // var searchForm = document.querySelector(".nav-search-bar")
        // var closeBtn = document.getElementById("search-remove")
		
        // searchBtn.addEventListener('click',function(){
        //     searchForm.classList.add("show")
        // })

        // closeBtn.addEventListener('click',function(){
        //     searchForm.classList.remove("show")
        // })

        // Mobile Menu sidebar function
        var btn = document.querySelector('.menuicon');
        var nav = document.querySelector('.menu-links');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);

        // Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));
            
            if(active){
                current.classList.remove('open') 
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }
		
          }

    render() {
        return (
            <>
              	{/* <!-- Header Top ==== --> */}
				<header className="header rs-nav">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="col-md-8 topbar-left">
									<ul>
										<li><a href='tel:+91-9990912140'><i className="la la-phone"></i>Call Us (+91) 999 0912 140</a></li>
										<li><a href='mailto:connect@simulanis.com'><i className="las la-envelope-open"></i>connect@simulanis.com</a></li>
									</ul>
								</div>
								<div className="col-md-4 topbar-right">
									<ul className='text-md-end'>
										<li><Link to="blog-standard">News</Link></li>
										<li><Link to="contact-1">Contact Us</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <Sticky enabled={true} className={`sticky-header navbar-expand-lg animated ${this.state.activeClass}` }> */}
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img src={Logo} alt=""/></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											{/* <li className="search-btn">
												<button id="quik-search-btn" type="button" className="btn-link"><i className="ti-search"></i></button>
											</li>
											<li>
												<Link to="#" className="cart-btn" id="cartBtn">
													<span>0</span>
												</Link>
												<ul className="dropdown-menu cart-dropdown cart-list">
													<li className="cart-item">
														<div className="media"> 
															<div className="media-left"> 
																<Link to="#"> 
																	<img alt="" className="media-object" src={ProductImg1}/> 
																</Link> 
															</div> 
															<div className="media-body"> 
																<h6 className="title"><Link to="" className="media-heading">There are many variations of passages</Link></h6>
																<span className="price">$25.00</span>
																<span className="item-close">&times;</span>
															</div> 
														</div>
													</li>
													<li className="cart-item">
														<div className="media"> 
															<div className="media-left"> 
																<Link to="#"> 
																	<img alt="" className="media-object" src={ProductImg2}/> 
																</Link> 
															</div> 
															<div className="media-body"> 
																<h6 className="title"><Link to="#" className="media-heading">There are many variations of passages</Link></h6>
																<span className="price">$22.00</span>
																<span className="item-close">&times;</span>
															</div> 
														</div>
													</li>
													<li className="cart-item subtotal">
														<h6 className="title m-a0">Subtotal <span>$47.00</span></h6>
													</li>
													<li className="d-flex">
														<button className="btn button-md flex-fill m-r5">View Cart</button>
														<button className="btn-secondry button-md flex-fill m-l5">Checkout</button>
													</li>
												</ul>
											</li> */}
											<li className="d-none d-sm-block">
												<Link to="get-in-touch" className="btn">Get In Touch</Link>
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
										<li className="active"><Link to="javascript:;">Company<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="javascript:;"><span>Simulanis Story</span> </Link></li>
												<li><Link to="javascript:;"><span>Meritorious Journey</span></Link></li>
												<li><Link to="javascript:;"><span>Team</span></Link></li>
											</ul>
										</li>
                                        <li><Link to="javascript:;">Metaverse<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="javascript:;"><span>Learn</span> </Link></li>
												<li><Link to="javascript:;"><span>Assist</span></Link></li>
											</ul>
										</li>

										<li><Link to="#">Enterprises<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li>
                                                    <Link to="javascript:;"><span>Industries </span> <i className="fa fa-angle-right"></i> </Link>
                                                    <ul className="sub-menu">
                                                        <li><Link to="javascript:;"><span>Pharmaceutical</span></Link></li>
                                                        <li><Link to="javascript:;"><span>Automotive</span></Link></li>
                                                        <li><Link to="javascript:;"><span>Oil & Gas</span></Link></li>
                                                        <li><Link to="javascript:;"><span>EHS</span></Link></li>
                                                    </ul>
												</li>
                                                <li><Link to="javascript:;"><span>Customers</span></Link></li>
                                                <li><Link to="javascript:;"><span>Applications</span></Link></li>
											</ul>
										</li>
										<li><Link to="#">Resources<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="shop"><span>Blogs</span> </Link></li>
														<li><Link to="shop-sidebar"><span>Case Study</span></Link></li>
														<li><Link to="shop-cart"><span>Videos</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Career</Link>
										</li>
									</ul>
									<div className="nav-social-link">
										<Link to="#"><i className="fa fa-facebook"></i></Link>
										<Link to="#"><i className="fa fa-google-plus"></i></Link>
										<Link to="#"><i className="fa fa-linkedin"></i></Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="search-remove"><i className="ti-close"></i></span>
					</div>
				</header>
				{/* <!-- Header Top END ==== --> */}

                <div className="contact-sidebar content-scroll">
					<div className="inner">
						<div className="logo">
							<img src={Logo} alt=""/>
						</div>
						<h4 className="title">Contact Us For Any Informations</h4>
						<ul className="contact-infolist">
							<li>
								<img src={IconImg1} alt=""/>
								<h6 className="contact-title">Contact Number</h6>
								<p>+001 123 456 790 <br/>(02)  3424 44 00</p>
							</li>
							<li>
								<img src={IconImg2} alt=""/>
								<h6 className="contact-title">Email Address</h6>
								<Link to="#">info@yourdomain.com</Link>
								<Link to="#">example@support.com</Link>
							</li>
							<li>
								<img src={IconImg3} alt=""/>
								<h6 className="contact-title">Address</h6>
								<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
							</li>
						</ul>
						<h4 className="title">Get In Touch</h4>
						<form className="contact-bx ajax-form" action="script/contact.php">
							<div className="ajax-message"></div>
							<div className="row placeani">
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Your Name</label>
											<input name="name" type="text" required className="form-control"/>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group"> 
											<label>Your Email Address</label>
											<input name="email" type="email" className="form-control" required />
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Type Message</label>
											<textarea name="message" rows="4" className="form-control" required ></textarea>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="contact-sidebtn close">
					<i className="ti-close"></i>
				</div>

            </>
        );
    }
}

export default Header;