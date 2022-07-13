import React, { Component } from 'react'
import CountUp from 'react-countup';
import rotate from '../../assets/images/feature-dot-shape.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Count from './counter-sensor'

export class Counter3 extends Component {
  render() {
    return (
      <>
         <div className="percentageshow">
            <div className="row">
                <div className="col-md-4">
                    <div className="counter-style-2">
                        <div className="counter-bx counterplus">
                            <Count counter={500}/>
                        </div>
                        <span className="counter-text">Campaigns Created</span>
                        <i className="la la-school bg-icon"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="counter-style-2">
                        <div className="counter-bx counterplus">
                            <Count counter={5000}/>
                        </div>
                        <span className="counter-text">Employees Gamified</span>
                        <i className="la la-chart-line bg-icon"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="counter-style-2">
                        <div className="counter-bx counterplus">
                            <Count counter={10000}/>
                        </div>
                        <span className="counter-text">Quizzes Played</span>
                        <i className="la la-stopwatch bg-icon"></i>
                    </div>
                </div>
            </div>
         </div>
      </>
    )
  }
}

export default Counter3