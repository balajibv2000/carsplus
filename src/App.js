import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LogedInNavbar from "./components/logedin"
import Home from "./components/home.component"
import Blog from "./components/blog.component"
import Contact from "./components/contact.component"
import Buy_Now from "./components/buyNow.component"
import Register from "./components/register.component"
import Footer from "./components/footer.component"
import ProductPageComponent from "./components/ProductPage.component"
import BrandPage from "./components/BrandPage.component"
import Login from "./components/login.component"
import Payment from "./components/payment.component"
import rentPayment from "./components/rentpayment.component"
import PaymentSuccess from "./components/paymentSuccessfull"
import Axios from "axios";

const NotFound = () => {
  return (
      <div>
          Nothing to see here
      </div>
  )
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {products: [] , count: []}
  }

  componentWillMount(){
    fetch("http://localhost:5000/brands").then(res =>res.json())
    .then(data => this.setState({
      products:data,
    }))

    fetch("http://localhost:5000/visitors").then(res =>res.json())
    .then(data => this.setState({
      count:data[0].count+1,
    }))
    
  }

  renderProducts = (routerProps) => {
    let productName = routerProps.match.params.name
    let foundProduct = this.state.products.find(productObj => productObj.name === productName)
    return (foundProduct ? <ProductPageComponent products={foundProduct}/> : <NotFound/>)
  }

  renderBrands = (routerPropsBrand) => {
    let brandName = routerPropsBrand.match.params.name
    return (<BrandPage brand={brandName} />)
  }

  
  render(){
    console.log(this.state.count)

    const updatedCount = { "count":this.state.count }

    Axios.post("http://localhost:5000/visitorsUpdate" , updatedCount)

    return (
      <Router>
        
        <Route path="/" exact >
          <LogedInNavbar />
          <Home />
          <Footer visitors = {this.state.count}/>
        </Route>
        <Route path="/blog" >
          <LogedInNavbar />
          <Blog />
          <Footer visitors = {this.state.count}/>
        </Route>
        <Route path="/contact" >
          <LogedInNavbar />
          <Contact />
          <Footer visitors = {this.state.count}/>
        </Route>
        <Route path="/buyNow" >
          <LogedInNavbar />
          <Buy_Now/>
        </Route>
        <Route path="/user/register" component={Register} />
        <Route path="/user/login" component={Login} />
        <Route path="/payment" component={Payment} />
        <Route path="/rentpayment" component={rentPayment} />
        <Route path="/paymentSuccessfull" component={PaymentSuccess} />

        <Route path="/brand">
          <LogedInNavbar />
          <Route path="/brand/:name" render = {routerPropsBrand => this.renderBrands(routerPropsBrand)} />
          <Footer visitors = {this.state.count}/>
        </Route>
        <Route path="/brands">
          <LogedInNavbar />
          <Route path="/brands/:name" render = {routerProps => this.renderProducts(routerProps)} />
          <Footer visitors = {this.state.count}/>
        </Route>
      </Router>


      
    )
  }
}

export default App;
