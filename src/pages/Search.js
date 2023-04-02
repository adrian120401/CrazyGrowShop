import { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { collection,getDocs,query,where } from "firebase/firestore";
import { db } from '../firebaseConfig';

export function Search({onAction}){

    const [productos,setProductos] = useState(null)
    const {param} = useParams()

    const getProducts = async () => {
        const querySnapshot = await getDocs(query(collection(db, "productos"), where("name", ">=", param), where("name", "<=", param + "\uf8ff")));
      
        const foundProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(foundProducts);
      };


    useEffect(()=>{
        getProducts();
    }, [param])

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
        console.log(array)
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
            {productos.length != 0 ?
            <section className="padding-y">
            <div className="container">

                <header className="section-heading">
                    <h3 className="section-title">Resultado: </h3>
                </header> 

                <div className="row">
                        {products(productos)}
                </div> 
            </div> 
            </section>
            : <section className="m-3">
                <header className="section-heading">
                    <h3 className="section-title">No se encontraron resultados :(</h3>
                </header> 
                </section>}
            </div>
        : <p>Cargando ...</p>}    
        </div>
      

    )
}