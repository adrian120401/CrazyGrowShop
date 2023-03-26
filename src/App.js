import Header from './Header'; //Include Header
import Footer from './Footer';
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct';
import { ProductsByCategorie } from './ProductsByCategorie';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { InsertProduct } from './InsertProduct';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { db } from './firebaseConfig';
import { useState,useEffect } from 'react';

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
    <div className="App">
      <BrowserRouter basename="/CrazyGrowShop">
        <Header categories={categories}></Header>
          <Routes>
            <Route path="/productos" element={<AllProducts onAction={addProductClick} productos={productos}/>} />
            <Route path="/productos/producto" element={<SingleProduct onAction={addProductClick} />} />
            <Route path="/productos/categoria" element={<ProductsByCategorie productos={productos} onAction={addProductClick}/>} />
            <Route path="/agregarProducto" element={<InsertProduct />} />
          </Routes>
        <Footer products={productsCart}></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;