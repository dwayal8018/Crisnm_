import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../pages/Homethree';
// import Breadcrumb from '../layouts/Breadcrumb';
// import Footer from '../layouts/Footerthree';
import Content from '../sections/about/Content';

class About extends Component {
    render() {
        return (
            <Fragment>
                
                <MetaTags>
                    <title>CRISNM | About </title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                {/* <Header/> */}
                <Content/>
            </Fragment>
        );
    }
}

export default About;