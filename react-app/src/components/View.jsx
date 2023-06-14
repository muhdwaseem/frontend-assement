import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios, {} from 'axios'
function View() {
    const { id} = useParams();
    const [view, setview] = useState()

    useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>setview(res.data))


    }, [])
   console.log(view.image);
  return (
    <div>
        <article className='menu-item'>

            {/* <img src={view.image} alt="" srcset=""  style={{width:'200px'}}/> */}
            <div className="item-info">
                <header>
                    <h4>{view.title}</h4>
                    <h4 className="price">
                        {view.price}
                    </h4>
                </header>
                <p className='item-text'>{view.description}</p>
            </div>
            </article>    
    </div>
  )
}

export default View