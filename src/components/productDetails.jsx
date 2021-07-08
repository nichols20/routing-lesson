import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push('/products')
    //this.props.history.replace('/products')

    /* The two elements above represent an implementation of programmatic navigation. when a user clicks the save button
    on the product details page the method this.props.history.push will send the user to the products page then adds
    the previous page to it's history so that a user can press the back button to return to the previous page visited. 
    the .replace method will replace the previously visited url with prducts page url which will make the user unable
    to return to the previous page visited. This method is useful for login pages so users don't have to go back to a log
    in page after already logging in. */ 

  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;


