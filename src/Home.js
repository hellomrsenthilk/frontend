import React from 'react'
import Navbar from './Navbar'


function Home() {  
    return (    
        <div>
            <Navbar></Navbar>
            <div className='bg-primary ' style={{color: "white"}}>Home</div> 
        </div> 
    )
}

export default Home