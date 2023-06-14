import React, { useEffect, useState } from 'react'
import './content.css'
import Categaries from './Categaries'
import axios from 'axios'

import Items from './Items'
function Content({enter}) {
    

const [items, setitems] = useState()
const allcategories =new Set(items&&items.map((item)=>item.category))    
const [category, setcategory] = useState(allcategories)

console.log(allcategories);

useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res=>setitems(res.data))
  }, [])
const filteritems=(category)=>{
   if(category==="all"){
    setitems(items)
    return;
   }
    const newitems=items.filter((item)=>item.category===category)
    setitems(newitems)
}



  return (
  <main>
    <section className='menu section'>
        <div className="title">
           < h2>Products</h2>
           <div className="underline"></div>

        </div>
        <Categaries allcategories={allcategories} filteritems={filteritems}/>
       <Items item={items} enter={enter}  setitems={setitems} />
    </section>  
  </main>
  )
}

export default Content