import React from "react";
import Header from "../../components/header/Header.js";
import Body from "../../components/body/Body.js";
import MainContent from "../../components/mainContent/MainContent.js";
import Footer from "../../components/footer/Footer.js";
import "./Home.css";

const generateAuctionDates = (startDate, count) => {
    let dates = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < count; i++) {
        dates.push(new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        }).format(currentDate));

        currentDate.setDate(currentDate.getDate() + 14);
    }
    return dates;
};

const auctionDates = generateAuctionDates("2025-02-04", 22);

const Home = () => {
    return (
        <Body elements={
            <>
                <Header />
                <MainContent elements={
                    <>
                        <div className="home-Container">
                            <h1>WELLCOME TO ELITE SURPLUS DISTRIBUTORS</h1>
                            <div className="home-Video">
                                <video controls>
                                    <source src="https://video.wixstatic.com/video/a4baa6_5bf5d8866c34475d848c2643807542d5/480p/mp4/file.mp4" type="video/mp4"/>
                                </video>
                            </div>
                        </div>

                        <div className="home-Info">
                            <h1>ONLINE ONLY AUCTION</h1>
                            <p>
                                Thank you for your patience in this situation. Due to circumstances out of our control, the next Auctions will be online only until further notice. The auction will start at 9:00 AM like usual please log on to, Abamex, the online platform that we use to do your bidding, Auctions are currently every 2 weeks on Tuesday.
                            </p>
                            <div className="auct-Dates">
                                <h2 className="auction-Title">AUCTION DATES</h2>
                                <ul className="auct-DatesList">
                                    {auctionDates.map((date, index) => (
                                        <li key={index}>Online Auction {date}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="reseller-Info">
                                <h1>RESELLERS ONLY</h1>
                                <h2>From now on until further notice our facilities will only sell to resellers only. Elite Surplus Distributors is no longer open to the public only to resellers.</h2>
                            </div>

                            <div className="about-Us">
                                <h1>WHO WE ARE</h1>
                                <p>We conduct sales of various types of store returns, liquidations, and overstock items. Our inventory consists of home improvement items, as well as many brands of tools. Our items are updated once a week, so stock is always changing. We are happy to sell you individual items or multiple pallets.</p>
                                <p>We are open from Monday through Saturday in our Hesperia, CA warehouse.</p>
                                <p>We cater to any resale businesses, large or small, experienced or new. We have no minimum order amount, and a business license is not required to purchase from us. We at Elite Surplus Distributors LLC have 10 years of industry information experience.</p>
                                <p>Customers are welcome to visit our facility, meet us in person, and visually inspect merchandise prior to purchase.</p>
                            </div>

                            <iframe title="the-Map" className="ESD-Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.417296260505!2d-117.28871812396653!3d34.44155357301291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c367c0c2db994f%3A0x4f3d505e9f8a2c17!2sElite%20Surplus%20Distributors%2CLLC!5e0!3m2!1sen!2sus!4v1738617516731!5m2!1sen!2sus" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </>
                } />
                <Footer />
            </>
        } />
    );
};

export default Home;



/*
import React from "react";
import Header from "../../components/header/Header.js";
import Body from "../../components/body/Body.js";
import MainContent from "../../components/mainContent/MainContent.js";
import Footer from "../../components/footer/Footer.js";
import "./Home.css";

const generateAuctionDates = (startDate, count) => {
    let dates = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < count; i++) {
        dates.push(new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        }).format(currentDate));

        currentDate.setDate(currentDate.getDate() + 14);
    }
    return dates;
};

const auctionDates = generateAuctionDates("2025-02-04", 22);

const Home = () => {
    return (
        <Body elements={
            <>
                <Header />
                <MainContent elements={
                    <>
                        <div className="home-Container">
                            <h1>WELLCOME TO ELITE SURPLUS DISTRIBUTORS</h1>
                            <div className="home-Video">
                                <video controls>
                                    <source src="https://video.wixstatic.com/video/a4baa6_5bf5d8866c34475d848c2643807542d5/480p/mp4/file.mp4" type="video/mp4"/>
                                </video>
                            </div>
                        </div>

                        <div className="home-Info">
                            <h1>ONLINE ONLY AUCTION</h1>
                            <p>
                                Thank you for your patience in this situation. Due to circumstances out of our control, the next Auctions will be online only until further notice. The auction will start at 9:00 AM like usual please log on to, Abamex, the online platform that we use to do your bidding, Auctions are currently every 2 weeks on Tuesday.
                            </p>
                            <div className="auct-Dates">
                                <h2 className="auction-Title">AUCTION DATES</h2>
                                <ul className="auct-DatesList">
                                    {auctionDates.map((date, index) => (
                                        <li key={index}>Online Auction {date}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="reseller-Info">
                                <h1>RESELLERS ONLY</h1>
                                <h2>From now on until further notice our facilities will only sell to resellers only. Elite Surplus Distributors is no longer open to the public only to resellers.</h2>
                            </div>

                            <div className="about-Us">
                                <h1>WHO WE ARE</h1>
                                <p>We conduct sales of various types of store returns, liquidations, and overstock items. Our inventory consists of home improvement items, as well as many brands of tools. Our items are updated once a week, so stock is always changing. We are happy to sell you individual items or multiple pallets.</p>
                                <p>We are open from Monday through Saturday in our Hesperia, CA warehouse.</p>
                                <p>We cater to any resale businesses, large or small, experienced or new. We have no minimum order amount, and a business license is not required to purchase from us. We at Elite Surplus Distributors LLC have 10 years of industry information experience.</p>
                                <p>Customers are welcome to visit our facility, meet us in person, and visually inspect merchandise prior to purchase.</p>
                            </div>

                            <iframe title="the-Map" className="ESD-Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.417296260505!2d-117.28871812396653!3d34.44155357301291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c367c0c2db994f%3A0x4f3d505e9f8a2c17!2sElite%20Surplus%20Distributors%2CLLC!5e0!3m2!1sen!2sus!4v1738617516731!5m2!1sen!2sus" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </>
                } />
                <Footer />
            </>
        } />
    );
};

export default Home;

*/