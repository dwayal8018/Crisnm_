import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scroll from '../src/components/pages/Scroll'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
});
// import Header from './Crisnm/Header';
// import Header from './components/layouts/Headerthree';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const About = React.lazy(() => import("./components/pages/About"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Footer = React.lazy(() => import("./components/layouts/Footerthree"));
// import Footer from './components/layouts/FooterThree';





function App() {
  return (

    <Router>
      <Suspense fallback={<div></div>}>
        {/* <Preloader /> */}
        <Scroll showBelow={250} />
        {/* <Header /> */}
        {/* <div id="wrapper">
          <div id="sticky">
            sticky
          </div>
        </div> */}
        {/* <br /> */}

        {/* <div id="wrapper"> */}
          {/* <div id="sticky"> */}
            <Homethree />
          {/* </div> */}
          <About />
          {/* </div> */}
        {/* <div class="extra2"> */}
          <Contact />
        
        {/* </div> */}
        {/* <Footer /> */}
        <Switch>

          {/* <Route exact path="/" component={Homethree} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          {/* <Route path="/footer" component={Footer} /> */}

        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;









// const Home = React.lazy(() => import("./components/pages/Home"));
// const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// const Homefour = React.lazy(() => import("./components/pages/Homefour"));
// const Homefive = React.lazy(() => import("./components/pages/Homefive"));
// Blog
// const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
// const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
// const Blogsingle = React.lazy(() => import("./components/pages/Blogsingle"));
// Pages
// const Services = React.lazy(() => import("./components/pages/Services"));
// const Faq = React.lazy(() => import("./components/pages/Faq"));
// const Pricing = React.lazy(() => import("./components/pages/Pricing"));
// const Contact = React.lazy(() => import("./components/pages/Contact"));
// const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
// const Error = React.lazy(() => import("./components/pages/Error"));
// const Login = React.lazy(() => import("./components/pages/Login"));
// const Register = React.lazy(() => import("./components/pages/Register"));
// const Legal = React.lazy(() => import("./components/pages/Legal"));
// sangram added page
// const Corporate = React.lazy(() => import("./components/pages/Corporate"));

// Listings
// const Listinggrid = React.lazy(() => import("./components/pages/Listinggrid"));
// const Listinglist = React.lazy(() => import("./components/pages/Listinglist"));
// const Listingmap = React.lazy(() => import("./components/pages/Listingmap"));
// const Listingdetailsone = React.lazy(() => import("./components/pages/Listingdetailsone"));
// const Listingdetailstwo = React.lazy(() => import("./components/pages/Listingdetailstwo"));
// const Listingdetailsthree = React.lazy(() => import("./components/pages/Listingdetailsthree"));

// sangram Added
// const Listingdetailsfour = React.lazy(() => import("./components/pages/Listingdetailsfour"));

// const Projectlist = React.lazy(() => import("./components/pages/Projectlist"));




// const Submitlisting = React.lazy(() => import("./components/pages/Submitlisting"));
// const Comparelistings = React.lazy(() => import("./components/pages/Comparelistings"));
// // Agents
// const Agentarchive = React.lazy(() => import("./components/pages/Agentarchive"));
// const Agentdetails = React.lazy(() => import("./components/pages/Agentdetails"));
// const Profile = React.lazy(() => import("./components/pages/Profile"));
// const Profilelistings = React.lazy(() => import("./components/pages/Profilelistings"));
// const Profilesavedlistings = React.lazy(() => import("./components/pages/Profilesavedlistings"));
// // Agency
// const Agencyarchive = React.lazy(() => import("./components/pages/Agencyarchive"));
// const Agencydetails = React.lazy(() => import("./components/pages/Agencydetails"));



{/* <Route path="/services" component={Services} /> */ }
{/* <Route path="/faq" component={Faq} /> */ }
{/* <Route path="/pricing" component={Pricing} /> */ }
{/* <Route path="/coming-soon" component={Comingsoon} /> */ }
{/* <Route path="/error-404" component={Error} /> */ }
{/* <Route path="/login" component={Login} /> */ }
{/* <Route path="/register" component={Register} /><Route path="/listing-map" component={Listingmap} /> */ }
{/* <Route path="/legal" component={Legal} /> */ }

{/* <Route path="/Corporate" component={Corporate} /> */ }



{/* <Route path="/listing-grid" component={Listinggrid} /> */ }
{/* <Route path="/listing-grid" component={Listinggrid} /> */ }
{/* <Route path="/listing-list" component={Listinglist} /> */ }
{/* <Route path="/listing-map" component={Listingmap} /> */ }
{/* <Route path="/listing-details-v1" component={Listingdetailsone} /> */ }
{/* <Route path="/listing-details-v2" component={Listingdetailstwo} /> */ }
{/* <Route path="/listing-details-v3" component={Listingdetailsthree} /> */ }

{/* <Route path="/listing-details-v4" component={Listingdetailsfour} /> */ }

{/* <Route path="/Projects" component={Projectlist} /> */ }

