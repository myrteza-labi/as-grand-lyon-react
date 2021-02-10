import React from 'react'; 
import './HeaderLogo.css'
import './HeaderLogo'; 
import headerLogo from '../images/as-logo.jpg'


function HeaderLogo(){
    return (
        <div className='HeaderLogoContainer'>
            <img className='HeaderLogo' alt='AsGrandLyon logo'src={headerLogo}/>
            <p className='headerLogoCaption'>Espace apporteur</p>
        </div>
    )
}

export default HeaderLogo; 
