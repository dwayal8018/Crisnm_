
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import agents from '../../../data/agents.json';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
  offset:120,
});

// Change by Dnyaneshwari Wayal
// 1.commented  line 70 {/* <span>{item.post}</span> */}
// 2.In agents.json => Changed star:"true" to star:"false" of id: 1,4,5,6,7

class Agentsslider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        return (
            <div className="section agents" data-aos="fade-up" data-aos-delay="200">
                <div className="container-fluid">
                    <div className="row lapy  align-items-end justify-items-center">
                        <div className="col-6 col-sm-2 order-2 order-sm-1">
                            <div className="section-title-wrap section-header flex-header">

                                <div className="acr-arrows primary-arrows1  ">
                                    <button className=" the-slick-arrow " onClick={this.previous} > <img src="assets/img/crisnm/4/arrow111.png" alt="img" /></button>
                                </div>
                            </div>
                        </div>
                        <div className=" col-12 col-sm-8 order-1   order-sm-2">
                            <Slider className="" ref={c => (this.slider = c)} {...settings}>
                                {/* Agent Start */}
                                {/* this row is making problem in slider to et image properly .so plz try to keep it commented */}
                                {/* <div className="row"> */}
                                {agents.map((item, i) => (
                                    <div key={i} className="col-12">
                                        <div className="acr-agent-thumb">
                                            <div className="laptop" />
                                            <img src={process.env.PUBLIC_URL + "/" + item.img} alt="agent" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                ))}
                                {/* </div> */}
                                {/* Agent End */}
                            </Slider>
                        </div>
                        <div className="col-6 col-sm-2 order-3 order-sm-3 ">
                            <div className="section-title-wrap section-header flex-header">

                                <div className="acr-arrows primary-arrows2">
                                    {/* <i className="slider-prev slick-arrow" onClick={this.previous} /> */}
                                    <button className="the-slick-arrow" onClick={this.next} > <img src="assets/img/crisnm/4/arrow222.png" alt="img" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Agentsslider;