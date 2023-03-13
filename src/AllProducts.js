
const productos = [
    {
        "id":1,
        "name":"Desmorrugador Metal 4 partes",
        "price": 1000,
        "img":"https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg",
    },
    {
        "id":2,
        "name":"Desmorrugador Metal 4 partes",
        "price": 1000,
        "img":"https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg",
    },
    {
        "id":3,
        "name":"Desmorrugador Metal 4 partes",
        "price": 1000,
        "img":"https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg",
    },
    {
        "id":4,
        "name":"Desmorrugador Metal 4 partes",
        "price": 1000,
        "img":"https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg",
    },
    {
        "id":5,
        "name":"Desmorrugador Metal 4 partes",
        "price": 1000,
        "img":"https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg",
    }
]

function AllProducts() {

    const products = (array) =>{
        return array.map(element => {
            return(
                <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-gray-light"> 
                    <img height="250" className="mix-blend-multiply" src="https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg" /> 
                </a>
                <figcaption className="pt-2">
                    <a href="#" class="float-end btn btn-light btn-icon"> <i class="fa-solid fa-cart-plus"></i> </a>
                    <strong className="price">${element.price}</strong> 
                    <a href="#" className="title text-truncate">{element.name}</a>
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