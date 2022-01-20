import { React, useState } from "react";
import ButtonChoice from "../ButtonChoice/buton";
import imgplumbing from "../../assets/plumbing.jpg";
import imgtapis from "../../assets/tapis.webp";
import imgfloor from "../../assets/floor.jpg";
import { Link } from "react-router-dom";
import "./work.css";

const Work = () => {
  const [color, setcolor] = useState(true);
  const [color1, setcolor1] = useState(true);
  const [color2, setcolor2] = useState(true);
  const [color3, setcolor3] = useState(true);
  const [color4, setcolor4] = useState(true);
  const [color5, setcolor5] = useState(true);
  console.log(color);
  
  return (
    <main className="work">
      <h1>What type of work is involved?</h1>
      <div className="page">
        <p>2/5</p>
      </div>
      <div className="containerwork">
        <div className="containertitle" onClick ={() => setcolor(!color)}>
          <ButtonChoice
            choice={"faucets"}
            style={`${"faucets"}`}
            linkTo="/work"
            svg={<img src={imgplumbing} alt="" className="imgplumbing"></img>}
          />
          <p className={color ? "titlework" : "hovertitlework"}>Plumbing</p>
        </div>
        <div className="containertitle" onClick ={() => setcolor1(!color1)}>
          <ButtonChoice
            choice={"shower"}
            style={`${"shower"}`}
            linkTo="/work"
            svg={
              <img
                src="https://cdn.manomano.com/images/images_products/3021291/T/15949727_4.jpg"
                alt=""
                className="imgplumbing"
              ></img>
            }
          />
          <p className={color1 ? "titlework" : "hovertitlework"}>Shower</p>
        </div>
        <div className="containertitle" onClick ={() => setcolor2(!color2)}>
          <ButtonChoice
            choice={"SPA"}
            style={`${"SPA"}`}
            linkTo="/work"
            svg={
              <img
                src="https://cdn.manomano.com/images/images_products/435501/T/3792165_1.jpg"
                alt=""
                className="imgplumbing"
              ></img>
            }
          />
          <p className={color2 ? "titlework" : "hovertitlework"}>Baths</p>
        </div>
        <div className="containertitle" onClick ={() => setcolor3(!color3)}>
          <ButtonChoice
            choice={"floor"}
            style={`${"floor"}`}
            linkTo="/work"
            svg={<img src={imgfloor} alt="" className="imgplumbing"></img>}
          />
          <p className={color3 ? "titlework" : "hovertitlework"}>Floor</p>
        </div>
        <div className="containertitle" onClick ={() => setcolor4(!color4)}>
          <ButtonChoice
            choice={"accesories"}
            style={`${"accesories"}`}
            linkTo="/work"
            svg={<img src={imgtapis} alt="" className="imgplumbing"></img>}
          />
          <p className={color4 ? "titlework" : "hovertitlework"}>Acessories</p>
        </div>
        <div className="containertitle" onClick ={() => setcolor5(!color5)}>
          <ButtonChoice
            choice={"wc"}
            style={`${"wc"}`}
            linkTo="/work"
            svg={
              <img
                src="https://cdn.manomano.com/images/images_products/820/T/53683_2.jpg"
                alt=""
                className="imgplumbing"
              ></img>
            }
          />
          <p className={color5 ? "titlework" : "hovertitlework"}>Toilets</p>
        </div>
      </div>
      <div className="buttonconfirm">
        <Link to="/">
          <button className="button">Prev</button>
        </Link>
        <Link to="/deepening">
          <button className="button">Next</button>
        </Link>
      </div>
    </main>
  );
};

export default Work;
