import React from 'react'
import './MainDistro.css'

import {distro} from '../../distro/distro'

const MainDistro = () => {
  

  return (
    <>
    <h1 id='main-text'>Main distribution / Giduugala Raabsaa</h1>
    <div className='main-distro'>
      
       {distro.map((item,index)=>{
        return(
<div key={index} className="display">
    <img src={item.images} alt="" className='image' />
    <p className='name-reg'>{item.region}</p>
    <p className='fees'>Fee/Geejibaa:{item.fees}</p>
    <p className='code'>{item.code}</p>


</div>

        )
            
       })}
      
    </div>
    </>
  )
}

export default MainDistro
