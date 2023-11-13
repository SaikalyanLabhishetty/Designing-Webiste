import React, { useState } from 'react'
import Appheader from './Appheader'
import Appfooter from './Appfooter'
import './AppContact.css'
import Message from './message'
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://exqdkxsmucdywsjcozzu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cWRreHNtdWNkeXdzamNvenp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMTc0MTQsImV4cCI6MjAxNDc5MzQxNH0.MMzp4IY3Y1kb0Z6Q7NzDH7jIWgG9NvdhBi0y__YePuY');



const AppContact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }
  
  const [formData,setFormData] = useState({
    Name:"",
    Email:"",
    Phone:"",
    Design:"",
    Design_Reference_Number:"",
    Description:""
  })

  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData)
    try {
      const { data, error } = await supabase.from('contact').insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
        setMessage({
          type: 'error',
          text: 'An error occurred while inserting data.',
        });
      } else {
        console.log('Data inserted successfully:', data);
        setMessage({
          type: 'success',
          text: 'Data inserted successfully!',
        });
        setFormData({
          Name:"",
          Email:"",
          Phone:"",
          Design:"",
          Design_Reference_Number:"",
          Description:""
        });
      }
    } catch (error) {
      console.error('Error handling submit:', error);
    }
  };

  
  return (
    <>
    <Appheader/>
    <div className='Section-1' onSubmit={handleSubmit}>
      {
        isFormOpen ? (
          <form className='form' >
            <button className='close-btn' onClick={closeForm}>X</button>
            {message && <Message message={message} />}
            <h1>How may I help you?</h1><br/>
            <label>Name</label><br/>
            <input 
            type='name' 
            placeholder='name' 
            name='Name'
            value={formData.Name}
            onChange={(e) => setFormData({...formData, Name: e.target.value})}>
            </input>
            <br/>
            <label>Email</label><br/>
            <input 
            type='email' 
            placeholder='email' 
            name='Email'
            value={formData.Email}
            onChange={(e) => setFormData({...formData, Email: e.target.value})}>
            </input>
            <br/>
            <label>Phone Number</label><br/>
            <input 
            type="tel" 
            placeholder='Phone Number' 
            name='Phone'
            value={formData.Phone}
            onChange={(e) => setFormData({...formData, Phone: e.target.value})}>
            </input>
            <br/>
            <label>Design</label><br/>
            <select name='Design' value={formData.Design} onChange={(e) => setFormData({...formData, Design: e.target.value})}>
                <option  >Select</option>
                <option  value="L">Logo</option>
                <option  value="PL">Personalised Illustrations</option>
                <option  value="WL">Webpage Illustrations</option>
            </select>
            <br/>
            <label>Design Reference Number</label><br/>
            <input 
            type="text" 
            placeholder='Reference Number' 
            name='Design_Reference_Number'
            value={formData.Design_Reference_Number}
            onChange={(e) => setFormData({...formData, Design_Reference_Number: e.target.value})}>
            </input>
            <br/>
            <label>Description</label><br/>
            <input 
            type='text' 
            placeholder='Enter Description'
            name="Description"
            value={formData.Description}
            onChange={(e) => setFormData({...formData, Description: e.target.value})}></input>
            <button className='form-btn'>Submit</button>
        </form>
        ) : (
          <button className='open-btn' onClick={openForm}>Stop Looking to My Eyes and Fill the Requirements</button>
        )
      }
    </div>
    <div>
        <video className='video' autoPlay loop>
          <source src="/image/glass.mp4" type="video/mp4" />
          Your browser does not support the video tag.``
        </video>
    </div>
    <Appfooter/>
    </>
  )
}

export default AppContact
