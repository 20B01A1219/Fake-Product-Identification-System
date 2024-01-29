import React, { useState, useEffect } from "react";
import qrcode from "qrcode";
import "./Addproduct.css";
import FormData from "form-data";
import axios from "axios";
import { Web3 } from "web3";

function Addproduct(props) {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setaccount] = useState("");
  const [hash, sethash] = useState("");
  const [qrimg, setqrimg] = useState("");
  const [brand, setbrand] = useState("");
  const [productid, setproductid] = useState("");
  const [dom, setdom] = useState("");
  const [price, setprice] = useState("");
  const [producttype, setproducttype] = useState("");
  const [transactionstats, settransactionstats] = useState('');

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.send("eth_requestAccounts");
          setaccount(accounts.result[0]);
          const w3 = new Web3(window.ethereum);
          setWeb3(w3);
          const abi = [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_producthash",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_brand",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_productid",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_dom",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_price",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_producttype",
                  type: "string",
                },
              ],
              name: "addproduct",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "producthash",
                  type: "string",
                },
              ],
              name: "getproduct",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "Productlist",
              outputs: [
                {
                  internalType: "string",
                  name: "producthash",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "brand",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "productid",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "dom",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "producttype",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ];
          const address = "0x6c1Ab58a9B9a9562E732ffA2fE7A310e92a4C24c";
          const contractinstance = new w3.eth.Contract(abi, address);
          setContract(contractinstance);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error(
          "No Ethereum provider detected. You should consider trying MetaMask!"
        );
      }
    };

    initWeb3();
  }, []);

  const addproduct = async () => {
    try {
      const response = await qrcode.toDataURL(
        `Brand : ${brand}\n  Product id : ${productid}\n Date of manufacturing : ${dom}\n Price : ${price}\n Product type : ${producttype}`
      );
      setqrimg(response);
      const base64Data = response.split(",")[1];
      const binaryData = atob(base64Data);
      const arrayBuffer = new ArrayBuffer(binaryData.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([uint8Array], { type: "image/png" }); // Change 'image/png' based on the actual image type
      const qrimagefile = new File([blob], `${brand}${productid}`, {
        type: blob.type,
      });

      const formData = new FormData();
      formData.append("file", qrimagefile);
      const API_KEY = process.env.REACT_APP_API_KEY;
      const API_SECRET = process.env.REACT_APP_SECRET_KEY;
      const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

      const ipfsres = await axios.post(url, formData, {
        maxContentLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
          pinata_api_key: API_KEY,
          pinata_secret_api_key: API_SECRET,
        },
      });
      const response2 = await qrcode.toDataURL(`${ipfsres.data.IpfsHash}`);
      sethash(response2);
      try {
        if (contract && account) {
          const trasaction = await contract.methods
            .addproduct(
              ipfsres.data.IpfsHash,
              brand,
              productid,
              dom,
              price,
              producttype
            )
            .send({ from: account });
          console.log(trasaction.transactionHash);
          settransactionstats(trasaction.transactionHash);
          
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatebrand = (e) => {
    setbrand(e.target.value);
  };
  const updateproductid = (e) => {
    setproductid(e.target.value);
  };
  const updatedom = (e) => {
    setdom(e.target.value);
  };
  const updateprice = (e) => {
    setprice(e.target.value);
  };
  const updateproducttype = (e) => {
    setproducttype(e.target.value);
  };
  return (
    <div className="singleproduct">
      <div className="popups">
      {transactionstats?(<>
        <h1 className="successpopup">Product added successfully</h1>
      </>): null}
      </div>
      <div className="productform">
        <h1>Add Product Details</h1>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter Product brand"
            value={brand}
            onChange={updatebrand}
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter Product Id"
            value={productid}
            onChange={updateproductid}
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter Date of manufacturing"
            value={dom}
            onChange={updatedom}
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={updateprice}
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter Type of product"
            value={producttype}
            onChange={updateproducttype}
          />
        </div>
        <button className="addbtn" onClick={addproduct}>
          Add Product
        </button>
      </div>
      <br />
      <div className="qrcode">
        {hash ? (
          <>
            <img className = "hashqrimg" src={hash} alt="qrcode" />
            <a href={hash} download>
              <br /><br />
              <button className="download">download</button>
            </a>
          </>
        ) : null}
      </div>
      
    </div>
  );
}

export default Addproduct;