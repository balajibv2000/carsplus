import React from 'react'
import { Link } from 'react-router-dom'
import '../css/productPage.css'


const ProductPageComponet = ({products}) => {
    return (
        <div class="container" style={{marginBottom: "100px"}}>
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img  src={`/img/brands/${products.name}.jpg`} /></div>
						</div>	
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{products.name}</h3>
						<p class="product-description">{products.description}</p>
						<h4 class="price"> Price: <span>{products.price}</span></h4>
						<div class="container">
						<div class="row">
							<div class="col-lg">
								<a href="/payment" class="myButton">Rent Now</a>
							</div>
							<div class="col-lg">
								<a href="/payment" class="myButton">Buy Now</a>
							</div>
						</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default ProductPageComponet
