import React from 'react'
import Fooditem from '../Fooditem/Fooditem'

const Foodlist = ({foodData}) => {
  return (
    <div>
       {foodData.map((food)=>(
      <Fooditem key= {food.idMeal}  food={food}/> /* den här kommer mapa hela foodithem */
     
     ))}
    </div>
  )
}

export default Foodlist


