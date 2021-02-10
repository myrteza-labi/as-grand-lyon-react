import React from 'react'; 
import './TeamMemberBox.css'; 
import teamMemberPicture from '../images/elon.png'

function TeamMemberBox(){
    return(
        <div className='teamMemberContainer'>
            <img className='TeamMemberPicture'alt='photo membre de lequipe' src={teamMemberPicture}/>
            <div className='teamMemberTextContainer'>
                <p className='teamMemberName'>
                    ELON MUSK
                </p>
                <p className='teamMemberCaption'>
                    As du Grand Lyon
                </p>
            </div>
        </div>

    )
    
}

export default TeamMemberBox; 