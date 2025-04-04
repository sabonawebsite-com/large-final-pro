import React, { useContext, useRef, useState } from 'react';  
import emailjs from '@emailjs/browser';  
import{useNavigate} from 'react-router-dom'

import { StoreContext } from '../../context/StoreContext'
import './Myorder.css'

export const ContactUs = () => {  
  const form = useRef();  
  const [statusMessage, setStatusMessage] = useState(''); 
  const{getTotalCartAmount}=useContext(StoreContext)
    const navigate=useNavigate()

  const sendEmail = (e) => {  
    e.preventDefault();  

    emailjs  
      .sendForm('service_uwt63pq', 'template_k28tc5v', form.current, 'wzcCXP_JvhWr3Sgqk')  
      .then(  
        () => {  
          setStatusMessage('Email sent successfully!'); 
        },  
        (error) => {  
          setStatusMessage('Failed to send email: ' + error.text); 
        }  
      );  
  };  

  return (  
    <form ref={form} className='place-order' onSubmit={sendEmail}>  
      <p className="title">Delivery Information</p>  
     <div className="cart-total-modif">  
      <h1> Pay :{getTotalCartAmount()===0?0:getTotalCartAmount()+20} birr : by telebirr on this phone number➡ 0928860911 </h1>
      </div>  
      <div className="place-order-left">  
        <p className="info">Fill This form</p>  
        <div className="multi-fields">  
          <input required name='firstName' type="text" placeholder='First Name' />  
          <input required name='lastName' type="text" placeholder='Last Name' />  
        </div>  
        <input required name='email' type="email" placeholder='Your Email' />  
        <input required name='street' type="text" placeholder='Street' />  
        <div className="multi-fields">  
          <input required name='city' type="text" placeholder='City' />  
          <input required name='state' type="text" placeholder='State' />  
        </div>  
        <div className="multi-fields">  
          <input required name='zipCode' type="text" placeholder='FAN' />  
          <input required name='country' type="text" placeholder='Country' />  
        </div>  
        <input required name='phone' type="tel" placeholder='Phone' />  
        <button type='submit' className='least-button'>SEND➡</button>  
      </div>  
      {statusMessage && <p className="status-message">{statusMessage}</p>} 
      <button onClick={()=>navigate("/distro")} className='button11'>Main Distribution</button> 
    </form>  
  );  
};  

export default ContactUs;  