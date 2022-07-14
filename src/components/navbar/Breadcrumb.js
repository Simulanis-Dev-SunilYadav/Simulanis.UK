import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Breadcrumb extends Component {
    constructor(props){
        super(props);
        this.state = { 
        //   change: true
        };
      }
  render() {
    return (
      <>
            <div className="container">
                <div className="page-banner-entry">
                    <h1 className="text-white">{this.props.heading}</h1>
                    <div className="breadcrumb-row">
                        <ul className="list-inline">
                            <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                            <li>{this.props.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
      </>
    )
  }
}

export default Breadcrumb