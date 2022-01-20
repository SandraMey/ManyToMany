import React, { useState } from 'react';
import "./carroussel.scss";

export default function Caroussel() {

    const [currentSlide, setCurrentSlide] = useState(0);

      const carrousselDouche = [
        {
          id: 11,
          name: "cabine de douche angulaire transparent",
          price: "257.00€",
          photo: "https://cdn.manomano.com/images/images_products/1571977/T/3581107_1.jpg",
        },
        {
          id: 12,
          name: "Cabine de douche BRIA 100X090CM",
          price: "459.00€",
          photo: "https://cdn.manomano.com/images/images_products/1220812/T/10100883_1.jpg"
        },
        {
          id: 13,
          name: "COLONNE DE DOUCHE",
          price: "279.00€",
          photo: "https://cdn.manomano.com/images/images_products/108283/P/13759619_1.jpg"
        },
        {
          id: 14,
          name: "Cabine hydromassante SELIA ",
          price: "598.00€",
          photo: "https://cdn.manomano.com/images/images_products/1220812/T/18047140_1.jpg"
        },
        {
          id: 15,
          name: "Cabine de douche intégrale Malta",
          price: "849.00€",
          photo: "https://cdn.manomano.com/images/images_products/272965/T/23754064_2.jpg"
        },
      ];

      const handleClick = (way) => {
          way === "left" 
          ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
          : setCurrentSlide(currentSlide<carrousselDouche.length -1 ? currentSlide + 1 : 0)
      }

    return (
        <div className="works" id="works">
            <div 
                className="slider" 
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
            {carrousselDouche.map((d)=>(               
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon}alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                        <button>Add to card</button>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    );
}