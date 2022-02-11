import React, { Component } from 'react';
import globe from '../../../../assets/img/Insight/globe.png'
import graph from '../../../../assets/img/Insight/graph.png'
import down from '../../../../assets/img/Insight/down.png'
import shield from '../../../../assets/img/Insight/shield.png'
import chip from '../../../../assets/img/Insight/chip.png'
import hourglass from '../../../../assets/img/Insight/hourglass.png'
import './CyberInsights.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
  offset:120,
});


const cyberInsightsBlock = [
    {
        id: 1,
        // icon: "star",
        src:globe,
        color:'#45cbad',
        title: "$ 300 Bilion Market",
        text: "Cybersecurity Market Worth Over $300bn by 2024:Global Market Insights,Inc."
    },
    {
        id: 2,
        // icon: "apartment",
        src:graph,
        color:'#fd8b2a',
        title: "Available Resources",
        text: "62% of Cyber Security Teams are under-staffed, 57% Have Unfilled Positions"
    },
    {
        id: 3,
        // icon: "sales-agent",
        src:down,
        color:'#f00000',
        title: "COVID-19 Impact",
        text: "52% of Legal and Compliance Leaders Worry about COVID-19 Related Cybersecurity Risks"
    },
    {
        id: 4,
        // icon: "star",
        src:shield,
        color:'#e000b8',
        title: "Compliance Urgency",
        text: "Data Protection Compliance Programs: 20% Advanced, 0% Optimized"
    },
    {
        id: 5,
        // icon: "apartment",
        src:chip,
        color:'#069bff',
        title: "The Need of AI",
        text: "More than 40% of Privacy Compliance Technologies Anticipate Using AI by 2023"
    },
    {
        id: 6,
        // icon: "sales-agent",
        src:hourglass,
        color:'#d305fe',
        title: "Time to Catch-Up",
        text: "Only 36.7% of Global Oranizations Maintain Full Compliance with PCI DSS"
    }
]

class CyberInsights extends Component {
    render() {
        return (
            <div className="section section-padding infographics-3" data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <div className="col-12  text-center">
                        <h2 className=" text-center insightheading  ">Cyber Insights</h2>
                        <p className=" insightdata text-center ">The biggest threats exist for organizations due to "Lack of" Cyber awareness among employees Adequate security defenses, personnel or resources Visibility of network security and asset management Cyber-related policies and processes or enforcement.</p>
                       
                    </div>
                    
                    <div className="row">
                        {cyberInsightsBlock.map((item, i) => (
                            <div key={i} className="col-lg-6" data-aos="flip-left" data-aos-delay="200">
                                <div className="acr-infographic-item justify-content-center align-items-center">
                                    {/* <i className={"flaticon-" + item.icon + ""} /> */}
                                    <img src={item.src} alt="img" className="imagesinsights "/>
                                    <div className="acr-infographic-item-body p-3">
                                        <h5 className="titleinsights" style={{color:item.color} }>{item.title}</h5>
                                        <p className="textinsights">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default CyberInsights;