import React, { Component } from 'react'
import PizzaCard from './pizzaCard';
import Styles from "./pizza.module.css"
import {Link} from "react-router-dom"
const API_URL = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";

export class Pizza extends Component {
    state = {
        pizzaList : [],
        sortedList : ""
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () =>{
        fetch(API_URL, {method : "GET"})
        .then((data) => data.json())
        .then((res) => this.setState({pizzaList : res}))
        .catch((error) => console.log(error))
    }

    sortPizza = (sortType) => {
        let finalList;
      if(sortType === "price"){
        finalList = this.state.pizzaList.sort((a,b) =>{
                if(a.price < b.price) return -1;
                if(a.price > b.price) return  1;
                return 0;

            }); this.setState({pizzaList : finalList});
        }else if(sortType === "rating"){
            finalList = this.state.pizzaList.sort((a,b) =>{
                    if(b.rating < a.rating) return -1;
                    if(b.rating > a.rating) return  1;
                    return 0;
    
                }); this.setState({pizzaList : finalList});
            }else if(sortType === "reset"){
                finalList = this.state.pizzaList.sort((a,b) =>{
                        if(a.id < b.id) return -1;
                        if(a.id > b.id) return  1;
                        return 0;
        
                    }); this.setState({pizzaList : finalList});
                }
    }

    render() {
        return (
            <div className = {Styles.outer_wrap}>
                <h2>Filter by:</h2>
                <h3>Price: <input type = "radio" name = "sort" onChange = {() => this.sortPizza("price")}/></h3> 
                <h3>Rating: <input type = "radio" name = "sort"  onChange = {() => this.sortPizza("rating")}/></h3> 
                <h3> Reset: <input type = "radio" name = "sort"  onChange = {() => this.sortPizza("reset")}/></h3>

            <div className = {Styles.wrap}>

                {this.state.pizzaList.map((item) => <PizzaCard data = {item} key = {item.id} />)}

            </div>
            <Link to = "/"><button>HOME</button></Link>

            </div>
        )
    }
}

export default Pizza
