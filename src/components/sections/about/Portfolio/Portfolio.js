

// Changed by Dnyaneshwari -


import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink, Accordion, Card } from 'react-bootstrap';
import 'magnific-popup'

// import Listingmap from "./Listingmap"

import './Portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init({
    duration:'1200',
    offset:'120'
})

const mainslider1 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }
]
const mainslider2 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    },

]
const mainslider3 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider4 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider5 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider6 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider7 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider8 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae ab praesentium at, voluptatem cumque. Itaque consectetur temporibus molestias aspernatur ipsam maxime provident sit alias.",
        author: "Brein matturro ",
        lead: "Editorial Lead",
        date: "October 5,2021",
    }

]
const mainslider9 = [
    {
        img: "assets/img/crisnm/closeimg.png",
        title: "THE EVOLUTION OF INFOMATION SECURITY AUDITS ",
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
            tabtype: 'all',
            isActive: true,
          
        }
        this.showmoretoggle = this.showmoretoggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onClick1 =(e) => {
        // toggleMe();
        // handleChange();
    }

    toggleMe = (value) => {
        this.setState({
            tabtype: value,
           
        })
        console.log(this.state.isActive)
       
    }

    handleChange = (e) => {
      
        this.setState ({
            isActive: !this.state.isActive,
        })
        console.log(this.state)
    }


    showmoretoggle() {
        this.setState({
            showmore: !this.state.showmore
        })
    }
    componentDidMount() {
       
    };

    render() {
        var {isActive,tabtype}=this.state
    let activeClass = this.state.isActive ? "btn-custom btn-warning-active m-2":" btn-custom btn-warning-outlined m-2";

        const settings2 = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            dots: true
        };
     
        var portfolioButton=[
            {
                name:"All",
                value:"all"
            },
            {
                name:"ISO27001",
                value:"iso27001"
            },{
                name:"SOC-2",
                value:"soc2"
            },{
                name:"HIPAA",
                value:"hipaa"
            },{
                name:"NIST 400-53",
                value:"nist40053"
            },
            {
                name:"CSF",
                value:"csf"
            },{
                name:"PCI DSS",
                value:"PCI DSS"
            },{
                name:"CIS Top 20",
                value:"cistop20"
            },
            {
                name:"GDPR",
                value:"gdpr"
            }
    ]
        return (
            <div className="section listing-wrapper" data-aos="fade-up" data-aos-delay="200">
                <div className=" ">
                    <div className="row m-3" id="modal">
                        {/* gallery start */}
                        {/* <h4 className="col-12 my-4 justify-content-center">Gallery</h4> */}
                        <div class="col-12">
                            <div class="tm-portfolio-buttons text-center">
                                {portfolioButton.map((item)=>{
                                    return(
                                        <button className={tabtype === item.value ? "btn-custom btn-warning-active m-2" : "btn-custom btn-warning-outlined m-2"} onClick={() => this.toggleMe(item.value)}>{item.name}</button>
                                    )
                                })}
                                {/* <button className={tabtype === "all" ? "btn-custom btn-warning-active m-2" : "btn-custom btn-warning-outlined m-2"} onClick={() => this.toggleMe('all')}>All</button>
                                <button className={activeClass} onClick={() => this.toggleMe('iso27001')}>ISO27001</button>
                                <button className={activeClass} onClick={() => this.toggleMe('soc2')}>SOC-2</button>
                                <button className={activeClass} onClick={() => this.toggleMe('hipaa')}>HIPAA</button>
                                <button className={activeClass} onClick={() => this.toggleMe('nist40053')  }>NIST 400-53</button>
                                <button className={activeClass} onClick={() => this.toggleMe('csf') }>CSF</button>
                                <button className={activeClass} onClick={() => this.toggleMe('c')}>PCI DSS</button>
                                <button className={activeClass} onClick={() => this.toggleMe('cistop20') }>CIS Top 20</button>
                                <button className={activeClass} onClick={() => this.toggleMe('gdpr') }>GDPR</button> */}
                              
                            </div>
                        </div>


                    </div>


                    <div className="listing d-flex justify-content-center">
                        {/* <div className="row"> */}
                            <div className=" " >
                                {this.state.tabtype === "all" &&
                                    <div className="abc">
                                    <div className="row">
                                        {mainslider1.map((item, i) => (

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200" >
                                                <div className="" >
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

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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

                                             <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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

                                             <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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

                                            <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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

                                             <div className="col-12 col-sm-6 col-lg-3 portfoliocard m-3  "  data-aos="fade-up" data-aos-delay="200">
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


                        {/* </div> */}
                    </div>
                    {/*  */}



                    {/* gallery end */}

                </div>
            </div>
            //   </div>
        );
    }
}

export default Listingwrapper;





























