import React from "react";
import "./Pallets.css";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Carrousel from "../../components/carrousel/Carrousel";
import MainContent from "../../components/mainContent/MainContent";

const pallets_Images = [
    "/images/palletsIMG1.webp",
    "/images/palletsIMG2.webp"
];

const Pallets = () => {
    return (
        <Body elements={<>
            <Header />
            <MainContent elements={<>
                <div className="pallets-Container">
                    <div className="pallets-Content">
                        <div className="pallets-Carrousel">
                            <h2>Home Improvement Pallets</h2>
                            <Carrousel images={pallets_Images} />
                        </div>
                    </div>
                </div>
            </>} />
            <Footer />
        </>} />
    )
}

export default Pallets;