


// Changed by Dnyaneshwari -
// At line 552 col-12 added is added
// At line 1153 <ModalEnquiry /> added

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink, Accordion, Card } from 'react-bootstrap';
// import listing from '../../../data/listings.json';
// import Calculator from '../../layouts/Calculator';
import $ from 'jquery';
import 'magnific-popup'
import classNames from 'classnames';
import Slider from 'react-slick';
// import Listingmap from "./Listingmap"
import AI from '../../../../assets/img/portfolio/1.jpg'
// import AI from "../../../assets/img/icons/AI.png"
// import AI from "../../../../assets/img/icons/AI.png"
import complience from "../../../../assets/img/icons/complience.png"
import discover from "../../../../assets/img/icons/discover.png"
import insight from "../../../../assets/img/icons/insight.png"
import multiple from "../../../../assets/img/icons/multiple.png"
import Risk from "../../../../assets/img/icons/Risk.png"

import A from "../../../../assets/img/6/1.png"
import C from "../../../../assets/img/6/3.png"

import nist from "../../../../assets/img/6/2.png"
import pcidss from "../../../../assets/img/6/4.png"
import soc from "../../../../assets/img/6/5.png"
import hipaa from "../../../../assets/img/6/8.png"
import gdpr from "../../../../assets/img/6/9.png"
import cis from "../../../../assets/img/6/13.png"
import iso from "../../../../assets/img/6/16.png"


const mainslider1 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }
]
const mainslider2 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },

]
const mainslider3 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider4 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider5 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider6 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider7 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider8 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider9 = [
    {
        img: "assets/img/crisnm/close-upemp.png",
        title: "THE EVOLUTION OF INFOMATION SECIRITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

];


class Listingwrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showmore: false,
            gallary: true,
            tabtype: 'all'

        }
        this.showmoretoggle = this.showmoretoggle.bind(this)
    }
    toggleMe = (value) => {
        this.setState({
            tabtype: value
        })
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleRegister = (e) => {
        e.preventDefault()
        console.log(this.state)

    }
    showmoretoggle() {
        this.setState({
            showmore: !this.state.showmore
        })
    }
    componentDidMount() {
        // function popup() {
        //   $('.gallery-thumb').magnificPopup({
        //     type: 'image',
        //     gallery: {
        //       enabled: true
        //     },
        //   });
        //   $('.gallery-thumb1').magnificPopup({
        //     type: 'image',
        //     gallery: {
        //       enabled: true
        //     },
        //   });
        //   $('.gallery-thumbg1').magnificPopup({
        //     type: 'image',
        //     gallery: {
        //       enabled: true
        //     },
        //   });


        // }
        // popup();
        // this.setState({
        //   nav1: this.slider1,
        //   nav2: this.slider2,

        //   navs1: this.sliders1,
        //   navs2: this.sliders2


        // });
    };
    render() {
        const {

        } = this.state

        const settings2 = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            dots: true
        };



        return (
            <div className="section listing-wrapper">
                <div className="container">
                    <div className="row" id="modal">
                        {/* gallery start */}
                        {/* <h4 className="col-12 my-4 justify-content-center">Gallery</h4> */}
                        <div class="col-12">
                            <div class="tm-portfolio-buttons text-center">
                                <button className=" btn-outlined btn-custom warning  portfolio-business is-active m-2" onClick={() => this.toggleMe('all')}>All</button>
                                <button className=" btn-outlined btn-custom warning portfolio-business m-2" onClick={() => this.toggleMe('iso27001')}>ISO27001</button>
                                <button className=" btn-outlined btn-custom warning portfolio-financial m-2" onClick={() => this.toggleMe('soc2')}>SOC-2</button>
                                <button className=" btn-outlined btn-custom warning portfolio-investment m-2" onClick={() => this.toggleMe('hipaa')}>HIPAA</button>
                                <button className=" btn-outlined btn-custom warning portfolio-careative m-2" onClick={() => this.toggleMe('nist40053')}>NIST 400-53</button>
                                <button className=" btn-outlined btn-custom warning portfolio-technology m-2" onClick={() => this.toggleMe('csf')}>CSF</button>
                                <button className=" btn-outlined btn-custom warning portfolio-investment m-2" onClick={() => this.toggleMe('pcidss')}>PCI DSS</button>
                                <button className=" btn-outlined btn-custom warning portfolio-careative m-2" onClick={() => this.toggleMe('cistop20')}>CIS Top 20</button>
                                <button className=" btn-outlined btn-custom warning portfolio-technology m-2" onClick={() => this.toggleMe('gdpr')}>GDPR</button>
                            </div>
                        </div>
                        </div>
                       
                        <div className="listing d-flex justify-content-center">
                        {/* <div className="row"> */}
                            <div className=" ">
                                {this.state.tabtype === "all" &&
                                    <div className="">
                                    <div className="row">
                                        {mainslider1.map((item, i) => (

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                <div className="">
                                                    <div className=" portImage ">
                                                        <img
                                                            src={item.img}
                                                            alt="listing"

                                                        />
                                                    </div>

                                                    <div className="listing-body portfoliocontent">
                                                        <div className="listing-author">
                                                            <div className="listing-author-body ">
                                                                <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                <p className="listing-date">{item.text} </p>

                                                            </div>


                                                        </div>
                                                        <div className="listing-gallery-wrapper">
                                                            <h6>{item.author} <br />
                                                                {item.lead}</h6>
                                                            <h6>{item.date}</h6>

                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                }
                                {this.state.tabtype === "iso27001" &&
                                    <div className="">
                                    <div className="row">
                                        {mainslider2.map((item, i) => (

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                <div className="">
                                                    <div className=" portImage ">
                                                        <img
                                                            src={item.img}
                                                            alt="listing"

                                                        />
                                                    </div>

                                                    <div className="listing-body portfoliocontent">
                                                        <div className="listing-author">
                                                            <div className="listing-author-body ">
                                                                <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                <p className="listing-date">{item.text} </p>

                                                            </div>


                                                        </div>
                                                        <div className="listing-gallery-wrapper">
                                                            <h6>{item.author} <br />
                                                                {item.lead}</h6>
                                                            <h6>{item.date}</h6>

                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                }
                                {this.state.tabtype === "soc2" &&
                                    // <div className="listing-thumbnail">
                                    <div className="">
                                    <div className="row">
                                        {mainslider3.map((item, i) => (

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                <div className="">
                                                    <div className=" portImage ">
                                                        <img
                                                            src={item.img}
                                                            alt="listing"

                                                        />
                                                    </div>

                                                    <div className="listing-body portfoliocontent">
                                                        <div className="listing-author">
                                                            <div className="listing-author-body ">
                                                                <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                <p className="listing-date">{item.text} </p>

                                                            </div>


                                                        </div>
                                                        <div className="listing-gallery-wrapper">
                                                            <h6>{item.author} <br />
                                                                {item.lead}</h6>
                                                            <h6>{item.date}</h6>

                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                }
                                {this.state.tabtype === "hipaa" &&
                                     <div className="">
                                     <div className="row">
                                         {mainslider4.map((item, i) => (
 
                                             <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                 <div className="">
                                                     <div className=" portImage ">
                                                         <img
                                                             src={item.img}
                                                             alt="listing"
 
                                                         />
                                                     </div>
 
                                                     <div className="listing-body portfoliocontent">
                                                         <div className="listing-author">
                                                             <div className="listing-author-body ">
                                                                 <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                 <p className="listing-date">{item.text} </p>
 
                                                             </div>
 
 
                                                         </div>
                                                         <div className="listing-gallery-wrapper">
                                                             <h6>{item.author} <br />
                                                                 {item.lead}</h6>
                                                             <h6>{item.date}</h6>
 
                                                         </div>
                                                         <br />
                                                     </div>
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                     </div>
                                }
                                {this.state.tabtype === "nist40053" &&
                                    <div className="">
                                    <div className="row">
                                        {mainslider5.map((item, i) => (

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                <div className="">
                                                    <div className=" portImage ">
                                                        <img
                                                            src={item.img}
                                                            alt="listing"

                                                        />
                                                    </div>

                                                    <div className="listing-body portfoliocontent">
                                                        <div className="listing-author">
                                                            <div className="listing-author-body ">
                                                                <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                <p className="listing-date">{item.text} </p>

                                                            </div>


                                                        </div>
                                                        <div className="listing-gallery-wrapper">
                                                            <h6>{item.author} <br />
                                                                {item.lead}</h6>
                                                            <h6>{item.date}</h6>

                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                }
                                {this.state.tabtype === "csf" &&
                                    <div className="">
                                    <div className="row">
                                        {mainslider6.map((item, i) => (

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                <div className="">
                                                    <div className=" portImage ">
                                                        <img
                                                            src={item.img}
                                                            alt="listing"

                                                        />
                                                    </div>

                                                    <div className="listing-body portfoliocontent">
                                                        <div className="listing-author">
                                                            <div className="listing-author-body ">
                                                                <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                <p className="listing-date">{item.text} </p>

                                                            </div>


                                                        </div>
                                                        <div className="listing-gallery-wrapper">
                                                            <h6>{item.author} <br />
                                                                {item.lead}</h6>
                                                            <h6>{item.date}</h6>

                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                }
                                {this.state.tabtype === "pcidss" &&
                                     <div className="">
                                     <div className="row">
                                         {mainslider7.map((item, i) => (
 
                                             <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                 <div className="">
                                                     <div className=" portImage ">
                                                         <img
                                                             src={item.img}
                                                             alt="listing"
 
                                                         />
                                                     </div>
 
                                                     <div className="listing-body portfoliocontent">
                                                         <div className="listing-author">
                                                             <div className="listing-author-body ">
                                                                 <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                 <p className="listing-date">{item.text} </p>
 
                                                             </div>
 
 
                                                         </div>
                                                         <div className="listing-gallery-wrapper">
                                                             <h6>{item.author} <br />
                                                                 {item.lead}</h6>
                                                             <h6>{item.date}</h6>
 
                                                         </div>
                                                         <br />
                                                     </div>
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                     </div>
                                }
                                {this.state.tabtype === "cistop20" &&
                                    <div className="">
                                    <div className="row">
                                        {mainslider8.map((item, i) => (

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                <div className="">
                                                    <div className=" portImage ">
                                                        <img
                                                            src={item.img}
                                                            alt="listing"

                                                        />
                                                    </div>

                                                    <div className="listing-body portfoliocontent">
                                                        <div className="listing-author">
                                                            <div className="listing-author-body ">
                                                                <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                <p className="listing-date">{item.text} </p>

                                                            </div>


                                                        </div>
                                                        <div className="listing-gallery-wrapper">
                                                            <h6>{item.author} <br />
                                                                {item.lead}</h6>
                                                            <h6>{item.date}</h6>

                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                }
                                {this.state.tabtype === "gdpr" &&
                                     <div className="">
                                     <div className="row">
                                         {mainslider9.map((item, i) => (
 
                                             <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  ">
                                                 <div className="">
                                                     <div className=" portImage ">
                                                         <img
                                                             src={item.img}
                                                             alt="listing"
 
                                                         />
                                                     </div>
 
                                                     <div className="listing-body portfoliocontent">
                                                         <div className="listing-author">
                                                             <div className="listing-author-body ">
                                                                 <h5 className="listing-author-body portfolioheading pt-4"> {item.title} </h5>
                                                                 <p className="listing-date">{item.text} </p>
 
                                                             </div>
 
 
                                                         </div>
                                                         <div className="listing-gallery-wrapper">
                                                             <h6>{item.author} <br />
                                                                 {item.lead}</h6>
                                                             <h6>{item.date}</h6>
 
                                                         </div>
                                                         <br />
                                                     </div>
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                     </div>
                                }
                                </div>


                            </div>
                        </div>
                        {/*  */}



                    {/* gallery end */}

                </div>
            // </div>
            //   </div>
        );
    }
}

export default Listingwrapper;
