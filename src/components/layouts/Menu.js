import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import {FaAlignRight} from 'react-icons/fa'
import logo from "../../assets/img/misc/logo.png"

class Menu extends Component {
  state={
    isOpen:false
};
handleToggle =() =>{
    this.setState({isOpen:!this.state.isOpen})
}
    render() {
        return (
            <Fragment>
                {/* Logo */}
                {/* <Link className="navbar-brand" to="/"> <img src={process.env.PUBLIC_URL + "/assets/img/logof.png"} alt="logo" /> </Link> */}
               
                <Link className="navbar-brand " to="#home">
                   <img src={process.env.PUBLIC_URL + "/assets/img/crisnm/lg.png"} alt="logo"  style={{ Height:'100%' }} className="logoimg"/>
                    </Link>
                
                
                <ul className="navbar-nav link " style={{color:"#003b80" , fontSize:"10px" , fontFamily:"sans-serif",fontWeight:"100"}}>
                {/* <ul className="navbar-nav link" > */}
                    <li className="menu-item menu-item-has-children">
                        <Link smooth to="#whycrisnm">WHY CRISNM?</Link>
                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link smooth to="#product">PRODUCT</Link>
                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link smooth to="#contact">CONTACT US</Link>
                    </li>
                </ul>
                <button type="submit " className="btn-custom requestbtn warnButton">REQUEST DEMO</button>
                
            </Fragment>
        );
    }
}

export default Menu;



{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">WHY CRISNM? </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">PRODUCT</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">CONTACT US</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">REQUEST NOW</button>
    </form>
  </div>
</nav> */}
