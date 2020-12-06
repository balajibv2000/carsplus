import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style2.css'


export default class Navbar extends React.Component {
  
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><p className="brand">Cars+</p></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/blog" >Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/buyNow">Buy now</Link>
                    </li>
                    
                    <div className="login-signup">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/user/login">{this.props.user}</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/user/register">Sign Up</Link>
                        </li>
                    </ul>
                    </div>
                </ul>
                </div>
            </nav>
        )
    }
}