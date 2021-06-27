import React, { Component } from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route path='/products' render={(props) => <Products sortBy='newest' {...props}/>}/>
            <Route path='/posts' component={Posts}/>
            <Route path='/admin' component={Dashboard}/>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

//When using the switch component always order the child components from most specific to least specific. for example if I 
//don't do that and have the home component as that top component only the home component will render and nothing else.
