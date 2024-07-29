import React from 'react'
import Fooditem from '../Fooditem/Fooditem'
import './Foodlist.css';

const Foodlist = ({foodData}) => {
  return (
    <div className="food-list" >
       {foodData.map((food)=>(
      <Fooditem key= {food.idMeal}  food={food}/> /* den här kommer mapa hela foodithem */
     
     ))}
    </div>
  )
}

export default Foodlist


