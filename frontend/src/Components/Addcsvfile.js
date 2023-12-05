import React from "react";
import addproductimg from "./addproductimg.jpg";
import "./Addcsvfile.css";
function Addcsvfile(props) {
  return (
    <div className="multiplepg">
        <div className="content">
        <h4> Upload CSV file</h4>
        <input type= "file" />
        </div>
        <div className="csvimg">
            <img src= {addproductimg} alt="" />
        </div>
    </div>
  );
}

export default Addcsvfile;
