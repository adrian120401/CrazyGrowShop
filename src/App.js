import Header from './Header';
import Footer from './Footer';
import Cart from './pages/Cart';
import { Home } from './pages/Home';
import AllProducts from './pages/AllProducts'
import SingleProduct from './pages/SingleProduct';
import { ProductsByCategorie } from './pages/ProductsByCategorie';
import About from './pages/About'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { InsertProduct } from './pages/InsertProduct';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { db } from './firebaseConfig';
import { useState,useEffect } from 'react';
import { Search } from './pages/Search';

function App() {
  const [productsCart,setProductsCart] = useState([])
  const [productos,setProductos] = useState([])
  const [categories,setCategories] = useState([])
    
  const fetchPost = async () => {
     
      await getDocs(collection(db, "productos"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setProductos(newData);
              newData.map(producto =>{
                producto.categories.map(item =>{
                  if(categories.indexOf(item) === -1){
                    categories.push(item)
                }
                })  
              })               
          })
        
     
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])

  function addProductClick(){
    const getProductsByLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductsCart(getProductsByLocalStorage)
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header categories={categories}></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<AllProducts onAction={addProductClick} productos={productos}/>} />
            <Route path="/productos/producto/:name" element={<SingleProduct onAction={addProductClick}/>} />
            <Route path="/productos/categoria/:category" element={<ProductsByCategorie onAction={addProductClick}/>} />
            <Route path="/productos/search/:param" element={<Search onAction={addProductClick}/>} />
            <Route path="/sobreNosotros" element={<About />} />
            <Route path="/agregarProducto" element={<InsertProduct />} />
          </Routes>
        <Cart products={productsCart}></Cart>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;