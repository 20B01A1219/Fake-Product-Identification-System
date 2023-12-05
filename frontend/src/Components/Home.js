import React from "react";
import "./Home.css";
import consumerimg from './consumer.jpg';
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const navigatetovalidatepage = () =>{
    navigate("/validateproduct");
  }
  return (
    <div className="homepage">
      <div className="content">
        <h2>
          Make sure you are buying a validate product
        </h2>
        <h2>Click here to verify your product</h2>
        <button className="homebutton" onClick={navigatetovalidatepage}>
          Validate Product
        </button>
      </div>
      <div className="homeimage">
            <img src={consumerimg} alt="consumerimage" className="homeimg" />
      </div>
    </div>
  );
}

export default Home;
