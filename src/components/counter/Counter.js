import React, { Component } from 'react'
import CountUp from 'react-countup';
import rotate from '../../assets/images/feature-dot-shape.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Count from './counter-sensor'

export class Counter extends Component {
  render() {
    return (
      <>
        <div className="section-area section-sp1 bg-grey">
            <div className='feature__img--dot-shape' data-aos={"fade-down-right"}>
              <img src={rotate} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="heading-bx text-center">
                            <h6 className="title-ext m-b0">Our Pride </h6>
                            <span className="hr-secondary"></span>
                            <p>We are a multi-award winning XR Company, incepted in the year 2013. Simulanis has been pioneering the application of AR / VR / MR / XR  Technologies.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"}>
                        <div className="counter-style-2">
                            <div className="counter-bx">
                                <Count counter={8}/>
                            </div>
                            <span className="counter-text">Countries </span>
                            <i className="la la-flag bg-icon"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"} data-aos-delay="100">
                        <div className="counter-style-2">
                            <div className="counter-bx">
                                <Count counter={140}/>
                            </div>
                            <span className="counter-text">Customers </span>
                            <i className="la la-user-tie bg-icon"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="counter-style-2">
                            <div className="counter-bx">
                                <Count counter={250}/>
                            </div>
                            <span className="counter-text">Industrial Sites Visited </span>
                            <i className="la la-industry bg-icon"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"} data-aos-delay="300">
                        <div className="counter-style-2">
                            <div className="counter-bx">
                                <Count counter={10000}/>
                            </div>
                            <span className="counter-text"> Employees trained </span>
                            <i className="la la-pencil-ruler bg-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Counter