import React, { Fragment } from 'react';
import Menu from '../layouts/Menu';
import Mobilemenu from '../layouts/Mobilemenu';
import HeaderComponent from '../../helper/Navigationhelper';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Headertwo extends HeaderComponent {
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <Fragment>
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navtoggle })}>
                    <div className="aside-title">
                        <div className="aside-controls aside-trigger">
                            <h4>Menu</h4>
                            <div className="close-btn close-dark" onClick={this.navtoggleClass} >
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.navtoggleClass} />
                {/* Header Start */}
                 <header className={`main-header header-fw can-sticky header-1 ${stickyheader}`}>
                 {/* <header className={`main-header header-fw can-sticky header-1 sticky-header is-sticky`}> */}
                    <nav className="navbar">
                        <div className="container nav-header">
                            {/* Menu */}
                            <Menu />
                            <div className="header-controls">
                                {/* <ul className="header-controls-inner d-none d-lg-flex">
                                    <li>
                                        <Link to="/contact" className="btn-custom primary">Enquiry <i className="fas fa-user" /> </Link>
                                    </li>
                                </ul> */}
                                {/* Toggler */}
                                <div className="aside-toggler aside-trigger" onClick={this.navtoggleClass}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* Header End */}
            </Fragment>
        );
    }
}

export default Headertwo;