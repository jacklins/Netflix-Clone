import React, { useState } from 'react'
import './MovieRow.css'
import righticon from '../img/right.png'
import lefticon from "../img/left.png"

export default ({title, items}) =>{
    const[scrollX, setScrollX] = useState(-400)

    const toLeft = ()=>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x>0){
            x=0
        }
        setScrollX(x);
    }

    const toRight = ()=>{
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results?.length * 150;
            if((window.innerWidth - listW) > x ){
                    x = ( window.innerWidth - listW) - 60;
            
        }
        setScrollX(x);
    }
  

    return (
        <div className='movieRow'>
         <h2> {title}</h2>

            <div className='left--icon' onClick={toLeft}> 
        <img className='arrow' src={lefticon} alt="left icon"/> 
            </div>
            <div className='right--icon' onClick={toRight}> 
        <img className='arrow' src={righticon} alt=" right icon"/> 
            </div>
       
            <div className='movieRow--listarea'>

                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results?.length * 150
                  
                }}>

            {items.results?.length > 0 && items.results.map((item, key)=>
            <div key={key} className='movieRow--item'> 
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
            </div>
            )}
                </div>
            </div>
         </div>
    

    )
}