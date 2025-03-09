import React from "react";
import './Footer.css'
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const isFormSubmitted = ["Name", "Email", "Phone", "Subject"].every(param => params.has(param));

    var box = null;
    if (!isFormSubmitted) {

        box = (
            <div className="contact-Container">
                <form>
                    <input type="text" id="Name" name="Name" placeholder="Name" required />
                    <input type="email" id="Email" name="Email" placeholder="Email" required />
                    <input type="tel" id="Phone" name="Phone" placeholder="Phone Number" required />
                    <input type="text" id="Subject" name="Subject" placeholder="Subject" required />
                    <textarea name="Message" id="Message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        )

    } else {
        console.log(params.get('Name'))
        box = (
            <div>
                <h4>Thank you {params.get('Name')} for your submission</h4>
                <p><strong>We will back to you as soon as possible! :3</strong></p>
            </div>
        )

    }

    return (
        <div className='footer-Container'>
            <div className="business_InfoContainer">
                <h1>Contact</h1>
                <h2>Address</h2>
                <p><strong>17229 Lemon St</strong></p>
                <p><strong>Hesperia, CA 92345</strong></p>
                <p><strong>Building #16</strong></p>
                <h2>Phone Number</h2>
                <p><strong><a href="tel:+17609814267">(760) 981-4267</a></strong></p>
                <h2>Hours of Operation</h2>
                <p><strong>Mon-Fri: 8am-4pm</strong></p>
                <p><strong>Weekend: Closed</strong></p>
                <a href="http://www.instagram.com/ELITE_SURPLUS_D/">
                    <div className="insta-Icon"></div>
                </a>
                <a href="https://www.facebook.com/EliteSurplusDistributors/">
                    <div className="face-Icon"></div>
                </a>
            </div>
            {box}
        </div>
    )
}

export default Footer