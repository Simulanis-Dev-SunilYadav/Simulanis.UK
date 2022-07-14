import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import xrwithpharma from '../../../assets/images/blog/xrwithpharma.jpg';
import knowledgegap from '../../../assets/images/blog/knowledgegap.jpg';
import threedsimulators from '../../../assets/images/blog/3dsimulators.jpg';
import GalleryPic1 from "../../../assets/images/gallery/pic1.jpg"
import GalleryPic2 from "../../../assets/images/gallery/pic2.jpg"
import GalleryPic3 from "../../../assets/images/gallery/pic3.jpg"
import GalleryPic4 from "../../../assets/images/gallery/pic4.jpg"
import GalleryPic5 from "../../../assets/images/gallery/pic5.jpg"
import GalleryPic6 from "../../../assets/images/gallery/pic6.jpg"
import hsafety from '../../../assets/images/use__cases/health_safety/hsafety.jpg'
import maintenance from '../../../assets/images/use__cases/con-im/maintensupport.jpg'
import sealing from '../../../assets/images/case_study/sealing.jpg'



export class BlogSidebar extends Component {
  render() {
    return (
      <>
            	<aside className="side-bar sticky-top aside-bx">
					<div className="widget recent-posts-entry">
						<h6 className="widget-title mb-3">Recent Posts</h6>
						<div className="widget-post-bx">
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={hsafety} width="200" height="143" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="/5ways-how-VR-is-improving-knowledge-retention-rates-in-education-industry">5 Ways how VR is improving knowledge retention rates in Education Industry</Link></h6>
									</div>
								</div>
							</div>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={maintenance} width="200" height="160" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="augmented-reality-and-the-automotive-industry_a-value-creation-opportunity-not-to-be-missed">AR and the Automotive Industry - A value creation opportunity not to be missed</Link></h6>
									</div>
								</div>
							</div>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={sealing } width="200" height="160" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="/xr_a-medicine-for-the-pharmaceutical-industry">XR – A medicine for the Pharmaceutical Industry</Link></h6>
									</div>
								</div>
							</div>
						</div>
						<h6 className="widget-title mt-4"><Link to="/blogs">Go to blog list <i className="fa fa-angle-right"></i></Link></h6>
						<h6 className="widget-title mt-2"><Link to="/case-study">Go to Case Study <i className="fa fa-angle-right"></i></Link></h6>
					</div>
				</aside>
      </>
    )
  }
}

export default BlogSidebar