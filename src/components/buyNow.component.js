import React from 'react'
import Products from './Products';
import Filter from './Filter';
import '../css/style2.css'


export default class Buy_Now extends React.Component {
    constructor(props){
        super(props);
        this.state = {products: [], filteredProducts: []}
        this.handleChangeSort =this.handleChangeSort.bind(this);
        this.handleChangePrice =this.handleChangePrice.bind(this);
      }

      componentWillMount(){
        fetch("http://localhost:5000/brands").then(res =>res.json())
        .then(data => this.setState({
          products:data,
          filteredProducts:data
        }))
      }

      handleChangeSort(e){
        this.setState({sort: e.target.value});
        this.listProducts();
      }
    
      handleChangePrice(e){
        this.setState({price: e.target.value});
        this.listProducts();
      }
      listProducts(){
        this.setState(state => {
          if(state.sort !== ''){
            state.products.sort((a,b) =>(state.sort ==='lowest')? (a.scale > b.scale?1:-1):(a.scale < b.scale?1:-1))
          }else{
            state.products.sort((a,b) => (a.id < b.id?1:-1));
          }
    
          if(state.price !==''){
            return { filteredProducts: state.products.filter(a=>
              a.priceRange.indexOf(state.price) >= 0
            )}
          }
          return {filteredProducts: state.products};
        })
      }



    render() {
        return (
                <div className="container" style={{"max-width": "1080px"}}>
                  <h3 style={{"fontFamily": 'Goldman'}}>Choose Your Comfort</h3>
                  <hr/>
                  <div className="row">
                    <div className="col-xl-">
                      <Filter price={this.state.price} sort={this.state.sort} handleChangePrice={this.handleChangePrice}
                      handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.lenght} />
                      <hr/>
                      
                    </div>
                  </div>
                  <div className="row" style={{"height": "1000px"}}>
                      <div className="col-xl-">
                        <Products products={this.state.filteredProducts} />
                      </div>
                   </div>
                </div>
        )
    }
}