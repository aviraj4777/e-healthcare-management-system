import React from "react";
import  '../../style/Headerfooter.css';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";

const Footer =()=>{
    return(
        <footer className="sitefooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">At AVA-H, we are driven by a passion for transforming healthcare delivery and making a positive difference in people's lives. Join us on this journey as we reshape the future of healthcare together.</p>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Developers</h6>
              <ul className="footerlinks">
                <li><a href="https://github.com/">Aman Raj</a></li>
                <li><a href="https://github.com/aviraj4777">Aviraj Kumar</a></li>
                <li><a href="https://github.com/RupeshMangalam21">Shivam Raj</a></li>
      
              </ul>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footerlinks">
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#https://github.com/RupeshMangalam21/e-healthcare-management-system">Contribute</a></li>
                <li><a href="#awards">Services</a></li>
                <li><a href="#login">sign In</a></li>
              </ul>
            </div>
          </div>
          <hr/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <p className="copyrighttext">Copyright &copy; 2017 All Rights Reserved by AVA-H
           <a href="#"></a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><FaFacebook/></a></li>
                <li><a className="twitter" href="#"><FaTwitter/></a></li>
                <li><a className="dribbble" href="#"><FaInstagram/></a></li>
                <li><a className="linkedin" href="#"> <FaLinkedin/></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
    );
}
export default Footer;
