import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../layouts/Menu';
import Mobilemenu from '../../layouts/Mobilemenu';
import HeaderComponent from '../../../helper/Navigationhelper';
// import { Link } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import classNames from 'classnames';

// Start Scrolling  navbar
// End Scrolling  navbar


class Banner3 extends HeaderComponent {
    render() {
        return (

            <>
                <div>
                    <div id="home" className=" align-items-center bannerbackground fadeInUp">
                        {/* <div className="container-fluid bannerbackground" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/crisnm/1/4x/img2.png  )"}}> */}
                        <div className="" >


                            <div className="row homepagestart ">
                            <div class=" d-sm-none d-md-none d-lg-none d-xs-block  mobilebanner">
                                            <img src="/assets/img/crisnm/mobilebanner.jpg" alt="img" />
                                        </div>
                                <div className="col-10 mx-auto">
                                    <div className="row ">
                                        
                                        <div className=" col-12 col-sm-12 col-md-12  pt-0 order-2 order-lg-1 d-flex  flex-column homepagerow ">
                                            <br />
                                            <div className=" " style={{ paddingTop: '20px' }}>
                                                {/* <h1 className="pt-lg-5 " style={{ color: "#003b6c" ,paddingTop:'180px'}}>  */}
                                                <h1 className="pt-lg-5 " style={{ color: "#003b6c", paddingTop: '0px' }}>
                                                    <span className="name" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/crisnm/bg.png)" }}>CRISNM</span>  for <br /> Cyber Resilience</h1>
                                                <p className="my-3 headText">SaaS Platform for Certification, Audit & <br />Continuous Compliance</p>
                                                <div className="justify-content-center request1 ">

                                                <button type="submit " className="d-block  d-sm-none d-md-none d-lg-none  requestbtn warnButton ">REQUEST DEMO</button>
                                                </div>
                                                {/* <div className=" col-12  col-sm-0 mt-3 mx-auto justify-content-start "> */}
                                                    {/* <button><a to="#" className="btn btn-primary-outlined" style={{backgroundColor:"#fd8b2a",outline:'none'}}>Know More</a></button>  */}
                                                    <div className=" ">
                                                    <Link smooth to="#saasplatform" ><button type="submit "className="btn-custom requestbtn warnButton "> KNOW MORE </button> </Link>
                                                    </div>
                                                    {/* <button type="submit " className="d-block  d-sm-none d-md-none d-lg-none  btn-custom requestbtn warnButton ">REQUEST DEMO</button> */}
                                                    {/* <button type="submit" className="btn-custom warnButton requestbtn" >KNOW  MORE</button> */}
                                                {/* </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                                            {/* <img src="assets/img/crisnm/1/4x/Asset1.png" className="img-fluid animated" alt="img" /> */}
                                        </div>
                                    </div>
                                    <div className="row my-lg-5 py-lg-5">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="" >
      <img src='assets/img/banner/f02.jpg' className="d-block w-100" alt='assets/img/banner/f02.jpg'/>
    </div> */}
                </div>
            </>

        )
    }
};

export default Banner3;


// import React, { Fragment } from 'react';
// import Menu from '../layouts/Menu';
// import Mobilemenu from '../layouts/Mobilemenu';
// import HeaderComponent from '../../helper/Navigationhelper';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';

// class Headertwo extends HeaderComponent {
//     render() {
//         return (
//             <Fragment>
//                 {/* Aside (Mobile Navigation) */}
//                 <aside className={classNames("main-aside", { "open": this.state.navtoggle })}>
//                     <div className="aside-title">
//                         <div className="aside-controls aside-trigger">
//                             <h4>Menu</h4>
//                             <div className="close-btn close-dark" onClick={this.navtoggleClass} >
//                                 <span />
//                                 <span />
//                             </div>
//                         </div>
//                     </div>
//                     <Mobilemenu />
//                 </aside>
//                 <div className="aside-overlay aside-trigger" onClick={this.navtoggleClass} />
//                 {/* Header Start */}
//                 {/* <header className="main-header header-3"> */}
//                     <nav className="navbar">
//                         <div className="container">
//                             {/* Menu */}
//                             <Menu />
//                             <div className="header-controls">
//                                 {/* <ul className="header-controls-inner d-none d-lg-flex">
//                                     <li>
//                                         <Link to="/contact" className="btn-custom primary">Enquiry <i className="fas fa-user" /> </Link>
//                                     </li>
//                                 </ul> */}
//                                 {/* Toggler */}
//                                 <div className="aside-toggler aside-trigger" onClick={this.navtoggleClass}>
//                                     <span />
//                                     <span />
//                                     <span />
//                                 </div>
//                             </div>
//                         </div>
//                     </nav>
//                 {/* </header> */}
//                 {/* Header End */}
//             </Fragment>
//         );
//     }
// }

// export default Headertwo;