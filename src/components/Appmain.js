import React, { Fragment } from 'react'
import Typewriter from 'typewriter-effect';
import Marquee from "react-fast-marquee";
import Appheader from './Appheader';
import Appfooter from './Appfooter';
import { useState} from 'react';
import { Info } from './export';
import './Appmain.css'

const Appmain = (props) => {
  const [header,setHeader] = useState("Hello!");
  const [sentence,setSection] = useState("You've come to the perfect destination for design. Discover more about our website.")
  const [quoteIndex, setQuoteIndex] = useState(0);

  const changesentence = (button) => {
    if (button === "sentence1") {
      setHeader("What does the name eccentricpixel mean?");
      setSection("The name eccentricpixel is a combination of two elements, eccentricity and pixel. Eccentricity often denotes something unique, unconventional, or different from the norm.");
    } else if (button === "sentence2") {
      setHeader("What eccentricpixel does?");
      setSection("EccentricPixel is a creative design and branding company that offers a wide range of services. They specialize in designing logos, creating mockups for branding materials.");
    } else if (button === "sentence3") {
      setHeader("What are the benefits of hiring us?");
      setSection("Hiring EccentricPixel offers several advantages for businesses and individuals seeking creative design solutions. First, our team is committed to creating unique, customized, and environmentally friendly designs.");
    }
  };

  
  
    const quotes = [
      " 'The magic you are looking for is in the work you're avoiding!' ",
      " 'In life you'll get 100s of rejections, just you need 1 yes to forget the remaining. So never stop moving on.' ",
      " 'Rejections come the moment we decide to turn our 'one day' into 'day one,' and that is totally okay.' ",
    ];
  
    
  
    const changeQuote = () => {
      // Increment the quote index and loop back to the first quote when it reaches the end
      setQuoteIndex((quoteIndex + 1) % quotes.length);
    }
 
  
  
  return (
    <>
      <Appheader/>
      <div className='section-1'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Crafting excellence, pixel by pixel, with every design.')
            .pauseFor(2500)
            .start();
          }}
        />
      </div>
      <div className='section-2'>
        <p>
        <br></br>
        <Fragment>
        <button type='button'  onClick={() => changesentence ("sentence1")}>What?</button>
        <button type="button"  onClick={() => changesentence ("sentence2")}>How?</button>
        <button type="button"  onClick={() => changesentence ("sentence3")}>Why?</button>
        </Fragment>
        <br></br>
        <h1>{header}</h1>
        {sentence}
        </p>
      </div>

      <div className='section-3'>
        <h3>
          <u>Quotes</u>
        </h3>
        <p >{quotes[quoteIndex]}</p>
        <button type='button' onClick={changeQuote}>→</button>
      </div>

      <div className='section-5'>
        <h3>
          <u>Client Testimonials</u>
        </h3>
       <Marquee direction="left" speed={60} height={100} style={{margin:"0",padding:"0"}}>
        {Info.map((info,index) => (
          <div className='test' key={index.id}>
          <img src={info.image}/>
          <h3>{info.name}</h3>
          <p>{info.para}</p>
        </div>
        ))
        }
       </Marquee>
      </div>
      
      <Appfooter/>
    </>
  )
}
export default Appmain
