import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios, {} from 'axios'
function View() {
    const { id} = useParams();
    const [view, setview] = useState([])

    useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>setview(res.data))


    }, [])

  return (
    <div >
    
                    <article  className='menu-item'>
                    <img src="" alt="" srcset=""  style={{width:'200px'}}/>
                      <div className="item-info">
                          <header>
                              <h4></h4>
                              <h4 className="price">
                              
                              </h4>
                          </header>
                          <p className='item-text'></p>
                      </div>
                      </article>    
        
       
    </div>
  )
}

export default View