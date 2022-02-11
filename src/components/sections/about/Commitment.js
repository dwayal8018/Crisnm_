// Changed by Dnyaneshwari -<div className="container"> </div> added

import React, { Component } from 'react';
import icon1 from '../../../assets/img/misc/icon1.png'
import icon2 from '../../../assets/img/misc/icon2.png'
import icon3 from '../../../assets/img/misc/icon3.png'
import icon4 from '../../../assets/img/misc/icon4.png'
import icon5 from '../../../assets/img/misc/icon5.png'
import icon6 from '../../../assets/img/misc/icon6.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
  offset:120,
});

const counter = [
    {
        icon: "garage",
        value: 24934,
        title: "Listings"
    },
    {
        icon: "sales-agent",
        value: 65317,
        title: "Agents"
    },
    {
        icon: "company",
        value: 4658,
        title: "Agencies"
    },
    {
        icon: "sold",
        value: 67335,
        title: "Listings Sold"
    }
]

class Commitment extends Component {
    render() {
        return (
            <div className="section section-padding " style={{ backgroundColor: "#dcfff8" }} data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-center"> Single source for <br /> <span className="name" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/crisnm/bg.png)" }}>Information Security</span></h2>
                {/* <div className="container"> */}
               
                <div className="row mt-3 p-5  align-items-around justify-content-between" >
                    <div className="col-lg-6 bg-about-3  p-lg-5 justify-content-center" data-aos="flip-right" data-aos-delay="200">
                        {/* <img className="w-70  h-70" style={{ maxHeight: "400px" }} src="img" /> */}
                        <img className="w-70  h-70" style={{ maxHeight: "400px" }} src="assets/img/crisnm/7/4x/Asset112.png" />
                    </div>
                    <div className="col-lg-6  p-0 p-lg-5 pt-5  text-left  " data-aos="flip-left" data-aos-delay="200">

                        <p className="singleSource "> A successful Information Security program requires multiple rediness.We need policies, procedures, documents, statements, reports etc.  In addition,we need to prepare for handling incidents, evidences, actions, logs etc. </p> <br /> <p className="singleSource "> Further,it requires a comprehensive view of each with respect to the applicable compliances standards,ready to be audited by internal and external stakeholders.Single source of truth could help to ensure speed in addressing various information security challenges.</p>

                      



                    </div>

                </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Commitment;