import { useState } from 'react'

import './App.css'
import Search from './Components/Search/Search'
import Foodlist from './Components/Foodlist/Foodlist'
import Nav from './Components/Nav/Nav'


function App() {
  const[foodData,setFoodData]=useState([])
  

  return (
    <div>
      <div className="background-image"></div>
     <Nav/> 
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Foodlist  foodData={foodData} />
    
    </div>
  )
}

export default App
