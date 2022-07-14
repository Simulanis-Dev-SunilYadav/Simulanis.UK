import React, { Component } from 'react'
import CountUp from 'react-countup';
import rotate from '../../assets/images/feature-dot-shape.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Count from './counter-sensor'

export class Counter5 extends Component {
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
                            <h6 className="title-ext m-b0">Key Figures</h6>
                            <span className="hr-secondary"></span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"}>
                        <div className="counter-style-2">
                            <div className="counter-bx">
                                <Count counter={6}/>
                            </div>
                            <span className="counter-text">Products Industry Specific</span>
                            <i className="la la-user-tie bg-icon"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"} data-aos-delay="100">
                        <div className="counter-style-2">
                            <div className="counter-bx">
                                <Count counter={6}/>
                            </div>
                            <span className="counter-text">Elite Clients</span>
                            <i className="la la-pencil-ruler bg-icon"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="counter-style-2">
                            <div className="counter-bx">
                                <Count counter={10}/>
                            </div>
                            <span className="counter-text">XR lab setup</span>
                            <i className="la la-industry bg-icon"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"} data-aos-delay="300">
                        <div className='percentageshow icounter'>
                            <div className="counter-style-2">
                                <div className="counter-bx">
                                    <Count counter={800}/>
                                </div>
                                <span className="counter-text">YoY Growth Rate</span>
                                <i className="la la-flag bg-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Counter5