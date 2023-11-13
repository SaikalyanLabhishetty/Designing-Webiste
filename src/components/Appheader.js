import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Appheader.css';
import { Menu,ArrowLeftIcon} from 'lucide-react';


const AppHeader = () => {
    const contact = 'Contact';
    const about = 'About';
    const services = 'Services';
    const career = 'Career';
    const logo = '/image/e_logo.png';
    const style = { width: '12.6rem', height: '4rem'};
    const header_style = { textDecoration: "none", color: "white" };
    const header_style_2 = {textDecoration: "none", color: "white",borderBottom:"0.2rem solid white"}

    const [sidebar,Setsidebar] = useState(false);

    function showSidebar(){
        Setsidebar(true)
    }
    function closeSidebar(){
        Setsidebar(false)
    }

    return (
        <>
            <div className="header">
                <div className='menu-icon' onClick={showSidebar}>
                    <Menu size={40} fill='white'/>
                </div>
                <div className="logo">
                    <Link to='/'>
                        <img style={style} src={logo} alt='Logo'></img>
                    </Link>
                </div>
                <ul className="list">
                    <li>
                        <Link to='/About' style={header_style}>{about}</Link>
                    </li>
                    <li>
                        <Link to='/Service' style={header_style}>{services}</Link>
                    </li>
                    <li>
                    <Link to='/AppCareer' style={header_style}>{career}</Link>
                    </li>
                    <li>
                        <Link to='/AppContact' style={header_style}>{contact}</Link>
                    </li>
                </ul>
            </div>

            {
                sidebar && (
                    <div className='sidebar'>
                        <div className='back' onClick={closeSidebar}>
                        <ArrowLeftIcon size={40}/>
                        </div>
                        <hr style={{ background: "#124E78", height: "5px", border: "none",opacity:"100%"}}/>
                        <ul className="list-2">
                            <li style={header_style_2}>
                                <Link to='/About' style={header_style}>{about}</Link>
                            </li>
                            <li style={header_style_2}>
                                <Link to='/Service' style={header_style}>{services}</Link>
                            </li>
                            <li style={header_style_2}>
                            <Link to='/AppCareer' style={header_style}>{career}</Link>
                            </li>
                            <li style={header_style_2}>
                                <Link to='/AppContact' style={header_style}>{contact}</Link>
                            </li>
                        </ul>
                    </div>
                )
            }
            {sidebar && <div className="back" onClick={closeSidebar}></div>}


            
        </>
    )
}

export default AppHeader;
