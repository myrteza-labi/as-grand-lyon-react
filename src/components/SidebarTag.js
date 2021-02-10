import React from 'react'; 
import './SidebarTag.css'; 

function SidebarTag(props){
    return (
            <img alt={props.alt} className={'SidebarTag ' + props.className} src={props.src} />
    )
}

export default SidebarTag; 