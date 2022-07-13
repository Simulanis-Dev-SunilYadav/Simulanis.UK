import React, { Component } from 'react'
import CountUp from 'react-countup';
import rotate from '../../assets/images/feature-dot-shape.png'
import keyfigures from '../../assets/images/whatwedo/automation/keyfigures.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Count from './counter-sensor'


export class Counter7 extends Component {
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-4">
                    {/* <div className="col-lg-6 col-md-6 col-sm-6 col-6 m-b30" data-aos={"fade-up"}>
                        <img src={keyfigures}/>
                    </div> */}

                    <div className="col-lg-12 col-md-12 col-sm-12 col-6 m-b30" data-aos={"fade-up"} data-aos-delay="200">
                        <div className='row'>
                            <div className='col-md-3'  data-aos={"fade-up"} data-aos-delay="100">
                                <div className="counter-style-2">
                                    <div className="counter-bx">
                                        <Count counter={6}/>
                                    </div>
                                    <span className="counter-text">Leading ONG's</span>
                                    <i className="la la-user-tie bg-icon"></i>
                                </div>
                            </div>
                            <div className='col-md-3'  data-aos={"fade-up"} data-aos-delay="200">
                                <div className="counter-style-2">
                                    <div className="counter-bx">
                                        <Count counter={8}/>
                                    </div>
                                    <span className="counter-text">SBU's Training Content</span>
                                    <i className="la la-industry bg-icon"></i>
                                </div>
                            </div>
                            <div className='col-md-3'  data-aos={"fade-up"} data-aos-delay="300">
                                <div className="counter-style-2">
                                    <div className="counter-bx">
                                        <Count counter={30}/>
                                    </div>
                                    <span className="counter-text">XR Modules</span>
                                    <i className="la la-user-tie bg-icon"></i>
                                </div>
                            </div>
                            <div className='col-md-3'  data-aos={"fade-up"} data-aos-delay="400">
                                <div className="counter-style-2">
                                    <div className="counter-bx ">
                                        <Count counter={10000}/>
                                    </div>
                                    <span className="counter-text">Across Outlets</span>
                                    <i className="la la-user-tie bg-icon"></i>
                                </div>
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

export default Counter7