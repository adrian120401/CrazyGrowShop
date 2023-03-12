function Footer() {
    return (
     
       <div className="footer-section">
            <aside className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas_cart">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title">Tu carrito (1) </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                
                <figure className="itemside mb-4">
                    <div className="aside">
                    <img src="https://growshopdelpaso.com/wp-content/uploads/2020/05/desmo-de-metal.jpg" className="border img-sm rounded" />
                    </div>
                    <figcaption className="info">
                    <a href="#" className="btn btn-icon btn-light float-end"><i className="fa fa-trash"></i></a>
                    <p>Desmorrugador Metal 4 partes</p>
                    <span className="text-muted">1 x $1.000 </span> <br />
                    <strong className="price"> $1.000 </strong>
                    </figcaption>
                </figure>
            
                <p className="mb-3 text-center"> Subtotal:  <strong className="text-danger">$1.000</strong>  </p>
                <div className="mb-3">
                    <a href="#" className="btn w-100 btn-success">Contactarse</a>
                </div>
                </div> 
            </aside> 
       </div>
      
       
    );
}

export default Footer;