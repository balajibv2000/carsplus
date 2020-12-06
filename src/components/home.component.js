import React from 'react'
import { Link } from 'react-router-dom'
import PageSection from "./pageSection"
import Background from '../img/full-width-img-01.png';
import '../css/style2.css'


export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="mid-container">
                    <img className="home-img" src="img/Home_page_img1.jpg" alt="home-img" />

                    <div className="home_hover">
                        <div className="quote"><h1 className="h1class"><br/>PRICE<br/>IS WHAT YOU PAY.</h1>
                            <h1 className="h1class">VALUE<br/>IS WHAT YOU GET.</h1>
                        </div>

                        <div className="cs">
                            <a href="/brands/Maruti%20Vitara-Brezza" className="myButton">Starts<br/>From</a> <strong style={{ verticalAlign: "middle" , fontSize: "50px" , color: "#fff" }} ><em style={{fontStyle: "normal" , fontSize: "30px" , verticalAlign: "top" , lineHeight: "0"}}>Rs.</em>7.34 Lakhs*</strong> 
                        </div>
                    </div>

                </div> 

                <PageSection 
                    img = "img/brands/Audi Q8.jpg"
                    h3 = "Audi Q8"
                    h2 = "HAVE A LOOK ON THIS NEW LAUNCHED AUDI"
                    para = "The Audi Q8 has 1 Petrol Engine on offer. The Petrol engine is 2995 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the Q8 has a mileage of 9.8 kmpl. The Q8 is a 5 seater SUV and has a length of 4986mm, width of 1995mm and a wheelbase of 2995mm."
                />

                <div class="gallery-container">
                    <h2 >Top Charts</h2>
                    <br/>
                        <Link to="/brand/Audi" class="gallery">
                            <img src="img/brandLogo/Audi.jpg" width="750" height="400" />
                            <div class="desc">Audi</div>
                        </Link>
                        <Link to="/brand/Mclaren" class="gallery">
                            <img src="img/brandLogo/McLaren.jpg"width="750" height="400" />
                            <div class="desc">Mclaren</div>
                        </Link>
                        <Link to="/brand/Porsche" class="gallery">
                            <img src="img/brandLogo/Porsche.jpg"width="750" height="400" />
                        <   div class="desc">Porsche</div>
                        </Link>
                        <Link to="/brand/Aston Martin" class="gallery">
                            <img src="img/brandLogo/Aston Martin.jpg"width="750" height="400" />
                            <div class="desc">Aston Martin</div>
                        </Link>
                        <Link to="/brand/Bentley" class="gallery">
                            <img src="img/brandLogo/Bentley.jpg"width="750" height="400" />
                            <div class="desc">Bentley</div>
                        </Link>
                        <Link to="/brand/Bugatti" class="gallery">
                            <img src="img/brandLogo/Bugatti.jpg"width="750" height="400" />
                            <div class="desc">Bugatti</div>
                        </Link>
                </div>

                <div className="pageSection" style={{ background: "#edf0f5" , backgroundImage: `url(${Background})`, backgroundRepeat  : 'no-repeat' , padding: "100px 0 0 0" , height: "700px" , marginTop: "70px" , marginBottom: "70px" }}>
                    <div className="colDiv" style={{float: "right"}}>
                        <div className="colTitle" style={{textAlign: "center"}}>
                            <h3>Browse cars by Brand</h3>
                            <span>We currently have 31 cars available on our Website</span>
                        </div>
                
                        <div class="col" >
                            <ul>
                                <li><Link to="/brand/Audi"><span>Audi</span><small>(3)</small></Link></li>
                                <li><Link to="/brand/Volvo"><span>Volvo</span><small>(5)</small></Link></li>
                                <li><Link to="/brand/Aston Martin"><span>Aston Martin</span><small>(1)</small></Link></li>
                                <li><Link to="/brand/Bently"><span>Bently</span><small>(2)</small></Link></li>
                                <li><Link to="/brand/Rolls Royce"><span>Rolls Royce</span><small>(1)</small></Link></li>
                                <li><Link to="/brand/Jaguar"><span>Jaguar</span><small>(2)</small></Link></li>
                                <li><Link to="/brand/Ferrari"><span>Ferrari</span><small>(2)</small></Link></li>
                                <li><Link to="/brand/McLaren"><span>McLaren</span><small>(1)</small></Link></li>
                                <li><Link to="/brand/Bugatti"><span>Bugatti</span><small>(1)</small></Link></li>
                                <li><Link to="/brand/Mercedes-Benz"><span>Mercedes-Benz</span><small>(2)</small></Link></li>
                                <li><Link to="/brand/Maruti"><span>Maruti</span><small>(6)</small></Link></li>
                                <li><Link to="/brand/Porsche"><span>Porsche</span><small>(3)</small></Link></li>
                                <li><Link to="/brand/Renault"><span>Renault</span><small>(2)</small></Link></li>
                            </ul>
                        </div>
                    </div>   
                </div>

            </div>
        )
    }
}