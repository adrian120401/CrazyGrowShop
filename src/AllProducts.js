import { Link } from 'react-router-dom';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { db } from './firebaseConfig';
import { useState,useEffect } from 'react';


function AllProducts({onAction}) {
    const [productos,setProductos] = useState([])
    
    const fetchPost = async () => {
       
        await getDocs(collection(db, "productos"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setProductos(newData);                
                console.log(productos, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])

    const addProductToCart = (product , amount)=> {
        const productsCart = JSON.parse(localStorage.getItem('carrito')) || [];
        if(!productsCart.some((element) => element.id == product.id)){
            product.amount = amount
            product.selectedOption = product.option[0]
            productsCart.push(product)
            localStorage.setItem('carrito', JSON.stringify(productsCart));
            onAction(amount)
        }
    }

    const products = (array) =>{
        return array.map(element => {
            return(
                <div key={element.id} className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                <Link to={{pathname: "/productos/producto",}} state={element}> 
                    <img height="250" className="mix-blend-multiply" src={element.img[0]} /> 
                </Link>
                <figcaption className="pt-2">
                    <a onClick={()=> addProductToCart(element,1)} className="float-end btn btn-light btn-icon"> <i className="fa-solid fa-cart-plus"></i> </a>
                    <strong className="price">${element.price}</strong> 
                    <Link className="title text-truncate" to={{pathname: "/productos/producto",}} state={element}>
                    {element.name}
                    </Link>
                </figcaption>
            </figure>
            </div>
            )
        })
    }

    return (
        <div className="home-section">
          
            <section className="padding-y">
            <div className="container">

                <header className="section-heading">
                    <h3 className="section-title">Productos</h3>
                </header> 

                <div className="row">
                        {products(productos)}
                </div> 
            </div> 
            </section>
            
            <section className="padding-y-sm bg-gray-light">
            <div className="container">
                <div className="row gy-3 align-items-center">
                    <div className="col-md-8">
                    <nav className="float-lg-end">
                        <a className="btn btn-icon btn-light" title="Instagram" target="_blank" href="https://www.instagram.com/crazygrow.uy/"><i className="fab fa-instagram"></i></a>
                    </nav>
                    </div>
                </div> 
            </div>
            </section>
                    
        </div>
      
       
    );
}

export default AllProducts;