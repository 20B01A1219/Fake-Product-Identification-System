import React, {useState} from "react";
import './Addproduct.css';
import qrcode from "qrcode";

function Addproduct(props) {
  const addproduct = async() => {
    try {
        const response = await qrcode.toDataURL(
            `Brand : ${brand}\n  Product id : ${productid}\n Date of manufacturing : ${dom}<br> Price : ${price}\n Product type : ${producttype}`
            );
        setqrimg(response);
      } catch (error) {
        console.log(error);
      }
  };
  const [qrimg, setqrimg] = useState('');
  const [brand, setbrand] = useState('');
  const [productid, setproductid] = useState('');
  const [dom, setdom] = useState('');
  const[price, setprice] = useState('');
  const [producttype, setproducttype] = useState('');
  const updatebrand =(e)=>{
    setbrand(e.target.value);
  }
  const updateproductid = (e) =>{
    setproductid(e.target.value);
  }
  const updatedom = (e) =>{
    setdom(e.target.value);
  }
  const updateprice = (e) =>{
    setprice(e.target.value);
  }
  const updateproducttype = (e) =>{
    setproducttype(e.target.value);
  }
  return (
    <div className="singleproduct">
      <div className="productform">
        <h1>Add Product Details</h1>
        <div className="inputbox">
          <input type="text" placeholder="Enter Product brand" value={brand} onChange={updatebrand} />
        </div>
        <div className="inputbox">
          <input type="text" placeholder="Enter Product Id"  value={productid} onChange={updateproductid}/>
        </div>
        <div className="inputbox">
          <input type="text" placeholder="Enter Date of manufacturing" value={dom} onChange={updatedom}/>
        </div>
        <div className="inputbox">
          <input type="text" placeholder="Enter Price" value = {price} onChange={updateprice}/>
        </div>
        <div className="inputbox">
          <input type="text" placeholder="Enter Type of product" value={producttype} onChange={updateproducttype}/>
        </div>
        <button className="addbtn" onClick={addproduct}>
          Add Product
        </button>
      </div>
      <br />
      {qrimg ? (
        <>
          <img src={qrimg} alt = 'qrcode' />
          <a href={qrimg} download><button>download</button></a>
        </>
      ) : null}
    </div>
  );
}

export default Addproduct;
