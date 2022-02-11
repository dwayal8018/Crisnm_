import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class Footercontent extends Component {
    render() {
        return (
            // <Fragment>
                
                
                    
            //         <h6 className=" text-center" style={{color:'#fff',fontWeight:'300'}}>© 2021 All Rights Reserved Terms of Use and Privacy Policy</h6>
                       
               
            // </Fragment>
            <Fragment>
            <div className="container">
                <div className="row py-3">
                <div className="col-lg-3  col-md-3 col-sm-6 footer-widget">
                        <h5 className="widget-title">About</h5>
                        <ul>
                            <li> <Link to="#">Product</Link> </li>
                            <li> <Link to="#">Team</Link> </li>
                            <li> <Link to="#">Company</Link> </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 footer-widget">
                        <h5 className="widget-title">Get Started</h5>
                        <ul>
                            <li> <Link to="#">Info</Link> </li>
                            <li> <Link to="#">Demo</Link> </li>
                            <li> <Link to="#">Experience</Link> </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 footer-widget">
                        {/* <div className="footer-logo"> */}
                            {/* <img src={process.env.PUBLIC_URL + "/assets/img/space-logo.png"} alt="acres" /> */}
                            {/* <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="acres" /> */}
                        {/* </div> */}
                        <h5 className="widget-title">About CRISNM</h5>
                        <h6 className=" " style={{color:'#fff',fontWeight:'300'}}>CRISNM brings you a complete,comprehensive solution for Cyber Risk and Information Security Non-compliance management solution enabling continuous compliance for ensuring confidentially,integrity and availability required for bussiness continuity and growth. </h6>
                        {/* <ul className="social-media">
                            <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                            <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                            <li> <Link to="#"> <i className="fab fa-pinterest-p" /> </Link> </li>
                            <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                        </ul> */}
                    </div>
                </div>
                
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-3">
                        <h6 className=" text-center " style={{color:'#fff',fontWeight:'300'}}>© 2021 All Rights Reserved Terms of Use and Privacy Policy</h6>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        );
    }
}

export default Footercontent;