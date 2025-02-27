import React from "react";
import Header from "../../components/header/Header.js";
import Body from "../../components/body/Body.js";
import Footer from "../../components/footer/Footer.js";
import "./Merchandise.css";
import MainContent from "../../components/mainContent/MainContent.js";

function merchandise_finder() {
    const merch = [
        {
            title: "HOME IMPROVEMENT ITEMS AND TOOLS",
            img: "https://static.wixstatic.com/media/a4baa6_5f01108475cb46278cc47322b1d580cc~mv2.jpg/v1/fill/w_272,h_202,al_c,q_80,usm_4.00_1.00_0.00,enc_avif,quality_auto/img1Home%20Improvement%20%26%20Tools%20.jpg",
            href: "/Home-Improvement"
        },
        {
            title: "ONLINE AUCTIONS",
            img: "https://static.wixstatic.com/media/a4baa6_cd044769e1c149b1a1855676cba3c14c~mv2_d_4032_3024_s_4_2.jpeg/v1/fill/w_290,h_202,al_c,q_80,usm_4.00_1.00_0.00,enc_avif,quality_auto/img1Auction%20.jpeg",
            href: "/Auction"
        },
        {
            title: "HOME IMPROVEMENT PALLETS",
            img: "https://static.wixstatic.com/media/a4baa6_7ccc1fa6265442a2b7f1daabb56bf78f~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_288,h_214,al_c,q_80,usm_4.00_1.00_0.00,enc_avif,quality_auto/img1Home%20Improvement%20Pallets%20.jpg",
            href: "/Pallets"
        }
    ]
    return (
        <div className="merchandise-Content">
            {merch.map((content, index) => (
                <div className="merch-Card" key={index}>
                    <a href={content.href}><img className="merch-Item-Img" src={content.img} alt={content.title} /></a>
                    <a href={content.href}><div className="merch-Item-Title">{content.title}</div></a>
                </div>
            ))}
        </div>
    );
}

const Merchandise = () => {
    return (
        <Body elements={<>
            <Header />
            <MainContent elements={<>
                <div className="merchandise-Container">
                    <h1><strong>MERCHANDISE</strong></h1>
                    {merchandise_finder()}
                </div>
            </>} />
            <Footer />
        </>} />
    );
}

export default Merchandise;

/*
                <div className="merchandise-Content">
                    <div className="merch-Card">
                        <a href="/Home-Improvement"><div className="merchCard-Tool"></div></a>
                        <h3><a href="/Home-Improvement">HOME IMPROVEMENT ITEMS AND TOOLS</a></h3>
                    </div>
                    <div className="merch-Card">
                        <a href="/Auction"><div className="merchCard-Auction"></div></a>
                        <h3><a href="/Auction">ONLINE AUCTIONS</a></h3>
                    </div>
                    <div className="merch-Card">
                        <a href="/Pallets"><div className="merchCard-Pallets"></div></a>
                        <h3><a href="/Pallets">HOME IMPROVEMENT PALLETS</a></h3>
                    </div>
                </div>


*/