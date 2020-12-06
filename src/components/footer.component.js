import React from 'react'
import '../css/style2.css'



export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="Container">
                        <h4>Desgined by</h4>
                        <p style={{"marginBottom": "0" }} >Devprakash &emsp; | &emsp; Bargav N V &emsp; | &emsp; Balaji B V</p>
                        <p>Follow us</p>
                        <a href="https://www.facebook.com"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                        <a href="https://twitter.com"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                        <a href="https://github.com/balajibv2000/carsplus"><i id="social-git" className="fa fa-github-square fa-3x social"></i></a>
                        <a href="https://www.isntagram.com"><i id="social-ig" className="fa fa-instagram fa-3x social"></i></a>
                        <a href="mailto:balaji.bv2000@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                        <p>© 2020 Terms and Conditions applied.</p>
                </div>
            </footer>
        )
    }
}

