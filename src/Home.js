function Home() {
    return (
        <div className="home-section">
          
            <section className="padding-y">
            <div className="container">

                <header className="section-heading">
                    <h3 className="section-title">Nuevos productos</h3>
                </header> 

                <div className="row">
                 
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <figure className="card-product-grid">
                            <a href="#" className="img-wrap rounded bg-gray-light"> 
                                <img height="250" className="mix-blend-multiply" src="https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg" /> 
                            </a>
                            <figcaption className="pt-2">
                                <strong className="price">$1.000</strong> 
                                <a href="#" className="title text-truncate">Desmorrugador Metal 4 partes</a>
                                <small className="text-muted">60mm</small>
                            </figcaption>
                        </figure>
                    </div>
                </div> 
            </div> 
            </section>
            <section className="padding-y">
            <div className="container">

                <header className="section-heading">
                    <h3 className="section-title">Recomendados</h3>
                </header> 

                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                        <figure className="card-product-grid">
                            <a href="#" className="img-wrap rounded bg-gray-light"> 
                                <img height="250" className="mix-blend-multiply" src="https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg" /> 
                            </a>
                            <figcaption className="pt-2">
                                <strong className="price">$1.000</strong> 
                                <a href="#" className="title text-truncate">Desmorrugador Metal 4 partes</a>
                                <small className="text-muted">60mm</small>
                            </figcaption>
                        </figure>
                    </div>

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

export default Home;