import React from 'react'; 
import './Header.css'; 
import Button from './Button'; 
import HeaderLogo from './HeaderLogo'; 
import TeamMemberBox from './TeamMemberBox'; 
import HeaderTags from './HeaderTags'; 


function Header(props){
    return (
        <div className='Header'>
            <div className='logoAndTeamBoxContainer'>
                <HeaderLogo/>
                <TeamMemberBox/>
            </div>
            <HeaderTags/>
        </div>
    )
}

export default Header; 