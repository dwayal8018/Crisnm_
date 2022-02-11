import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";

import Content from '../sections/homethree/Content';

class Homethree extends Component {
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
                {/* <Header/> */}
                
                <Content/>
                {/* <Footer/> */}
            </Fragment>
        );
    }
}

export default Homethree;