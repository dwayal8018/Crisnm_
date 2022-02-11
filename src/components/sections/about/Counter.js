import React, { Component } from 'react';
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
        value: "25+",
        title: "Years"
    },
    {
        icon: "sales-agent",
        value: "20+",
        title: "Projects"
    },
    {
        icon: "company",
        value: "5 Lakh",
        title: "SQ.FT. Ongoing"
    },
    {
        icon: "sold",
        value: "7 Lakh",
        title: "SQ.FT. Comming soon"
    }
]

class Counter extends Component {
    render() {
        return (
            <div className="section section-padding  " style={{ backgroundColor: "#45caab" }} data-aos="fade-up" data-aos-delay="200">
                <div className="container scorebutton">
                    <div className="row justify-content-center ">
                        <h3 className="text-center textcount"  >Ask! All About Our Security Offerings <br /> For Cyber Resilience</h3>

                    </div>
                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        {/* style={{ backgroundColor:"#003b80" ,color:"#fff" ,borderRadius:'5px' }} */}
                        <button className=" btn-custom counter counter p-2 px-md-5" style={{ fontWeight: "bold" }} >SEE HOW CRISNM SCORE COULD BENEFIT YOUR BUSINESS</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;