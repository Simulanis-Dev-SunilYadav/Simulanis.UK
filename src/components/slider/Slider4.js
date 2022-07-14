import React, { Component } from 'react'
import Slider from "react-slick";

export class Slider4 extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000
    };
    return (
      <>
		<Slider {...settings} className="tt-slider slider-one slider-sp0">
			<div className="slider-item">
				<div className="simulator">
					<h2>Our Solution</h2>
					<p>Simulanis Welding Simulator is a safe, reliable and an effective training method to train workers on using VR tools for welding operations practice in a simulated and a realistic environment.</p>
					<p>Welding VR allows novices to become competent and efficient.</p>
				</div>
			</div>	
			<div className="slider-item">
				<div className="simulator">
					<h2>Benefits</h2>
					<div className="row">
						<div className="col-md-6">
							<ul className='list-check'>
								<li>Increased Muscle Memory</li>
								<li>Reduced Learning Costs</li>
								<li>Increased Productivity</li>
							</ul>
						</div>
						<div className="col-md-6">
							<ul className='list-check'>
								<li>Detailed reports for analysis</li>
								<li>Reduced Learning Time</li>
								<li>Repeatable and Scalable</li>
							</ul>
						</div>
					</div>
				</div>
			</div>							
		</Slider>
      </>
    )
  }
}

export default Slider4