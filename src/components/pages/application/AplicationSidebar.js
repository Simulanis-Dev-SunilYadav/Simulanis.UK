import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

import IconPdf from '../../../assets/images/icon/pdf.png';
import IconDoc from '../../../assets/images/icon/doc.png';
import contactus from '../../../assets/images/contactus.jpg';
import HeadPhones from '../../../assets/images/icon/headphones.png';

export class AplicationSidebar extends Component {
  render() {
    return (
      <>
        <aside className="sticky-top">
            <div className="widget">
                <ul className="service-list">
                    <li>
                        <NavLink style={({isActive})=>{return {backgroundColor:isActive ? '#fe5a0e' : ''}}} to="/operational_eftficiency"><span>Operational Efficiency</span>
                        <i className="fa fa-angle-right"></i> </NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {backgroundColor:isActive ? '#fe5a0e' : ''}}} to="/remote-assist_application"><span>Remote Assistance</span>
                        <i className="fa fa-angle-right"></i></NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {backgroundColor:isActive ? '#fe5a0e' : ''}}} to="/health-and-safety"><span>Health & Safety</span>
                        <i className="fa fa-angle-right"></i></NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {backgroundColor:isActive ? '#fe5a0e' : ''}}} to="/smart-manufacturing"><span>Smart Manufacturing</span>
                            <i className="fa fa-angle-right"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {backgroundColor:isActive ? '#fe5a0e' : ''}}} to="/maintenance_&_repair"><span>Maintenance & Repair</span>
                            <i className="fa fa-angle-right"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {backgroundColor:isActive ? '#fe5a0e' : ''}}} to="/smart-training"><span>Smart Training</span>
                            <i className="fa fa-angle-right"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive})=>{return {backgroundColor:isActive ? '#fe5a0e' : ''}}} to="/multi-user-collaboration"><span>Multi-user Collaboration</span>
                        <i className="fa fa-angle-right"></i></NavLink>
                    </li>
                </ul>
            </div>
            <div className="widget">
                <div className="help-bx">
                    <div className="media">
                        <img src={contactus} alt=""/>
                    </div>
                    <div className="info text-white">
                        <img src={HeadPhones} alt=""/>
                        <h5 className="title">How Can We Help</h5>
                        <p>If you need any helps, please free to contact us.</p>
                        <Link to="/get_in_touch" className="btn-secondry">Contact Us</Link>
                    </div>
                </div>
            </div>
        </aside>
      </>
    )
  }
}

export default AplicationSidebar