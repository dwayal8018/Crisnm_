import React, { Component, Fragment } from 'react';
import Agentsslider from '../home/Agentsslider';
import Banner3 from './Banner3';
import Findhome from './Findhome';
import Whyus from './Whyus';
import MetaTags from "react-meta-tags";
// import About from '../hometwo/About';
// import Counter from '../about/Counter';
// import Commitment from '../about/Commitment';
// import Contactform from '../contact/Contactform';
// import Contact from '../../pages/Contact';
// import Footer from '../../layouts/Footerthree';
import Header from '../../layouts/Headertwo';
import '../about/about.css'
class Content extends Component {
    render() {
        return (
            <Fragment>
                 <MetaTags>
                    <title>CRISNM  | Homepage</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Banner3 />
                <Whyus />
                <Findhome />
                <Agentsslider />
                {/* <About /> */}
                {/* <Commitment /> */}
                {/* <Counter /> */}
                {/* <Contactform/> */}
                {/* <Footer /> */}
            </Fragment>
        );
    }
}

export default Content;