import React, { Component } from 'react'
import {animateScroll} from 'react-scroll';


export class BackToTop extends Component {
    scrollToTop = () => {
        animateScroll.scrollToTop();
	}
	componentDidMount = () => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > this.state.offset){
                this.setState({
                    ...this.state,
                    show:true
                })
            }
			else{
                this.setState({
                    ...this.state,
                    show:false
                })
            }
        })
	}
	state = { 
        offset : this.props.offset || 200,
        show   : false
    }
  render() {
    return (
      <>
            {this.state.show && (
                <button className="back-to-top" type="button" onClick={this.scrollToTop}>
                    <i className="fa fa-chevron-up"></i>
                </button>
            )}
      </>
    )
  }
}

export default BackToTop