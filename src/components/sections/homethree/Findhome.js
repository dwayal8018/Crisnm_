import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { type } from '../../../data/category.json'
import MetaTags from "react-meta-tags";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
  offset:120,
});

class Findhome extends Component {
    render() {
        return (
            // <div className="section cta-banner" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/cta/cc1.jpg )" }}>
            <Fragment >
            {/* <MetaTags>
                    <title>CRISNM  | Product</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> */}
            <div className="section cta-banner" data-aos="fade-up" data-aos-delay="200" id="product">
                <div className="container align-center">
                    {/* <div className="cta cta-3"> */}
                    <div className="">

                        <h2 className="secondary text-center" style={{ color: "#fff" }}>The Product</h2>

                        <h5 className=" secondary text-center" style={{ color: "#fff" }}>Comprehensive Saas platform for rapid InfoSec compliance and certification</h5>

                        <h4 className="text-center" style={{ color: "#fff" }}>FEATURING</h4>
                        <div className="row featuring" >

                            {type.slice(0, 4).map((item, i) => (
                                <div key={i} className="col-md-6  ">
                                    <div className="row">

                                        {/* <span className="px-1 justify-content-center align-items-center "> */}
                                        <div className="col-2 col-xs-3 col-md-2  checkbox">
                                            {/* <div className="col-1 col-md-2 checkbox"> */}
                                            <img src="assets/img/crisnm/3/check.png" alt="img" style={{ maxHeight: "22px" }} />

                                        </div>
                                        {/* <div className="col-11 col-md-10  "> */}
                                        <div className="col-10 slider  col-xs-9 col-md-10 projectText ">

                                            <h6 style={{ color: "#fff" }}>{item.text}</h6>
                                        </div>

                                        {/* </span> */}
                                    </div>

                                </div>
                            ))}

                            {/* <ul >
                                <li class="leaf">Compliance dashboard composes views with various security parameters.</li>
                                <li class="leaf">Policies and guidelines for the dashboard and the analytics engine.</li>
                                <li class="leaf">Compliance dashboard composes views with various security parameters.</li>
                                <li class="leaf">Policies and guidelines for the dashboard and the analytics engine.</li>
                                
                            </ul> */}


                        </div>

                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Findhome;