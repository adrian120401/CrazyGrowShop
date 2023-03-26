import { useState } from 'react';
import Header from './Header'; //Include Header
import Footer from './Footer';
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { InsertProduct } from './InsertProduct';

function App() {
  const [productsCart,setProductsCart] = useState([])

  function addProductClick(){
    const getProductsByLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductsCart(getProductsByLocalStorage)
  }
  return (
    <div className="App">
      <BrowserRouter basename="/CrazyGrowShop">
        <Header></Header>
          <Routes>
            <Route path="/productos" element={<AllProducts onAction={addProductClick}/>} />
            <Route path="/productos/producto" element={<SingleProduct onAction={addProductClick} />} />
            <Route path="/agregarProducto" element={<InsertProduct />} />
          </Routes>
        <Footer products={productsCart}></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;