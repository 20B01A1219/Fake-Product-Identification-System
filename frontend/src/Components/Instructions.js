import React from 'react';
import "./Instructions.css";
function Instructions() {
    return (
        <div className='instructions'>
            <div className="instructionspoints">
                <h4>Instructions for Manufacturers</h4>
                <ul>
                    <li>
                        <p>Make sure to have an account by registering in our website.</p>
                    </li>
                    <li><p>After registering successfully, login to our website.</p></li>
                    <li>
                        <p>
                            you will be navigated to a page for adding products. you can add your products in two ways.
                        </p>
                        <ol>
                            <li>Add multiple products by CSV file</li>
                            <li>Add single product</li>
                        </ol>
                    </li>
                    <li>
<p>                        Choose one among above and add your products.
</p>
                    </li>
                    <li>
                        <p>
                        After successfully adding of your product a Unified Qr code will be generated. you can paste it on your products.
                        </p>
                    </li>
                    <li>
                        <p>
                            The above QR code helps to validate your products by the user which helps to reduce trustworthy problems.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="instructionspoints">
                <h4>Instructions for Customers</h4>
                <ul>
                    <li>
                       <p> Click on the validate option to check whether you are buying the right product.</p>
                    </li>
                    <li>
                        <p>
                            Click on the start camera button and place the product's QR code in front of the camera
                        </p>
                    </li>
                    <li>
                        <p>
                            Our system will check the product and show you whether it is a validate product or fake product.
                        </p>
                    </li>
                </ul>

            </div>
            <div className="instructionspoints">
                <h4>
                    Why should you this System
                </h4>
                <ul>
                    <li>
                        <p>
                            Fake products are the common problem facing by every brand company.
                        </p>
                    </li>
                   
                    <li>
                        <p>
                            This system will helps you to overcome trustworthy problems.
                        </p>
                    </li>
                    <li>
                        <p>
                            This system will helps you to only buy the validate product and save your money.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Instructions;