import React from 'react'; 
import './HeaderTags.css'; 
import Button from './Button'
import filesImg from '../images/file.png'

function HeaderTags(){
    return (
        <div className='HeaderTags'>
            <div className='headerTags2Container'>
            <Button>
                <p>Hello</p>
            </Button>
            <Button>
                <p>Hello</p>
            </Button>
            </div>
            <div className='headerTags2Container'>
            <Button>
                <p>Hello</p>
            </Button>
            <Button>
                <p>Hello</p>
            </Button>
            </div>
            <Button className='soloButton'>
                <img className='imageButton'amt='logo fichier' src={filesImg}/>
            </Button>
        </div>
    )
}

export default HeaderTags; 