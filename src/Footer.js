import { Link } from "react-router-dom"
function Footer(){
    return(
        <footer className="padding-y-sm bg-gray-light mt-auto">
            <div className="container ">
            <aside className="col-6 col-sm-4 col-lg-2">
                <ul className="list-menu mb-4">
                            <li><Link to={{pathname: "/sobreNosotros",}}>Sobre nosotros</Link></li>
                            <li><a title="Maps" target="_blank" href="https://goo.gl/maps/hz9KXX86SgLEyCv28"><i className="fas fa-map-marker-alt"></i> Jose Pedro Varela 330</a></li>
                        </ul>
            </aside>
                <div className="row gy-3 align-items-center">
                    <div className="col-md-8">
                    <nav className="float-lg-end">
                        <a className="btn btn-icon btn-light" title="Gmail" target="_blank" href="mailto:crazygrow.uy@gmail.com"><i className="fa fa-envelope"></i></a>
                        <a className="btn btn-icon btn-light" title="Facebook" target="_blank" href="https://www.facebook.com/crazygrowshop.uy/"><i className="fab fa-facebook"></i></a>
                        <a className="btn btn-icon btn-light" title="Instagram" target="_blank" href="https://www.instagram.com/crazygrow.uy/"><i className="fab fa-instagram"></i></a>
                    </nav>
                    </div>
                </div> 
            </div>
        </footer>
    )
}
export default Footer