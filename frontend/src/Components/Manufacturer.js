import React from 'react';
import './Manufacturer.css'
import seller from './sellerimage.jpg';
import { useNavigate } from 'react-router-dom';
function Manufacturer() {
    var currentuser  = JSON.parse(localStorage.getItem("currentuser"));
    var displayname = " " +currentuser.name;
    const navigate = useNavigate();
    const multipleproducts =() =>{
        navigate("/addmultipleproducts");
    }
    const singleproduct = () =>{
        navigate("/addsingleproduct");
    }
    return (
        
        <div className='manufacturepage'>
            <div className="content">
            <h5>Welcome {displayname}</h5>
            <p className='manufacturerp'>Choose one of the below options to add your products</p>
            <br />
            <button className="manufacturerbtn" onClick={multipleproducts}>Add multiple products</button>
            <br /><br />
            <button className="manufacturerbtn" onClick={singleproduct}>Add single product</button>
            
            </div>
            <div className="img">
                <img src= {seller} alt=""  className='sellerimg'/>
            </div>
            
        </div>
    );
}

export default Manufacturer;