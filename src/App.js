import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
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
            <Route path="/products/:id" component={ProductDetails}/>
            <Route path='/products' render={(props) => <Products sortBy='newest' {...props}/>}/>
            <Route path='/posts/:year?/:month?' component={Posts}/>
            <Route path='/admin' component={Dashboard}/>
            <Redirect from='/messages' to='/posts'/>
            <Route path='/not-found' component={NotFound}/> 
            <Route path='/' exact component={Home}/>
            <Redirect to='/not-found' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

//When using the switch component always order the child components from most specific to least specific. for example if I 
//don't do that and have the home component as that top component only the home component will render and nothing else.

//The path paramters in the route prop are required when accessing url's; You can make these paramters optional by appending
// a question mark after it. 

//the Redirect object allows you to redirect users to other components under special conditions. You can accomplish this by 
//giving the redirect components the to prop. In my example I implemented this method twice; the first to render a not found
//page when the url 