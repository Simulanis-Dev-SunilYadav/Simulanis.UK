import React, { Component } from 'react'
import CountUp from 'react-countup';
import rotate from '../../assets/images/feature-dot-shape.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Count from './counter-sensor'

export class Counter2 extends Component {
  render() {
    return (
      <>
         <div className="percentageshow">
            <div className="row">
                <div className="col-md-4">
                    <div className="counter-style-2">
                        <div className="counter-bx">
                            <Count counter={50}/>
                        </div>
                        <span className="counter-text">Increase in productivity</span>
                        <i className="la la-chart-line bg-icon"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="counter-style-2">
                        <div className="counter-bx">
                            <Count counter={60}/>
                        </div>
                        <span className="counter-text">Reducing thiring time</span>
                        <i className="la la-stopwatch bg-icon"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="counter-style-2">
                        <div className="counter-bx counterplus">
                            <Count counter={200}/>
                        </div>
                        <span className="counter-text">XR training modules</span>
                        <i className="la la-school bg-icon"></i>
                    </div>
                </div>
            </div>
         </div>
      </>
    )
  }
}

export default Counter2