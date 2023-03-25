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

function App() {
  const [productsCart,setProductsCart] = useState([])
  const [amount,setAmount] = useState(1)

  function addProductClick(num){
    const getProductsByLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductsCart(getProductsByLocalStorage)
    setAmount(num)
  }
  return (
    <div className="App">
      <BrowserRouter basename="/CrazyGrowShop">
        <Header></Header>
          <Routes>
            <Route path="/productos" element={<AllProducts onAction={addProductClick}/>} />
            <Route path="/productos/producto" element={<SingleProduct onAction={addProductClick} />} />
          </Routes>
        <Footer products={productsCart}></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;