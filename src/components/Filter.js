import React from 'react'
import '../css/style2.css'

export default class Filter extends React.Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-4">
            {this.props.count} Products Found
          </div>
          <div className="col-md-4">
              <label>
                  Order By  
                  <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                    <option value="">Select</option>
                    <option value="lowest">Lowest To Highset</option>
                    <option value="highest">Highest To Lowsest</option>
                  </select>
              </label>
          </div>
          <div className="col-md-4">
             <label>
                Price Range
                <select className="form-control" value={this.props.price} onChange={this.props.handleChangePrice}>
                    <option value="">All</option>
                    <option value="5-20">5 Lakh - 20 Lakh</option>
                    <option value="20-40">20 Lakh - 40 Lakh</option>
                    <option value="40-60">40 Lakh - 60 Lakh</option>
                    <option value="60-80">60 Lakh - 80 Lakh</option>
                    <option value="80-100">80 Lakh - 1 Crore</option>
                    <option value="100-200">1 Crore - 2 Crore</option>
                    <option value="200-300">2 Crore - 3 Crore</option>
                    <option value=">300">3 Crore and Above</option>
                </select>
              </label>
          </div>
        
      </div>
    )
  }
}