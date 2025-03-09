import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Carrousel from "../../components/carrousel/Carrousel";
import MainContent from "../../components/mainContent/MainContent";
import "./Auction.css";

const auction_Images = [
    "/images/auctionIMG1.webp",
    "/images/auctionIMG2.webp",
    "/images/auctionIMG3.webp",
    "/images/auctionIMG4.webp",
    "/images/auctionIMG5.webp"
];

const Auction = () => {
    return (
        <Body elements={<>
            <Header />
            <MainContent elements={<>
                <div className="auction-Container">
                    <div className="auction-Content">
                        <div className="auction-Carrousel">
                            <Carrousel images={auction_Images} />
                        </div>
                        <div className="auction-Text">
                            <h2><span className="red-Text">ONLINE ONLY AUCTION</span></h2>
                            <p>
                                The Our Auctions are held online every other Tuesday, and the days to inspect merchandise will be Monday before the auction. Closed Sunday. Auction as normal start at 9:00 AM on the Abamex platform. Below you will see a picture of the Abamex logo please click it to access the auction.
                            </p>
                            <br /><br />
                            <div className="auction-link">
                                <a href="https://www.abamex.com/upcoming-auctions/"><img src="https://www.abamex.com/wp-content/uploads/2016/08/logo-300.png" alt="Abamex Logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>} />
            <Footer />
        </>} />
    );
};

export default Auction;



/*
import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Carrousel from "../../components/carrousel/Carrousel";
import MainContent from "../../components/mainContent/MainContent";
import "./Auction.css";

const auction_Images = [
    "/images/auctionIMG1.webp",
    "/images/auctionIMG2.webp",
    "/images/auctionIMG3.webp",
    "/images/auctionIMG4.webp",
    "/images/auctionIMG5.webp"
];

const Auction = () => {
    return (
        <Body elements={<>
            <Header />
            <MainContent elements={<>
                <div className="auction-Container">
                    <div className="auction-Content">
                        <div className="auction-Carrousel">
                            <Carrousel images={auction_Images} />
                        </div>
                        <div className="auction-Text">
                            <h2><span className="red-Text">ONLINE ONLY AUCTION</span></h2>
                            <p>
                                The Our Auctions are held online every other Tuesday, and the days to inspect merchandise will be Monday before the auction. Closed Sunday. Auction as normal start at 9:00 AM on the Abamex platform. Below you will see a picture of the Abamex logo please click it to access the auction.
                            </p>
                            <br /><br />
                            <div className="auction-link">
                                <a href="https://www.abamex.com/upcoming-auctions/"><img src="https://www.abamex.com/wp-content/uploads/2016/08/logo-300.png" alt="Abamex Logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>} />
            <Footer />
        </>} />
    );
};

export default Auction;
*/