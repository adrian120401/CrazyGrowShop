import { useState,useEffect } from "react"

function Footer({products}) {
    const [productsCart,setProductsCart] = useState(JSON.parse(localStorage.getItem('carrito')) || [])
    let subTotal = 0
    useEffect(() => {
        if (products.length > 0) {
          setProductsCart(products);
        }
      }, [products]);

    const getProducts = () =>{
        return productsCart.map(element =>{
            subTotal += element.price * element.amount
          return(
            <figure key={element.id} className="itemside mb-4">
            <div className="aside">
                <img src={element.img} className="border img-sm rounded" />
            </div>
            <figcaption className="info">
                <a onClick={()=> deleteProduct(element.id)} className="btn btn-icon btn-light float-end"><i className="fa fa-trash"></i></a>
                <p>{element.name}</p>
                <span className="text-muted">{element.amount} x ${element.price} - {element.selectedOption} </span> <br />
                <strong className="price"> ${element.price * element.amount} </strong>
            </figcaption>
            </figure>)  
        })
        
    }

    const deleteProduct = (id) =>{
        const beforeProducts = JSON.parse(localStorage.getItem('carrito')) || []
        const itemIndex = beforeProducts.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            beforeProducts.splice(itemIndex, 1);
        }
        localStorage.setItem('carrito', JSON.stringify(beforeProducts));
        const afterProducts = JSON.parse(localStorage.getItem('carrito')) || []
        setProductsCart(afterProducts);
    }
    return (
     
       <div className="footer-section">
            <aside className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas_cart">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title">Tu carrito ({productsCart.length}) </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
        
                {getProducts()}
            
                <p className="mb-3 text-center"> Subtotal:  <strong className="text-danger">${subTotal}</strong>  </p>
                <div className="mb-3">
                    <a href="#" className="btn w-100 btn-success">Contactarse</a>
                </div>
                </div> 
            </aside> 
       </div>
      
       
    );
}

export default Footer;