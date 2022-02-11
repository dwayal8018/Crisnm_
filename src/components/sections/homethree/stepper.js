
import React from 'react'
import "./stepper.css"
import AI from "../../../assets/img/icons/AI.png"
import complience from "../../../assets/img/icons/complience.png"
import discover from "../../../assets/img/icons/discover.png"
import insight from "../../../assets/img/icons/insight.png"
import multiple from "../../../assets/img/icons/multiple.png"
import Risk from "../../../assets/img/icons/Risk.png"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
});
export default function Stepper(props) {
    

    return (
        <div class="rs-features pt-95 ">
            <div class="features-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6 md-mb-70">
                            <div class="features-inner colors1">
                                <div class="number bgcolor1"><img width="50%" src={insight} alt="img"/></div>
                                <div class="features mt-57 aos-init aos-animate" data-aos="fade-up">
                                    {/* <div class="icon-part">
                                        <i class="flaticon-ai-3"></i>
                                    </div> */}
                                    <h4 class="title">Objective Insight</h4>
                                    <h6 className="pt-3">Rigorous incident management, preventivee measures,decision support, bussiness visibility and insights</h6>
                                </div>
                            </div>
                        </div>
                                    {/* <div class="icon-part">
                                        <i class="flaticon-ai-4"></i>
                                    </div> */}
                        {/* <div class="col-lg-3 col-md-4 col-sm-6 md-mb-70">
                            <div class="features-inner colors2">
                                <div class="number bgcolor2"><img width="50%" src={AI}/></div>
                                <div class="features mt-122 md-mt-57 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <h4 class="title">Resilience With AI</h4>
                                </div>
                            </div>
                        </div> */}
                                    {/* <div class="icon-part">
                                        <i class="flaticon-chip"></i>
                                    </div> */}
                        {/* <div class="col-lg-3 col-md-4 col-sm-6 sm-mb-70">
                            <div class="features-inner colors3">
                                <div class="number bgcolor3"><img width="50%" src={Risk}/></div>
                                <div class="features mt-57 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                    <h4 class="title">Risk & Compliance Automation</h4>
                                </div>
                            </div>
                        </div> */}
                        <div class="col-lg-3 col-md-4 col-sm-6 md-mb-70">
                            <div class="features-inner colors4">
                                <div class="number bgcolor4"><img width="50%" src={complience} alt="img"/></div>
                                <div class="features mt-122 md-mt-57 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    {/* <div class="icon-part">
                                        <i class="flaticon-ai-4"></i>
                                    </div> */}
                                    <h4 class="title">Continuous Compliance</h4>
                                    <h6 className="pt-3">Manage complete InfoSec program, Live Securiy dashboard, Continuous tracking and monitoring</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 sm-mb-70">
                            <div class="features-inner colors5">
                                <div class="number bgcolor5"><img width="50%" src={multiple} alt="img"/></div>
                                <div class="features mt-57 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                    {/* <div class="icon-part">
                                        <i class="flaticon-chip"></i>
                                    </div> */}
                                    <h4 class="title">Multiple Control Frameworks</h4>
                                    <h6 className="pt-3">ISo22700, ISO27002, HIPAA, ISO 2700 Suite ISO 9001, NIST 800-53, NIST CSF, PCI DSS, SOC 2, CIS Top 20, CMMC, FFIEC, CATa</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="features-inner colors6">
                                <div class="number bgcolor6"><img width="50%" src={discover} alt="img"/></div>
                                <div class="features mt-122 md-mt-57 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                                    {/* <div class="icon-part">
                                        <i class="flaticon-artificial-intelligence-2"></i>
                                    </div> */}
                                    <h4 class="title">Autonomous Discovery & Response</h4>
                                    <h6 className="pt-3">Automated evidence collection, cross-functional collaboration, progress tracking, automated workflows</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
