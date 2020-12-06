import React from 'react'
import { Link } from 'react-router-dom'
import PageSection from './pageSection'
import '../css/style2.css'


export default class BrandPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {products: [] , filteredProducts: []}
  }

  componentWillMount(){
    fetch("http://localhost:5000/brands").then(res =>res.json())
    .then(data => this.setState({
      products:data,
    }))
  }

  render() {
    this.state.filteredProducts = this.state.products.filter(a => a.brand === this.props.brand)
    console.log(this.state.filteredProducts)

    const BrandItems = this.state.filteredProducts.map(product =>(
      <PageSection 
        img={`/img/brands/${product.name}.jpg`}
        h3={product.name}
        para={product.description}
      />
      ))
    return (
      <div >
        <img src= {`/img/brands/${this.props.brand}.gif`} style={{"width": "100%" , "height": "500px"}}/>
        <img src= {`/img/brandLogo/${this.props.brand}.jpg`} style={{"width": "300px" , "height": "180px"}} />
        <h3 class="product-title">{this.props.brand}</h3>
         {BrandItems}
      </div> 
    )
  }
}
