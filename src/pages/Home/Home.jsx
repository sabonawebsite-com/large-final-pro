import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/LiveStockDisplay/LiveStockDisplay'
//import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const[category,setCategory]=useState('All')
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
     <FoodDisplay category={category}/>
    {/* //<AppDownload/> */}
    </div>
  )
}

export default Home
