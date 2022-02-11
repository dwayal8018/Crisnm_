import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from "emailjs-com";
import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
  offset:100,
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const style={
      transition:'all as ease-out',
  }

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneValidator = /^[789]\d{9}$/

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_2q9zbth',
        'template_bm8rxmy',
        e.target,
        "user_jcZ6galSrCY7TeBIFZunC"
    ).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
}


class Contactform extends Component {

    constructor() {
        super()
        this.state = {
            fname: '',
            email: '',
            message: '',
            nameError: '',
            emailError: '',
            isRegistered: false,
            open:false,
            vertical: 'top',
            horizontal: 'center',
            opacity:1,
            scale:1
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleRegister = (e) => {
        e.preventDefault()

        console.log(this.state)

        // vertical: 'top', horizontal: 'center' 

        const formFields = [
            "fname",
            "email",

        ]
        let isValid = true

        formFields.forEach(field => {
            isValid = this.validateField(field) && isValid
        })

        if (isValid)
        {
            emailjs.sendForm(
            'service_ufvcl1z',
            'template_8jvtkea',
            e.target,
            "user_h91WMOPWfJGXJ0CTf9qSd"
        ).then(res => {
            this.setState({
                open:true,
                vertical: 'top',
            horizontal: 'center',
                fname:"",
                email:"",
                message:""
            })
            // console.log(res);
        }).catch(err => console.log(err));
    }

        else{
            this.setState({
                open:false,
            //     vertical: 'top',
            // horizontal: 'center',
            //     fname:"",
            //     email:"",
            //     message:""
            })
        }

        // return this.state.isRegistered

        
      
    }

    validateField = (name) => {
        let isValid = false
        if (name === "fname") isValid = this.validateName()
        else if (name === "email") isValid = this.validateEmail()
        return isValid

    }

    validateName = () => {
        let nameError = ""
        const value = this.state.fname

        if (value.trim() === "") nameError = "Name is Required*"

        this.setState({
            nameError
        })

        return nameError === ""
    }

    validateEmail = () => {
        let emailError = ""
        const value = this.state.email

        if (value.trim() === "") emailError = "Email is Required*"
        else if (!emailValidator.test(value)) emailError = "Email is not Valid"

        this.setState({
            emailError
        })

        return emailError === ""
    }

    // handleClose=(event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    
    //     this.setState({
    //         open:false
    //     })
    //   };


       handleClick = () => () => {
        this.setState({ open: true,  });
      };
    
       handleClose = () => {
        this.setState({  open: false });
      };

    //   buttons = (
    //     <React.Fragment>
    //       <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
    //       {/* <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>
    //       <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
    //         Bottom-Right
    //       </Button>
    //       <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
    //         Bottom-Center
    //       </Button>
    //       <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>
    //       <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Top-Left</Button> */}
    //     </React.Fragment>
    //   );

    render() {
        const {
            fname,
            email,

            message,
            nameError,
            emailError,
            open,
            vertical,
            horizontal,
            isRegistered
        } = this.state

        return (
            
            <div className="section pt-5 contactinuse" id="contact" data-aos="fade-up" data-aos-delay="200">
                <Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Sent Successfully!
                    </Alert>
                </Snackbar>
                {/* <Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert severity="error">This is an error message!
                        All Fields are required!
                    </Alert>
                </Snackbar> */}
            
                <div className="container " style = {{...style,opacity:this.state.opacity , transform:'scale{'+this.state.scale +'}' }} >
                    <div className="row">
                        <div className="col-lg-5  mb-0  mb-lg-30  ">
                            {/* <div className="acr-locations bg-bottom bg-norepeat" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/bldg.png)" }}> */}
                            <div className="acr-locations bg-bottom bg-norepeat "  >
                                <div className="verticle ">
                                    {/* <div className="addresslogo ">

                                        <img src={process.env.PUBLIC_URL + "/assets/img/crisnm/logo.png"} alt="" className="contactImg" />
                                    </div> */}
                                    <div className="row">
                                        {/* <div className="col-sm-6"> */}
                                        <div className="acr-location">

                                            <div className="acr-location-address addrs  " style={{ color: "#595959" }}>

                                                <div className="" style={{ fontSize: '100' }} >#1711,19th Main,HSR Sector 2,<br /> Bengaluru,Karnataka,India,560102
                                                </div>
                                                <div style={{ fontSize: '100' }}><Link to="tel:+123456789">M-  </Link>+91 9739339575</div>
                                                <div style={{ fontSize: '100' }}> <Link to="tel:+123456789">E- </Link>Info@canuminfotech.com</div>
                                                <div className="follow" style={{ fontSize: '100' }}>
                                                    Follow Us On
                                                   <a href="https://instagram.com/canuminfotech1?utm_medium=copy_link"> <img src="/assets/img/crisnm/8/Asset 12.png" alt="img" /></a>
                                                   <a href="https://instagram.com/canuminfotech1?utm_medium=copy_link"><img src="/assets/img/crisnm/8/Asset 32.png" alt="img" /></a>
                                                   <a href="https://instagram.com/canuminfotech1?utm_medium=copy_link"><img src="/assets/img/crisnm/8/Asset 22.png" alt="img" /></a>
                                                   <a href="https://instagram.com/canuminfotech1?utm_medium=copy_link"><img src="/assets/img/crisnm/8/Asset 42.png" alt="img" /></a>

                                                    {/* <span className="social" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/crisnm/8/icon.png)" }}/> */}


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <hr /> */}
                        {/* <div className="verticle"></div> */}

                        {/* {isRegistered ?
                            (
                                <>
                                    <Redirect to="/contact" />

                                    <div className="text-center"><h2> Sent Successfully!</h2>
                                    </div>


                                </>
                            ) : ( */}


                                <div className="col-lg-7 pt-0 pt-md-5">
                                    {/* <div> */}
                                    <div className="section-title-wrap section-header">

                                        <p className="contacttext">We are online 24/7 round the clock.Please get in touch by completing the contact form below.</p>
                                    </div>
                                    <div className="message-form">
                                        <form onSubmit={this.handleRegister}>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    {/* <label>Name</label> */}
                                                    <input type="text" className="form-control" placeholder="NAME" name="fname" value={fname}
                                                        onChange={this.handleChange} />
                                                    {nameError && (
                                                        <div className="errorMsg text-danger "  >{nameError}</div>)}
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={this.handleChange} />

                                                    {emailError && (
                                                        <div className="errorMsg text-danger"  >{emailError}</div>
                                                    )}
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    {/* <label>Your Message</label> */}
                                                    <textarea className="form-control" placeholder="MESSAGE" name="message" value={message}
                                                        onChange={this.handleChange} rows={4} />
                                                </div>
                                            </div>
                                            {/* <div className="send"> */}

                                            <button type="submit" className="  warnButton send" >SEND MESSAGE</button>
                                            {/* </div> */}
                                        </form>
                                    </div>
                                    {/* </div> */}
                                </div>

                            {/* )} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;