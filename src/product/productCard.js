import React from 'react'
import Style from "./product.module.css"


function ProductCard({info}) {
    return (
        <div className = {Style.card}>
            <img src={info.image} alt={info.name} />
            <h3>{info.title}</h3>
            <p><b>Price</b>: $ {info.price}</p>
            <p><b>Category</b>: {info.category}</p>

        </div>
    )
}

export default ProductCard
