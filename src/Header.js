import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ categories }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const onSearch = (event) => {
    event.preventDefault();
    if (value != "") {
      navigate(`/productos/search/${value}`);
      setValue("");
    }
  };
  const getCategories = () => {
    return categories.map((element) => {
      return (
        <li key={element}>
          <Link
            className="dropdown-item"
            to={{ pathname: `/productos/categoria/${element}` }}
            state={element}
          >
            {element}
          </Link>
        </li>
      );
    });
  };
  return (
    <header className="section-header">
      <section className="header-main">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-2 col-sm-4 col-4">
              <Link to={{ pathname: "/" }}>
                <img
                  width="170"
                  height="100"
                  src="assets/images/logo1.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="float-end">
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvas_cart"
                  className="btn btn-light"
                >
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="ms-1">Mi carrito</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <form onSubmit={(event) => onSearch(event)}>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    style={{ width: "55%" }}
                    placeholder="Buscar"
                    onChange={(event) => setValue(event.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">
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
          <button
            className="navbar-toggler border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_main"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar_main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link ps-0" to={{ pathname: "/" }}>
                  Principal
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">{getCategories()}</ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={{ pathname: "/sobreNosotros" }}>
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
