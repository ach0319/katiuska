import React from "react";
import banner from "../../Components/Images/banner.jpg";
import "../Home/Home.css";
import image01 from "../../Components/Images/image01.jpg";

function Home() {
    return (
        <div className="product-home-page">
            <div 
            className="banner">
                <img src={banner} alt="image of jewelery on bureau"></img>
                <div className="banner-text">
                    <h1>Find your signature piece</h1>
                </div>
            </div>
            <div className="product-list">
               <div className="content-img">
                   <img src={image01}></img>
                   <div className="item-description">
                        Description:<br></br>
                        BEAD SIZE: 6MM OLIVE COLOR GEMSTONE BEADS AND 8 MM BROWN GEMSTONE BEADS<br></br>
                        SIZE: 4 inches<br></br>
                        Price:<br></br>
                        $9.00
                   </div>
                </div> 
            </div>
        </div>
    )
}

export default Home;