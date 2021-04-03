import React from 'react';
import './Contact.css';
import {Form,Button} from 'react-bootstrap'

function Contact() {
    return (
        <div className="contact">
            <div className="contact_head">
            <h1>CONTACT ME</h1>
            </div>
                    <div className="contact_form">
            <Form>

            <div className="input">
                <h5>Name</h5>
                <input type="text" placeholder="Enter your name" style={{width:'30%'}}/>
            </div>

            <div className="input">
                <h5>E-Mail</h5>
                <input type="e-mail" placeholder="Enter your mail" style={{width:'30%'}}/>
            </div>
            <div className="input">
                <h5>Message</h5>
                <input type="text" placeholder="message" style={{width:'30%',height:'150px'}}/>
            </div>
    


 
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            </div>
          
            </div>
      
    )
}

export default Contact
