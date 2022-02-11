// Changed by D 
// Removed s from Our Differences
// Capitaled  S of sales in Enduring Value


import React, { Component, Fragment } from 'react';
import Stepper from './stepper';
import MetaTags from "react-meta-tags";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1200,
    offset: 120,
});

const whyusblock = [
    {
        id: 1,
        icon: "star",
        title: "Enduring Value",
        text: "We deliver every stage of the project, Right from research and acquisition, Marketing and Sales, to Construction and maintenance. We build Long lasting Landmarks."
    },
    {
        id: 2,
        icon: "apartment",
        title: "Track Record",
        text: "Space has delivered more than 20 projects in Pune Metropolitan Region in the past 20 years and has never failed to deliver a project."
    },
    {
        id: 3,
        icon: "sales-agent",
        title: "Quality",
        text: "We design Floor-plans with the Owner- Occupier in mind with emphasis on Spacious layouts, amenities and with high quality fixtures and fittings that people want to live in."
    }
]



// style


// End


class Whyus extends Component {
    render() {
        return (
            <Fragment >
                {/* <MetaTags>
                    <title>CRISNM  | Why CRISNM?</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> */}
                <div id="whycrisnm" ></div>
                <div className="section section-padding infographics-3  " data-aos="fade-up" data-aos-delay="200" >
                    <div className="container">
                        <div className="section-title-wrap section-header">
                            <h2 className=" text-center" >Why <span className="name" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/crisnm/bg.png)" }}>CRISNM</span> ?</h2>
                            <br />
                            <h5 className="secondary text-center">Saas Platform for Certification, Audit & Continuous Compliance</h5>
                        </div>
                        {/* <div className="row"> */}
                        <Stepper />
                        {/* <img src="assets/img/crisnm/2/223.png" alt="img" /> */}



                        {/*  */}

                        {/* <div className="circle"></div> */}
                        {/* <div className="circle"></div> */}
                        {/* <div className="whyimg"> */}
                        {/* <div className="why">
                                <div className="lines">
                                    <div className="circle"><img src="assets/img/crisnm/2/insight.png" alt="" />

                                    </div>
                                </div>

                            </div>
                            <div className="why">
                                <div className="lines">

                                    <div className="circle"><img src="assets/img/crisnm/2/chip.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="why">
                                <div className="lines">
                                    <div className="circle"><img src="assets/img/crisnm/2/engineering.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="why">
                                <div className="lines">
                                    <div className="circle"><img src="assets/img/crisnm/2/compliance.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="why">
                                <div className="lines">
                                    <div className="circle"><img src="assets/img/crisnm/2/framework.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="why">
                                <div className="lines">
                                    <div className="circle"><img src="assets/img/crisnm/2/discovery.png" alt="" /></div>
                                </div>
                            </div>

 */}

                        {/* </div> */}



                        {/*  */}
                        {/*  */}

                        {/* <div className="why">
                           
                            <div className="circle"><img src="assets/img/crisnm/2/insight.png" alt="" />
                                <div className="t">
                                </div>
                            </div>
                        
                        </div>
                        <div className="why">
                            
                            <div className="circle"><img src="assets/img/crisnm/2/insight.png" alt="" />
                                <div className="t1">
                                </div>
                            </div>
                            
                        </div> */}

                        {/*  */}








                        {/* </div> */}
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default Whyus;
