import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./Productvalidation.css";
function Productvalidation(props) {
  const [validationstate, setvalidationstate] = useState("validating...");
  const [scannedresult, setscannedresult] = useState("");
  return (
    <div className="validateproductdiv">
      <div className="qrreader">
        <h1>{validationstate}</h1>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setscannedresult(result?.text);
              setvalidationstate("validated✔");
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
        <p>{scannedresult}</p>
      </div>
    </div>
  );
}

export default Productvalidation;
