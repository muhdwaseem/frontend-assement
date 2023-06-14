import { Button } from '@mui/material'
import React, { useState } from 'react'

function Categaries({filteritems,allcategories}) {

console.log(filteritems);

  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={()=>filteritems('all')}>All</button>
      <button className='filter-btn' onClick={()=>filteritems("men's clothing")}>Men</button>
      <button className='filter-btn' onClick={()=>filteritems("jewelery")}>jewelery</button>
      <button className='filter-btn' onClick={()=>filteritems("electronics")}>electronics</button>
      <button className='filter-btn' onClick={()=>filteritems("women's clothing")}>women</button>
      

  
   
       
       

    </div>
  )
}

export default Categaries