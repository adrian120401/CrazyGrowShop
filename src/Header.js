function Header() {
    return (
     
        <header class="section-header">	
            <section class="header-main">
            <div class="container">
                <div class="row gy-3 align-items-center">
                <div class="col-lg-2 col-sm-4 col-4">
                    <a class="navbar-brand">
                    Crazy Grow
                    </a> 
                </div>
                <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                    <div class="float-end">
                    <a data-bs-toggle="offcanvas" href="#offcanvas_cart" class="btn btn-light"> 
                        <i class="fa fa-shopping-cart"></i> <span class="ms-1">Mi carrito</span> 
                    </a>
                        </div>
                </div> 
                <div class="col-lg-5 col-md-12 col-12">
                    <form action="#" class="">
                            <div class="input-group">
                            <input type="search" class="form-control" style={{width:"55%"}} placeholder="Search" />
                            <button class="btn btn-primary">
                                <i class="fa fa-search"></i> 
                            </button>
                            </div> 
                        </form>
                </div>
                
                </div> 
            </div> 
            </section> 
        
            <nav class="navbar navbar-light navbar-expand-lg">
            <div class="container">
                <button class="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbar_main">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link ps-0" href="#"> Categories </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Hot offers</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Gift boxes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Menu item</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Menu name</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        Others
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
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