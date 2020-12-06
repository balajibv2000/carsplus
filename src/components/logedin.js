import React from 'react'
import {Auth} from './auth.js'
import Navbar from "./navbar.component"

export default function logedInNavbar () {
    
    if (Auth.userLoged) {
      return <Navbar user = {Auth.userName} />;
    }
    return <Navbar user = {"Login"} />;
  }