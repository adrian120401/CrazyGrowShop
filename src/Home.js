function Home() {
    return (
        <div className="home-section">
          
            <section class="padding-y">
            <div class="container">

                <header class="section-heading">
                    <h3 class="section-title">Nuevos productos</h3>
                </header> 

                <div class="row">
                 
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <figure class="card-product-grid">
                            <a href="#" class="img-wrap rounded bg-gray-light"> 
                                <img height="250" class="mix-blend-multiply" src="https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg" /> 
                            </a>
                            <figcaption class="pt-2">
                                <strong class="price">$1.000</strong> 
                                <a href="#" class="title text-truncate">Desmorrugador Metal 4 partes</a>
                                <small class="text-muted">60mm</small>
                            </figcaption>
                        </figure>
                    </div>
                </div> 
            </div> 
            </section>
            <section class="padding-y">
            <div class="container">

                <header class="section-heading">
                    <h3 class="section-title">Recomendados</h3>
                </header> 

                <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                        <figure class="card-product-grid">
                            <a href="#" class="img-wrap rounded bg-gray-light"> 
                                <img height="250" class="mix-blend-multiply" src="https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg" /> 
                            </a>
                            <figcaption class="pt-2">
                                <strong class="price">$1.000</strong> 
                                <a href="#" class="title text-truncate">Desmorrugador Metal 4 partes</a>
                                <small class="text-muted">60mm</small>
                            </figcaption>
                        </figure>
                    </div>

                </div> 

            </div> 
            </section>
           

            <section class="padding-y-sm bg-gray-light">
            <div class="container">
                <div class="row gy-3 align-items-center">
                    <div class="col-md-8">
                    <nav class="float-lg-end">
                        <a class="btn btn-icon btn-light" title="Facebook" target="_blank" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-icon btn-light" title="Instagram" target="_blank" href="https://www.instagram.com/crazygrow.uy/"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-icon btn-light" title="Youtube" target="_blank" href="#"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-icon btn-light" title="Twitter" target="_blank" href="#"><i class="fab fa-twitter"></i></a>
                    </nav>
                    </div>
                </div> 
            </div>
            </section>
                    
        </div>
      
       
    );
}

export default Home;