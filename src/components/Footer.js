import React from "react";
import { Link } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';  
import InstagramIcon from '@mui/icons-material/Instagram';
import './css/Footer.css'

function Footer() {
    const TikTokIcon = ({ color = "#000000" }) => {
        return (
          <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
          </svg>
        );
      };
    return (
        <footer className="container">
            <div className="footerContainer">
                <div className="footerSection">
                    <p className="marginZero footerTitle">About Macro Plate</p>
                    <ul className="footerContent marginZero paddingZero">
                        <li className="">
                            <Link to="/our-approach" className="">Our Approach</Link>
                        </li>
                        <li className="">
                            <Link to="/" className="">Blog</Link>
                        </li>
                    </ul>
                </div>

                <div className="footerSection">
                    <p className="marginZero footerTitle">Ready-to-Eat Meals</p>
                    <ul className="footerContent marginZero paddingZero">
                        <li className="">
                            <Link to="/" className="">Meal Plans</Link>
                        </li>
                        <li className="">
                            <Link to="/how-it-works" className="">How it Works</Link>
                        </li>
                    </ul>
                </div>

                <div className="footerSection">
                    <p className="marginZero footerTitle">Customer Assistance</p>
                    <ul className="footerContent marginZero paddingZero">
                        <li>
                            <a href="tel:18774662276">1 (877) 466 2276</a>
                        </li>
                        <li>
                            <a href="mailto:info@macro-plate.com">info@macro-plate.com</a>
                        </li>
                    </ul>
                </div>

                <div className="footerSection lastSection">
                    <ul className="footerContent marginZero paddingZero">
                        <li><a href="#" className="custAsst">Phone: M-F 8 a.m. to 5 p.m.</a></li>
                        <li><a href="#" className="custAsst">Email: 8 a.m. to 5 p.m., 7 days a week.</a></li>
                    </ul>
                </div>
            </div>

            <div className="socialMediaContainer">
                <ul className="marginZero paddingZero policyContainer">
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">© Copyright <span>2024</span> Macro Plate</a>
                    </li>
                </ul>

                <ul class="socialMediaIcons d-flex justify-content-between marginZero paddingZero">
                    <li><a target="_blank" href="https://www.facebook.com/macroplatedelivery"><FacebookRoundedIcon /></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/macroplate/"><InstagramIcon /></a></li>
                    <li><a target="_blank" href="https://www.tiktok.com/@macroplatedelivery?lang=en"><TikTokIcon /></a></li>
                    <li><a target="_blank" href="https://www.yelp.com/biz/macroplate-los-angeles-4"><i class="fab fa-yelp socialMediaLinks"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
