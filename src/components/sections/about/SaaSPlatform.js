import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import listing from '../../../data/listings.json';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
  offset:120,
});


class SaaSPlatform extends Component {
    render() {
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            dotsClass: "slick-dots d-flex",
            autoplay: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        return (
            <div className="section section-padding " id="saasplatform" style={{ backgroundColor: "#003b80", color: "#fff" }}  data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-center" style={{ color: "#fff", margin: 0 }}> <span className="name" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/crisnm/bg22.png)" }}>CRISNM</span> SaaS Platform</h2>
                {/* <div className="container"> */}

                <div className="row p-5  align-items-around justify-content-between" style={{ color: "#ffffff" }}  data-aos="fade-up" data-aos-delay="200">

                    <div className="col-lg-6  p-0 pt-5 p-lg-5 text-left  ">
                        <p className="singleSource saasdiv">
                            <h4 style={{ color: "#fff", fontWeight: 500 }}>The Platform</h4>
                            Trusting numeric is always easier than words!<br />
                            <strong>CRISNM</strong> presents comprehensive score on all risk
                            indicators across business functions with granular
                            visualization, which enables quick response and
                            control measures. Continuous optimization of exposure,
                            improving the source code of risk and information
                            security compliance addresses the key concerns
                            around cyber security.
                        </p>
                    </div>
                    <div className="col-lg-6 bg-about-3  p-lg-5 justify-content-center"  data-aos="flip-left" data-aos-delay="200">
                        <img className="w-70  h-70" style={{ maxHeight: "400px" }} src="assets/img/crisnm/Crisnm-scorenew.png" alt="img"/>
                    </div>

                </div>
                <div className="container">
                    <hr className="hrLine" style={{ color: "#ffffff", margin: 0, padding: 0 }} />
                </div>
                <div className="row p-5  align-items-around justify-content-between" style={{ color: "#ffffff"}} data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-6 bg-about-3  p-lg-5 justify-content-center"  data-aos="flip-right" data-aos-delay="200">
                        <img className="w-70  h-70" style={{ maxHeight: "400px" }} src="assets/img/crisnm/saas-platnew.png" alt="img"/>
                    </div>

                    <div className="col-lg-6  p-0 p-lg-5 pt-5  text-left  ">
                        <p className="singleSource saasdiv">
                            <h4 style={{ color: "#fff", fontWeight: 500 }}>Software as a Service</h4>
                            Our SaaS platform is a key business enabler with
                            comprehensive risk measurement and compliance
                            assurance. The platform leverages proven, seasoned
                            components with power to scale and composed with
                            arobust architecture. It fulfills upon all the basic
                            functional and non-functional system parameters to
                            offer a great user experience, With precise analytics
                            and numberics, we measure all the aspects of risks and 
                            InfoSec compliance for business continuity and growth.
                        </p>
                    </div>


                </div>
                {/* </div> */}
            </div>




            // <div className="banner banner-4 bg-cover bg-center">
            //     <div className="container">
            //         <div className="banner-item">
            //             <div className="banner-inner">
            //                 <div className="banner-text">
            //                     <div className="acr-dots-wrapper">
            //                         <div className="acr-dots" />
            //                     </div>
            //                     <h1 className="title">Find Your Ideal Home Today</h1>
            //                     <p className="subtitle">Thousands of people have their flats up for grabs. Don't miss your chance to grab your own house today.</p>
            //                 </div>
            //                 <div className="banner-newsletter">
            //                     <form method="post">
            //                         <input type="text" placeholder="Email Address" className="form-control" name="email-newsletter" />
            //                         <button type="submit" className="btn-custom secondary" name="button">Subscribe</button>
            //                     </form>
            //                     <span>*We will be sending you two emails per month about offers and exclusive listings</span>
            //                 </div>
            //                 {/* Featured Listings Start */}
            //                 <Slider className="acr-featured-listings banner-featured-slider" {...settings}>
            //                     {listing.slice(0, 4).map((item, i) => (
            //                         <div key={i} className="col-12">
            //                             <div className="acr-featured-listing">
            //                                 <div className="featured-listing-thumb">
            //                                     <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt="listing" /></Link>
            //                                     <div className="featured-listing-controls">
            //                                         {item.star === true ? <span>Featured</span> : ''}
            //                                         <Link to="#"><i className="far fa-heart" /></Link>
            //                                     </div>
            //                                 </div>
            //                                 <div className="featured-listing-content">
            //                                     <h6>{new Intl.NumberFormat().format((item.monthlyprice).toFixed(2))}$/mo</h6>
            //                                     <div className="featured-listing-meta">
            //                                         <p>Beds {item.beds}, Baths {item.bathrooms}, {new Intl.NumberFormat().format((item.area))} Sqft</p>
            //                                     </div>
            //                                     <span><i className="fas fa-map-marker-alt" /> {item.title}</span>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     ))}
            //                 </Slider>
            //                 {/* Featured Listings End */}
            //             </div>
            //         </div>
            //     </div>
            //     <div className="banner-bg bg-center bg-cover" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/4.jpg )" }} />
            // </div>
        );
    }
}

export default SaaSPlatform;