import React from 'react'
import '../css/style2.css'
import Axios from "axios";

export default function Footer({visitors}){

    const [usersCount , setCount] = React.useState(0)

    Axios.get("http://localhost:5000/users")
    .then(function (res) {
        setCount(res.data.length)
        console.log(res.data.length);
      })
      .catch(function (err) {
        console.log(err);
      })
     

        return (
            <footer className="footer">
                <div className="Container">
                    <div className="row">
                        <div className="col-6">
                            <h4 style={{"marginTop": "40px" }}>Desgined by</h4>
                            <p style={{"marginBottom": "0" }} >Devprakash &emsp; | &emsp; Bargav N V &emsp; | &emsp; Balaji B V</p>
                            <h4 style={{"marginBottom": "0" }}>{usersCount}</h4> users signed up to our website<br />
                            <h4 style={{"marginBottom": "0" }}>{visitors}</h4> people visited our website
                        </div>
                        <div className="col-6">
                                <p style={{"marginBottom": "0" }}>Follow us</p>
                                <a href="https://www.facebook.com"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                                <a href="https://twitter.com"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                                <a href="https://github.com/balajibv2000/carsplus"><i id="social-git" className="fa fa-github-square fa-3x social"></i></a>
                                <a href="https://www.isntagram.com"><i id="social-ig" className="fa fa-instagram fa-3x social"></i></a>
                                <a href="mailto:balaji.bv2000@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                                <p style={{"marginBottom": "0" }}>© 2020 Terms and Conditions applied.</p>
                            </div>   
                    </div>   
                </div>
            </footer>
        )
    }

