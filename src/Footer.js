function Footer() {
    return (
     
       <div className="footer-section">
            <aside class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_cart">
                <div class="offcanvas-header">
                <h5 class="offcanvas-title">Tu carrito (1) </h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                
                <figure class="itemside mb-4">
                    <div class="aside">
                    <img src="https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg" class="border img-sm rounded" />
                    </div>
                    <figcaption class="info">
                    <a href="#" class="btn btn-icon btn-light float-end"><i class="fa fa-trash"></i></a>
                    <p>Desmorrugador Metal 4 partes</p>
                    <span class="text-muted">1 x $1.000 </span> <br />
                    <strong class="price"> $1.000 </strong>
                    </figcaption>
                </figure>
            
                <p class="mb-3 text-center"> Subtotal:  <strong class="text-danger">$1.000</strong>  </p>
                <div class="mb-3">
                    <a href="#" class="btn w-100 btn-success">Contactarse</a>
                </div>
                </div> 
            </aside> 
       </div>
      
       
    );
}

export default Footer;