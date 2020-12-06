import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
    return (
        <div>
            <img src="./img/PAYMENT-SUCCESS.png" style={{"marginLeft": "200px" , "marginRight": "200px"}}/>
            <button className="myButton" style={{"width": "200px"}} type="submit"><Link to="/">Return to Home</Link></button>
        </div>
    )
}

export default  PaymentSuccess