import React, { Component, Fragment } from 'react';
import About from '../hometwo/About';
import Counter from './Counter';
import  Commitment from './Commitment';
import "./about.css"
import CyberInsights from './cyberInsights/CyberInsights';

import SaaSPlatform from './SaaSPlatform';
import Portfolio from './Portfolio/Portfolio';


class Content extends Component {
    render() {
        return (
          <Fragment>
            <About />
            <SaaSPlatform />
            <CyberInsights />
            <Commitment/>
            <Portfolio />
            <Counter />
          </Fragment>
        );
    }
}

export default Content;