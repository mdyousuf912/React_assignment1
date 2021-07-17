import './App.css';
import Home from "./home/home"
import  Pizza  from './pizza/pizza';
import Product from './product/product';
import {Switch , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/'  component = {Home}/>
        <Route exact path ='/pizza'  component = {Pizza}/>
        <Route exact path ='/product'  component = {Product}/>
        
        {/* <Home />
        <Pizza />
        <Product /> */}
      </Switch>
    </div>
  );
}

export default App;
