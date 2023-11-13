import React from 'react'
import AppHeader from './Appheader'
import Appfooter from './Appfooter'
import './AppCareer.css'

const AppCareer = () => {
  return (
    <div>
      <AppHeader/>
      <div className='block'>
        <div className='opening'>
            <p>Currenly we don't have any openings.</p>
        </div>
      </div>
      <Appfooter/>
    </div>
  )
}

export default AppCareer
