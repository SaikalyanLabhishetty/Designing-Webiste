import React from 'react'
import Appheader from './Appheader'
import Appfooter from './Appfooter'
import { useState } from 'react'
import { images,paragraph,heading } from './export'


const About = () => {

  const [hoverStates, setHoverStates] = useState([false, false, false, false, false, false, false, false, false, false]);

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };
  
  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const column_style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    flexWrap: "wrap",
    margin: "0 0 4.5rem 0",
    padding: "2rem",
    color: "white",
    backgroundColor: "transparent",
    border: "0.1rem solid #2159ff",
    borderRadius: "0.5rem",
  }
  const h_one_style = {
    color: "white",
    textAlign: "center",
    padding: "1rem",
    fontFamily: "Sacramento",
    fontWeight: "50"
  }
  
  const columns = Array.from({ length: 10 }, (_, index) => (
    <div className='column' style={column_style} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
      {hoverStates[index] ? (
        <img
          src={`/image/image_about/${images[index]}`}
          alt="error"
          width="100%"
          height="500"
          className="img-opacity"
        />
      ) : (
        <React.Fragment>
          <h2>{heading[`heading${index + 1}`]}</h2>
          <p>{paragraph[`paragraph${index + 1}`]}</p>
        </React.Fragment>
      )}
    </div>
  ));

  
  return (
    <>
      <Appheader />
      <h1 style={h_one_style}>Here are some cool aspects of eccentricpixel</h1>
        <div className='grid-1'>
        {columns}
      </div>
      <Appfooter />
    </>
  )
}

export default About
