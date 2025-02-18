import React from 'react'
import './Contact.css'
// import emailPc from '../../assets/msg-icon.png'
// import emailPc1 from '../../assets/phone-icon.png'
// import emailPc2 from '../../assets/mail-icon.png'
// import emailPc3 from '../../assets/location-icon.png'
import { assets } from '../../assets/assets'
const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  formData.append("access_key", "fb157278-c020-42dd-bd36-1f503b4fd21b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className='contact-col'>
        <h3>Send us message <img src={assets.group1} alt="" /></h3>
        <p>Revolutionizing livestock trading. Our system provides a transparent and efficient way to buy and sell livestock.  Features include detailed animal profiles, secure payment options, and direct communication with buyers for more info👇🏿</p><br />
        <p>Baga Naagaa Gara Gabaa Digitalawaa keenyatti Dhuftan Haaluma Armaan olitti ibsametti Karaa gababa omisha keenya ilaltanii Bitachuu dandessu </p>
        <p>Odeffanno Gahaa Argachuu yoo barbadan Karaalee Armaan gaditti ibsameen nu qunnamaa 👇</p>
        <ul>
          <li> <img src={assets.mail_icon} alt="" />Group4@gmail.com</li>
          <li> <img src={assets.phone_icon} alt="" />0945671967</li>
          <li> <img src={assets.location_icon} alt="" />Borana Yabello  Ethiopia</li>

        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label > Enter Your Name / Maqaa Kee 👇🏻</label>
          <input type="text" name='name' placeholder='Enter your name / Maqaa Kee' required />
          <label >Phone Number / Lakk bilbilaa 👇🏻</label>
          <input type="tel" name='phone' placeholder='phone / lakk bilbilaa kee' required />
          <label >Write message Here / Yaada Kee 👇🏻</label>
          <textarea name='message' rows="6" placeholder='message / yaada kee' required></textarea>
        
          <button type='submit' className='dark-btn'>Send Now➡</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact