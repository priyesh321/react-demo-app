import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../NavBar'
import axios from "axios";

class AddProducts extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      price: '',
      company: ''
    }
  }

  handleAddProduct = (e) => {
    const { history } = this.props
    const url = "http://localhost:4000/user/create-product"
    const { 
      title,
      description,
      company,
      price
    } = this.state
    const data = { title, description, company, price };
    axios.post(url,
      data
    )
      .then((response) => {
        if (response.status === 200) {
          alert("Product add successfully")
          history.push('/product-list');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
         <NavBar />
        <form className="signin-form" onSubmit={this.handleAddProduct}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => this.setState({ title: e.target.value })}
              className="form-control"
              placeholder="Product Title"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => this.setState({ description: e.target.value })}
              className="form-control"
              placeholder="Product Description"
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              onChange={(e) => this.setState({ price: e.target.value })}
              className="form-control"
              placeholder="Product Price" />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              onChange={(e) => this.setState({ company: e.target.value })}
              className="form-control"
              placeholder="Product Company"
            />
          </div>
          <Button variant="outline-primary" className=" btn-block" onClick={() => this.handleAddProduct()}>Add product</Button>
        </form>
      </div>
    );
  }
}

export default AddProducts;