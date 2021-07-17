import React from 'react'
import Styles from "./pizza.module.css"

function PizzaCard({data}) {
    return (
        <div className = {Styles.card}>
            <div className = {Styles.bi} style= {{backgroundImage : `url(${data.img_url})`, width : '100%', height : '190px', backgroundSize : 'contain',  backgroundRepeat : 'no-repeat'
            }} > ₹ {data.price}/-</div>
            {/* <img src = {data.img_url}/> */}
            <h3>{data.name}</h3>
            {/* <p><b>Price</b>: ₹ {data.price}/-</p> */}
            <p><b>Rating</b>: {data.rating} / 5</p>
            <p><b>Type</b>: {data.isVeg ? (<p className = {Styles.veg}></p>):(<p className = {Styles.non_veg}></p>)}</p>
            <p><b>Description</b>: <i>"{data.description}".</i></p>



        </div>
    )
}

export default PizzaCard
