import React, { useState } from 'react'
import axios, {} from 'axios'


import './content.css'
function Items({item,allcategories,enter,setitems}) {
    const delteurl = 'https://fakestoreapi.com/products/'
    const [value, setvalue] = useState(allcategories)

    const deleteitems=(id)=>{
        try {
            setitems(item.filter(val=>val.id!==id))
            const del = axios.delete(delteurl+id).then(res=>res.data).then(data=>console.log(data))
        } catch (error) {
            
        }
    }
  
  return (
    <div className='section-center'>
        {item&&item.filter((val)=>val.title.toLowerCase().includes(enter)).map((val)=>{
            const{id,title,image,description,price} = val
            return(
                <article className='menu-item'>
                <img src={image} alt="" srcset="" style={{width:'200px'}}/>
                <div className="item-info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">{price}</h4>
                    </header>
                    <p className="item-text">{description}</p>
                    <button className='filter-btn' onClick={()=>deleteitems(id)}>Delete</button>
                    <button className='filter-btn'>View</button>
                </div>
                </article>
            )
        })}

    </div>
  )
}

export default Items