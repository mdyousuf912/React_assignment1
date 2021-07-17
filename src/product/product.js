import React, { Component } from 'react'
import ProductCard from './productCard';
import Style from "./product.module.css"
import { Link } from 'react-router-dom';
const API_URL = "https://fakestoreapi.com/products"

export class Product extends Component {
    state = {
        productList : [],
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () =>{
        fetch(API_URL, {method : "GET"})
        .then((data) => data.json())
        .then((res) => this.setState({productList : res}))
        .catch((error) => console.log(error))
    }
    render() {
        return (
            <div>
              <Link to= "/"><button style={{width: "100%" , position: "sticky", top : "0"}}>Return to HOME</button></Link>
            <div className = {Style.template}>
               {this.state.productList.map((i) => <ProductCard info = {i} key = {i.id}/>)}

            </div>

            </div>
        )
    }
}

export default Product
