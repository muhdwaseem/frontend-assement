import React, { useEffect, useState } from 'react'
import './firstpage.css'
import axios from 'axios'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Content from './components/Content';
function Firstpage() {
  const [items, setitems] = useState()
  const [enter, setenter] = useState()
  
console.log(items);
  return (
    <div className="app">

  
    <div className='navbar'>
        <div className="leftbar">
            <div className="heading">
                SHOPPING
            </div>
            <div className="content">
                <span>Home</span>
                <span>Promo</span>
                <span>About</span>
                <span>Blog</span>
            </div>
            <div className="search">
            <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." onChange={(e)=>setenter(e.target.value)}/>
            </div>

        </div>


           


        <div className="rightbar">
            <div className="right-content">
    <FavoriteBorderOutlinedIcon/>
<ShoppingCartOutlinedIcon/>
<Person2OutlinedIcon/>
<NotificationsOutlinedIcon/>

            </div>
        </div>      

    </div>
    <Content   enter={enter} itemsdata={items}/>
    </div>
  )
}

export default Firstpage