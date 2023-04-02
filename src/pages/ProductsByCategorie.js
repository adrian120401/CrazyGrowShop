import { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { collection,getDocs,query,where } from "firebase/firestore";
import { db } from '../firebaseConfig';

export function ProductsByCategorie({onAction}){

    const [productos,setProductos] = useState(null)
    const {category} = useParams()

    const getProducts = async () => {
        console.log(category)
        const querySnapshot = await getDocs(query(collection(db, "productos"), where("categories", "array-contains", category)));
      
        const foundProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(foundProducts)
        setProductos(foundProducts);
        console.log(productos)
      };


    useEffect(()=>{
        getProducts();
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
          {productos ?
          <div>
            <section className="padding-y">
            <div className="container">

                <header className="section-heading">
                    <h3 className="section-title">{category}</h3>
                </header> 

                <div className="row">
                        {products(productos)}
                </div> 
            </div> 
            </section>
            
            </div>
        : <p>Cargando ...</p>}    
        </div>
      

    )
}