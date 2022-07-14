import React, { Component } from 'react'
import Slider from "react-slick";

export class Slider3 extends Component {
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
					<p>Simulanis’ Paint Virtual Reality Simulator is an impactful alternative training method to traditional coating and spray-painting techniques It allows trainees to work in a safer work environment without worrying about illness due to the exposure of toxic materials.</p>
				</div>
			</div>	
			<div className="slider-item">
				<div className="simulator">
					<h2>Traditional Paint Training Challenges</h2>
					<ul className='list-check'>
						<li>High Cost</li>
						<li>Inhalation Hazards</li>
						<li>Industrial Waste</li>
					</ul>
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

export default Slider3