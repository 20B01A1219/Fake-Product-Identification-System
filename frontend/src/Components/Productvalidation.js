import React, { useState , useEffect} from "react";
import { QrReader } from "react-qr-reader";
import "./Productvalidation.css";
import { Web3 } from "web3";


function Productvalidation(props) {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setaccount] = useState("");

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




  const [validationstate, setvalidationstate] = useState("scanning...");
  const [scannedresult, setscannedresult] = useState(null);
  const [productdetails, setproductdetails] = useState('');

  const getproduct = ()=>{
    contract.methods.getproduct(scannedresult).call().then(result => {
      setproductdetails(result);
  })
  .catch(error => {
      console.log("Error fetching product details:", error);
  });
    

  }



  return (
    <div className="validateproductdiv">
      <div className="qrreader">
        <h1>{validationstate}</h1>
        <QrReader className="cam"
          onResult={(result, error) => {
            if (!!result) {
              setscannedresult(result?.text);
              setvalidationstate("Scanned ✔")
            }
  
           
          }}
          style={{ width: "100%" }}
        />
      </div>
      {scannedresult ? (
          <div className="scannedres">
            <button className = "getdetailsbtn" onClick={getproduct} >GetDetails</button>
           
            <p>{productdetails}</p>
           
          </div>
        ) : <></>}
    </div>
  );
}

export default Productvalidation;
