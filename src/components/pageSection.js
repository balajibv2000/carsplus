import React from 'react'
import '../css/style2.css'


export default class PageSection extends React.Component {
    render() {
        return (
            <div className="pageSection">
                <div className="imgFrame" >
                    <img src={this.props.img} style={{ height: "300px" , width: "550px" }} />
                </div>
                <div class="pagePara">
                    <h3>{this.props.h3}</h3>
                    <h2 className="h2class" style={{lineHeight: "43px"}} >{this.props.h2}</h2>
                    <p style={{marginBottom: "25px" }}>{this.props.para}</p>     
                    <a href={`/brands/${this.props.h3}`} class="myButton">Buy Now</a>
                </div>
            </div>
        )
    }
}
