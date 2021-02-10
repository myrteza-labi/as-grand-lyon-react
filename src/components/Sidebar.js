import React from 'react';
import './Sidebar.css'; 
import SidebarTag from './SidebarTag'; 

function Sidebar(props){
    return (
        <div className='Sidebar'>
            {props.children}
        </div>
    )
}

export default Sidebar; 