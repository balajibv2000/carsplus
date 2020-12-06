import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style2.css'


export default class Products extends React.Component {
  render() {

    const productItems = this.props.products.map(product =>(
      <Link to={`/brands/${product.name}`} >
      <div className="col-md- product" key={product.id}>
        <div classNmae="thumbnail text-center">
            <img src={`/img/brands/${product.name}.jpg`} alt={product.name} style={{"width": "320px" , "height": "180px"}}/>
            <p>
                {product.name}
            </p>
          <div>
            <b>{product.price}</b>
          </div>
        </div>
      </div>
      </Link>
    )   
    )
 
    return (
     
      <div className= "row" style={{"width": "1080px" , "marginLeft": "30px"}}>
         {productItems}
      </div>  
    )
  }
}
