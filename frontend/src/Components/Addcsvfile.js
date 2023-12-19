import React from "react";
import addproductimg from "./addproductimg.jpg";
import "./Addcsvfile.css";
import { ToastContainer, toast } from "react-toastify";

function Addcsvfile(props) {
  const uploadcsv = ()=>{
    toast.success('File Uploaded', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  return (
    <div className="multiplepg">
        <div className="content">
        <h4> Upload CSV file</h4>
        <input type= "file" />
        <button className="uploadcsvbtn" onClick = {uploadcsv}> Uplaod</button>
        </div>
        <div className="csvimg">
            <img src= {addproductimg} alt="" />
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Addcsvfile;
