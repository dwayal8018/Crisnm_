import React, { Component, Fragment } from 'react';
import Contactform from './Contactform';
// import MetaTags from "react-meta-tags";
// import Contactinfo from './Contactinfo';
// import Email from './Email'

class Content extends Component {
    render() {
        return (
            <Fragment> 
                {/* <MetaTags>
                    <title>CRISNM  | Contact</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> */}
                <Contactform/>
                
            </Fragment>
        );
    }
}

export default Content;