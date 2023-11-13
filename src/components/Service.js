import React from 'react'
import Appheader from './Appheader'
import Appfooter from './Appfooter'
import Marquee from 'react-fast-marquee'
import "./Service.css"
import { logos,seth_rollins,illustrations,sample_works,wallpapers } from './export'

const Service = () => {
  const section_one = {
    color: "white",
    fontSize: "4rem",
    textAlign: "center",
    flex:"1",
    flexWrap:"wrap",
  }
  

  return (
    <>
      <Appheader/>
      <Marquee direction='right' style={{marginBottom:"2rem"}} speed={150}>
        <span style={{color:"#0075f2",marginRight:"150px",}}>LOGO</span>
        <span style={{color:"#0075f2",marginRight:"150px"}}>VECTOR</span>
        <span style={{color:"#0075f2",marginRight:"150px"}}>ILLUSTRATION</span>
        <span style={{color:"#0075f2",marginRight:"150px"}}>MOCKUPS</span>
        <span style={{color:"#0075f2",marginRight:"150px"}}>MARKETING</span>
      </Marquee>
      <div className={section_one}>
        <div className='logos'>
          <h1 className='h1_marque'>logo-designs</h1>
          <Marquee direction="left" speed={80} pauseOnHover style={{marginBottom:"3rem"}}>
              {logos.map((logo, index) => (
                <div key={index} className="wrapper-class">
                  <img src={logo.image} alt={logo.name} />
                  <p style={{ color: 'white', textAlign:"center" }}>{logo.name}</p>
                  <p style={{ color: 'white', textAlign:"center" }}>{logo.number}</p>
                </div>
              ))}
          </Marquee>
        </div>
        <div className='logos'>
          <h1 className='h1_marque'>Sample Works</h1>
          <Marquee direction="right" speed={80} pauseOnHover style={{marginBottom:"3rem"}}>
              {sample_works.map((works, index) => (
                <div key={index} className="wrapper-class">
                  <img src={works.image} alt={works.name} />
                  <p style={{ color: 'white', textAlign:"center" }}>{works.name}</p>
                  <p style={{ color: 'white', textAlign:"center" }}>{works.number}</p>
                </div>
              ))}
          </Marquee>
        </div>
        <div className='logos'>
          <h1 className='h1_marque'>Personalised Illustrations</h1>
          <Marquee direction="left" speed={50} style={{marginBottom:"3rem"}}>
              {seth_rollins.map((seth, index) => (
                <div key={index} className="wrapper-class">
                  <img src={seth.image} alt={seth.name} />
                  <p style={{ color: 'white', textAlign:"center" }}>{seth.name}</p>
                  <p style={{ color: 'white', textAlign:"center" }}>{seth.number}</p>
                </div>
              ))}
          </Marquee>
        </div>
        <div className='logos'>
          <h1 className='h1_marque'>Webpage Illustrations</h1>
          <Marquee direction="left" speed={150} pauseOnHover style={{marginBottom:"3rem"}}>
              {illustrations.map((illustration, index) => (
                <div key={index} className="wrapper-class">
                  <img src={illustration.image} alt={illustration.name} />
                  <p style={{ color: 'white', textAlign:"center" }}>{illustration.name}</p>
                  <p style={{ color: 'white', textAlign:"center" }}>{illustration.number}</p>
                </div>
              ))}
          </Marquee>
        </div>
        <div className='logos'>
          <h1 className='h1_marque'>Wallpapers</h1>
          <Marquee direction="right" speed={80} pauseOnHover style={{marginBottom:"3rem"}}>
              {wallpapers.map((wall, index) => (
                <div key={index} className="wrapper-class-wall">
                  <img src={wall.image} alt={wall.name} />
                  <p style={{ color: 'white', textAlign:"center" }}>{wall.name}</p>
                  <p style={{ color: 'white', textAlign:"center" }}>{wall.number}</p>
                </div>
              ))}
          </Marquee>
        </div>
      </div>
     
      
      <Appfooter/>
    </>
  )
}

export default Service
