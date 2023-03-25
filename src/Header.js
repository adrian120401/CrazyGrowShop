import { Link } from 'react-router-dom';

function Header() {
    return (
     
        <header className="section-header">	
            <section className="header-main">
            <div className="container">
                <div className="row gy-3 align-items-center">
                <div className="col-lg-2 col-sm-4 col-4">
                    <img width="170" height="100" src="assets/images/logo1.png" alt="Logo" />
                </div>
                <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                    <div className="float-end">
                    <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light"> 
                        <i className="fa fa-shopping-cart"></i> <span className="ms-1">Mi carrito</span> 
                    </a>
                        </div>
                </div> 
                <div className="col-lg-5 col-md-12 col-12">
                    <form action="#" className="">
                            <div className="input-group">
                            <input type="search" className="form-control" style={{width:"55%"}} placeholder="Buscar" />
                            <button className="btn btn-primary">
                                <i className="fa fa-search"></i> 
                            </button>
                            </div> 
                        </form>
                </div>
                
                </div> 
            </div> 
            </section> 
        
            <nav className="navbar navbar-light navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbar_main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link ps-0" href="#"> Principal </a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={{pathname: "/productos",}}>Productos</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        Categorias
                    </a>
                    <ul className="dropdown-menu">
                        <li> <a className="dropdown-item" href="#">Cultivo </a> </li>
                        <li> <a className="dropdown-item" href="#">Accesorios</a> </li>
                    </ul>
                    </li>
                </ul>
                </div> 
            </div> 
            </nav> 
        </header> 
      
       
    );
}

export default Header;