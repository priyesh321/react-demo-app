import React, { Component } from 'react';
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import axios from "axios";
import { Table, Button } from 'react-bootstrap';
var ls = require('local-storage');

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      loading:true
    }
  }

  componentDidMount() {
    const { history } = this.props
    const token = ls.get("token")
    if (token !== null) {
      history.push('/product-list')
    }
    this.loadProduct();
  }

  handleDeleteProduct = (id) => {
    const url = `http://localhost:4000/user/delete-product/${id}`
    axios.delete(url)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    const data = this.state.data.filter(item => item._id !== id)
    this.setState({
      data
    })
  }

  goToProductDetail = (id, data) => {
    this.props.history.push("/product-details/" + id, data);
  }

  loadProduct = () => {
    const url = `http://localhost:4000/user/get-product?pageNo=${this.state.page}&size=10`
    axios.get(url)
      .then((response) => {
        const data = response.data.product
        if(data.length === 0) {
          this.setState({
            loading:false
          })
        }
        this.setState({
          data: [...data, ...this.state.data]
        })
      }, (error) => {
        console.log(error);
      });
  }

  handleLoadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.loadProduct();
      }
    );
  };

  render() {
    const { data } = this.state
    return (
      <div>
        <NavBar />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Company</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return <tr key={index}>
                <td style={{ color: 'white' }} >{index + 1}</td>
                <td style={{ color: 'white' }} onClick={() => this.goToProductDetail(item._id, item)}>
                  {item.title}
                </td>
                <td style={{ color: 'white' }}>{item.description}</td>
                <td style={{ color: 'white' }}>{item.company}</td>
                <td style={{ color: 'white' }}>{item.price}</td>
                <td>
                  <Button variant="outline-light" onClick={() => this.handleDeleteProduct(item._id)}>Delete</Button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>
       {this.state.loading &&
        <Button variant="outline-light" onClick={() => this.handleLoadMore()}>Load More</Button>
       }
      </div>
    );
  }
}

export default ProductList;