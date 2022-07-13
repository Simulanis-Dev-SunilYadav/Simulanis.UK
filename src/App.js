import React from 'react'
import Router from "./router";

// // bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// // slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// // React Modal Video
// import 'react-modal-video/css/modal-video.min.css';
// import "swiper/swiper-bundle.min.css";

// Fonts
import './assets/vendors/fontawesome/css/font-awesome.min.css';
import './assets/vendors/flaticon/flaticon.css';
import './assets/vendors/flaticon/light/flaticon1.css';
import './assets/vendors/line-awesome/css/line-awesome.css';
import './assets/vendors/themify/themify-icons.css';

// Stylesheet
import './assets/css/typography.css';
import './assets/css/shortcodes/shortcodes.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/color/color-1.css';
import PageLoadScrollTop from "./components/PageLoadScrollTop";

function App() {
  return (
    <>
       <PageLoadScrollTop/>
       <Router />
    </>
  );
}

export default App;
