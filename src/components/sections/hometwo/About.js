// Changed by Dnyaneshwari -  At line 21  { <div className="acr-dots" /> } is commented.It was acquiring space at right and in mobile view it was scroling.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
  offset:120,
});


class About extends Component {
    render() {
        return (
            <div className="section " data-aos="fade-up" data-aos-delay="200"> 
                {/* <div className=""> */}
                <div className="row align-items-center justify-content-center">
                        <div className=" col-lg-8 ">
                            <h2 className="text-center px-3 px-sm-0"><span className="name" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/crisnm/bg.png)" }}>Cyber Resilience</span> for seamless <br />
                            business operations</h2>
                            <br />
                            {/* <div className=" p-0 p-lg-5 pt-5  text-left  "> */}
                            <p className="text-center px-4 px-md-0  aboutText">
With increasing attacks and growing threat surface,Cyber resilience has become one of the key drivers for running and sustaining business. <strong>CRISNM</strong> supports building cyber resilience powered by AI and automation for certification and continuous compliance with top cyber security frameworks. 
<br /><br /><br />
Our product ensures the basics to establish infoSec management enablers as well as includes all the required components for ensuring compliance benchmarks with runtime risk analytics,feeding into the decision making. 

                            </p>
                            {/* </div> */}
                            
                           

                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center frameworks" data-aos="fade-up" data-aos-delay="200">
                    <img src={process.env.PUBLIC_URL + "/assets/img/crisnm/6/33.png"} alt="img"/>
                        {/* <div className="col-lg-6 mb-lg-30 acr-dots-wrapper acr-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/listings-list/about-us-2.jpg"} alt="img" />
                           
                        </div> */}
                        {/* <div className="col-lg-6">
                            
                        </div> */}
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default About;