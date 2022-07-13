import React, { Component } from 'react'
import Slider from "react-slick"; 
import {Link} from 'react-router-dom'
// Images
import Image1 from "../../assets/images/slider/1.jpg"
import Image2 from "../../assets/images/slider/sutomotiveslider.jpg"
import Image3 from "../../assets/images/slider/oilgas.jpg"

export class Slider1 extends Component {
  render() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
      	autoplaySpeed: 3500
	};
    return (
      <>
			<Slider {...settings} className="tt-slider slider-one slider-sp0">		
				<div className="slider-item">
					<div className="slider-thumb">
						<img src={Image2} alt=""/>
					</div>
					<div className="slider-content text-white text-center">
						<div className="container">
							<div className="content-inner" data-aos={"fade-up"}>
								<h6 className="sub-title">Automotive industry</h6>
								<h2 className="title">WE PROVIDE BEST <strong>INDUSTRIAL SERVICES</strong></h2>
								<Link className="btn m-lr10" to="/get_in_touch">Get In Touch</Link>
							</div>
						</div>
					</div>
				</div>					
				<div className="slider-item">
					<div className="slider-thumb">
						<img src={Image3} alt=""/>
					</div>
					<div className="slider-content text-white text-center">
						<div className="container">
							<div className="content-inner" data-aos={"fade-up"}>
								<h6 className="sub-title">Oil & Gas industry</h6>
								<h2 className="title">WE PROVIDE BEST <strong>INDUSTRIAL SERVICES</strong></h2>
								<Link className="btn m-lr10" to="/get_in_touch">Get In Touch</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="slider-item">
					<div className="slider-thumb">
						<img src={Image1} alt=""/>
					</div>
					<div className="slider-content text-white text-center">
						<div className="container">
							<div className="content-inner" data-aos={"fade-up"}>
								<h6 className="sub-title">Pharmaceutical industry</h6>
								<h2 className="title">We Provide Best <strong>Industrial Solution</strong></h2>
								<Link className="btn m-lr10" to="/get_in_touch">Get In Touch</Link>
							</div>
						</div>
					</div>
				</div>						
			</Slider>
      </>
    )
  }
}

export default Slider1