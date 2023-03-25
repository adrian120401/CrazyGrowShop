import { useState} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';

export function SingleProduct({onAction}) {
    const location = useLocation();
    const data = location.state || {};
    const navigate = useNavigate();

    const [amount,setAmount] = useState(1)
    const [option,setOption] = useState(data.option[0])



    const addProductToCart = (product , amount)=> {
        const productsCart = JSON.parse(localStorage.getItem('carrito')) || [];
        if(!productsCart.some((element) => element.id == product.id)){
            product.amount = amount
            product.selectedOption = option
            productsCart.push(product)
            localStorage.setItem('carrito', JSON.stringify(productsCart));
            onAction(amount)
        }
    }

    const options = (options)=>{
        return options.map(option=>{
            return(
                <option key={option}>{option}</option>
            )
        })
    }

    return (
        <div className="home-section">
                <section className="padding-y">
                <div className="container">
                <button className="btn btn-light mb-3" onClick={() => navigate(-1)}><i class="fa-solid fa-chevron-left"></i> Volver</button>
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
                    {data.option.length > 0? (
                        <div className="col-md-4 col-6 mb-2">
                                            <label className="form-label">Opciones</label>
                                            <select value={option} onChange={(e)=>setOption(e.target.value)} className="form-select">
                                                {options(data.option)}
                                            </select>
                                            </div> 
                    ):null}
                    <div className="col-md-4 col-6 mb-3">
                    <label className="form-label d-block">Cantidad</label>
                    <div className="input-group input-spinner">
                        <button className="btn btn-icon btn-light" type="button" onClick={()=> {if(amount != 0)setAmount(amount - 1)}}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z"></path>
                        </svg>
                        </button>
                        <input className="form-control text-center" placeholder="" value={amount}/>
                        <button className="btn btn-icon btn-light" type="button" onClick={()=> setAmount(amount + 1)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                        </button>
                    </div> 
                    </div> 
                    <span className="text-muted">*Al finalizar la compra puedes personalizar las opciones</span>
                    </div> 
                
                    <a onClick={()=> addProductToCart(data,amount)} className="btn  btn-primary"> <i className="me-1 fa fa-shopping-basket"></i> Añadir al carrito </a>
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