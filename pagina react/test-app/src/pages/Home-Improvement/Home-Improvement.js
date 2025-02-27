import React from "react";
import "./Home-Improvement.css";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Carrousel from "../../components/carrousel/Carrousel";
import MainContent from "../../components/mainContent/MainContent";

const improvement_Images = [
    "/images/improvementIMG1.webp",
    "/images/improvementIMG2.webp",
    "/images/improvementIMG3.webp"
];

const HomeImprovement = () => {
    return (
        <Body elements={<>
            <Header />
            <MainContent elements={<>
                <div className="improvement-Container">
                    <div className="improvement-Content">
                        <div className="improvement-Carrousel">
                            <h2>Home Improvement & Tools</h2>
                            <Carrousel images={improvement_Images} />
                        </div>
                        <div className="improvement-Text">
                            <h2><span className="red-Text">NEW INVENTORY EVERY WEEK!</span></h2>
                            <p>
                                Our inventory is updating every week! We have tools, grills, doors, ceiling fans, bathroom vanitites and MUCH MORE!
                            </p>
                        </div>
                    </div>
                </div>
            </>} />
            <Footer />
        </>} />
    )

}

export default HomeImprovement;