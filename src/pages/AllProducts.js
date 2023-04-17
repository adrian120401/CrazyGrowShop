import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner'

function AllProducts({onAction,productos}) {

    const addProductToCart = (product , amount)=> {
        const productsCart = JSON.parse(localStorage.getItem('carrito')) || [];
        if(!productsCart.some((element) => element.id == product.id)){
          product.amount = amount
          product.selectedOption = product.option[0]
          productsCart.push(product)
          localStorage.setItem('carrito', JSON.stringify(productsCart));
          onAction()
          toast.success('El producto se añadió correctamente')
      }else{
          toast.error(`Este producto ya existe`)
      }
    }

    const products = (array) =>{
        return array.map(element => {
            return(
                <div key={element.id} className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                <Link to={{pathname: `/productos/producto/${element.name}`,}}>
                    <img height={240} className="mix-blend-multiply" src={element.img[0]} />
                </Link>
                <figcaption className="pt-2">
                <Toaster richColors/>
                    <a onClick={()=> addProductToCart(element,1)} className="float-end btn btn-light btn-icon"> <i className="fa-solid fa-cart-plus"></i> </a>
                    <strong className="price">${element.price}</strong>
                    <Link className="title text-truncate" to={{pathname: `/productos/producto/${element.name}`,}}>
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
        </div>


    );
}

export default AllProducts;
