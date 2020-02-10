import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/User/Login'
import SignUp from './components/User/Signup'
import HomeScreen from './components/Home/HomeScreen'
import EditProfile from './components/User/EditProfile'
import ChangePassword from './components/User/ChangePassword'
import BasePage from './components/Home/BasePage'
import ProductList from './components/Products/ProductList'
import ProductDetails from './components/Products/ProductDetails'
import AddProducts from './components/Products/AddProducts'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={BasePage} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/edit" component={EditProfile} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route path="/add-product" component={AddProducts} />
      </Switch>
    </Router>
  );
}

export default App;
