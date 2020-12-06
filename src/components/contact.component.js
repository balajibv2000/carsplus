import React from 'react'
import { Link } from 'react-router-dom'
import { Auth } from './auth.js'
import '../css/style2.css'

export default class Contact extends React.Component {
    render() {

        return (

            <div style={{"marginLeft" : "150px"}}>
				
			
					<div class="col-md-4 col-md-offset-1">
						<h1>Get In Touch</h1>
          
				</div>
        <br /><br />
				<form action="">
					<div class="row" style={{"width" : "1080px"}}>
						<div class="col-md-10 col-md-offset-1">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Name" />
									</div>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Email" />
									</div>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Phone" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
									</div>
									<div class="form-group">
										<input type="submit" class="btn btn-primary btn-md" value="Send Message" />
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</form>
			</div>
        )
    }
}