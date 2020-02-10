import React, { Component } from 'react';
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import { Button } from 'react-bootstrap';

class ProductDetails extends Component {
  render() {
    const { state } = this.props.location
    return (
      <div>
        <NavBar />
        <img src={require("../../assets/logo.svg")} alt="Smiley face" height="150" width="150" />
        <p>Title: {state.title}</p>
        <p>Description: {state.description}</p>
        <p>Price: {state.price}</p>
        <p>Company: {state.company}</p>
        <Button variant="outline-light">Add to cart</Button>
        <br />
        <br />
        <Button variant="outline-light">Buy</Button>
        <Footer />
      </div>
    );
  }
}

export default ProductDetails;