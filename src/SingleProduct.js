import { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';

export function SingleProduct() {
    const [cantidad,setCantidad] = useState(1)

    const location = useLocation();
    const data = location.state || {};

    function addOneProduct(){
        setCantidad(cantidad++)
    }

    return (
        <div className="home-section">
            <Link to={{ pathname: "/"}}>Back</Link>
                <section className="padding-y">
                <div className="container">
                <div className="row">
                <aside className="col-lg-6">
                    <article className="gallery-wrap"> 
                    <div className="img-big-wrap img-thumbnail">
                        <img height="560" src={data.img}/> 
                    </div>
                    </article> 
                </aside>
                <main className="col-lg-6">
                    <article className="ps-lg-3">
                    <h4 className="title text-dark">{data.name}</h4>
                
                    <div className="mb-3"> 
                    <var className="price h5">${data.price}</var> 
                    </div>                
                
                    <div className="row mb-4">
                    <div className="col-md-4 col-6 mb-2">
                    <label className="form-label">Opciones</label>
                    <select className="form-select">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    </div> 
                    <div className="col-md-4 col-6 mb-3">
                    <label className="form-label d-block">Cantidad</label>
                    <div className="input-group input-spinner">
                        <button className="btn btn-icon btn-light" type="button" onClick={()=> {if(cantidad != 0)setCantidad(cantidad - 1)}}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z"></path>
                        </svg>
                        </button>
                        <input className="form-control text-center" placeholder="" value={cantidad}/>
                        <button className="btn btn-icon btn-light" type="button" onClick={()=> setCantidad(cantidad + 1)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                        </button>
                    </div> 
                    </div> 
                    </div> 
                
                    <a className="btn  btn-primary"> <i className="me-1 fa fa-shopping-basket"></i> Añadir al carrito </a>
                    <a className="btn  btn-light"> <i className="me-1 fa fa-heart"></i> Favorito </a>
                    
                    </article> 
                </main> 
                </div> 
                
                </div> 
                </section> 
        </div>
      
       
    );
}

export default SingleProduct;