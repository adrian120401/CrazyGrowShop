import { useState,useEffect } from 'react';
import { collection,getDocs,query,where } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CCarousel,CCarouselItem,CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { Toaster, toast } from 'sonner'

export function SingleProduct({onAction}) {
    const [producto,setProducto] = useState(null)
    const [amount,setAmount] = useState(1)
    const [option,setOption] = useState("")
    const {name} = useParams()

    const navigate = useNavigate();

    const getProduct = async () => {
        const querySnapshot = await getDocs(
            query(collection(db, "productos"), where("name", "==", name))
          );
        if (!querySnapshot.empty) {
            const product = querySnapshot.docs[0].data();
            product.id = querySnapshot.docs[0].id;
            setProducto(product);
          }
    }
    useEffect(()=>{
        getProduct();
    }, [])



    const addProductToCart = (product , amount)=> {
        const productsCart = JSON.parse(localStorage.getItem('carrito')) || [];
        product.selectedOption = option == '' ? producto.option[0] : option
        if(!productsCart.some((element) => element.id == product.id && element.selectedOption == product.selectedOption)){
            product.amount = amount
            product.id = producto.id
            productsCart.push(product)
            localStorage.setItem('carrito', JSON.stringify(productsCart));
            onAction()
            toast.success('El producto se añadió correctamente')
        }else{
            toast.error(`Este producto ya existe`)
        }
    }

    const options = (options)=>{
        return options.map(option=>{
            return(
                <option key={option}>{option}</option>
            )
        })
    }

    const getCImages = (product) =>{
        return product.img.map(item =>{
            return(
                <CCarouselItem>
                    <CImage className="d-block w-100" src={item} alt="slide 1" />
                </CCarouselItem>
            )
        }
        )
    }

    return (

        <div className="home-section">
            {producto ?
            <section className="padding-y">
                <div className="container">
                <button className="btn btn-light mb-3" onClick={() => navigate(-1)}><i className="fa-solid fa-chevron-left"></i> Volver</button>
                <div className="row">
                <aside className="col-lg-6">
                    <article className="gallery-wrap">
                    <div className="img-big-wrap img-thumbnail">
                       <CCarousel controls indicators dark>
                        {getCImages(producto)}
                       </CCarousel>
                    </div>
                    </article>
                </aside>
                <main className="col-lg-6">
                    <article className="ps-lg-3">
                    <h4 className="title text-dark">{producto.name}</h4>

                    <div className="mb-3">
                        <var className="price h5">${producto.price}</var>
                    </div>
                    <p className='text-secondary'>{producto.description}</p>

                    <div className="row mb-4">
                    {producto.option[0] != "" ? (
                        <div className="col-md-4 col-6 mb-2">
                            <label className="form-label">Opciones</label>
                            <select value={option} onChange={(e)=>setOption(e.target.value)} className="form-select">
                                {options(producto.option)}
                            </select>
                        </div>
                    ):null}
                    <div className="col-md-4 col-6 mb-3">
                    <label className="form-label d-block">Cantidad</label>
                    <div className="input-group input-spinner">
                        <button className="btn btn-icon btn-light" type="button" onClick={()=> {if(amount != 1)setAmount(amount - 1)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z"></path>
                        </svg>
                        </button>
                        <input className="form-control text-center" value={amount}/>
                        <button className="btn btn-icon btn-light" type="button" onClick={()=> setAmount(amount + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                        </button>
                    </div>
                    </div>
                    <span className="text-muted">*Al finalizar la compra puedes personalizar las opciones</span>
                    </div>

                      <Toaster richColors/>
                    <a onClick={()=> addProductToCart(producto,amount)} className="btn  btn-primary"> <i className="me-1 fa fa-shopping-basket"></i> Añadir al carrito </a>
                    <a className="btn  btn-light"> <i className="me-1 fa fa-heart"></i> Favorito </a>

                    </article>
                </main>
                </div>

                </div>
                </section> : <p>Cargando...</p>}
        </div>


    );
}

export default SingleProduct;
