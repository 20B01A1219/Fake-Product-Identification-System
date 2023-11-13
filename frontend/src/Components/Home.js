import React from 'react';
import './Home.css';
function Home() {
    return (
        <div className='homepage'>
            <h2 className='heading1'>Make sure you are buying a validate product</h2>
            <h2>Click here to verify your product</h2>
            <button type="button" class="btn btn-danger btn-lg validateproductbtn">Validate Product</button>
        </div>
    );
}

export default Home;