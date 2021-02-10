import React from 'react'; 
import './App.css'; 

// COMPONENTS
import Sidebar from './Sidebar';
import Header from './Header'; 
import SidebarTag from './SidebarTag'; 

// IMAGES
import homeTag from '../images/home.png'; 
import userTag from '../images/user.png'; 
import groupTag from '../images/group.png'; 
import productTag from '../images/product.png'; 
import exportTag from '../images/export.png'; 
import likeTag from '../images/like.png'; 
import invoiceTag from '../images/invoice.png'; 
import statsTag from '../images/stats.png'; 
import chatTag from '../images/chat.png'; 


function App(){
    return (
        <div className='App'>
            <Sidebar>
                <SidebarTag className='homeTag' src={homeTag}/>
                <SidebarTag src={userTag}/>
                <SidebarTag src={groupTag}/>
                <SidebarTag src={productTag}/>
                <SidebarTag src={exportTag}/>
                <SidebarTag src={likeTag}/>
                <SidebarTag src={invoiceTag}/>
                <SidebarTag src={statsTag}/>
                <SidebarTag src={chatTag}/>
            </Sidebar>
            <Header/>
        </div>
    )
}

export default App; 