import { Link } from "react-router-dom";
import logoPrueba from "../../../assets/logoDePrueba.png";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logoPrueba} alt="logoPrueba" width="30" height="24" />
        </a>
        <div className="d-flex">
          <Link
            to="/login"
            className="btn btn-warning login_button"
            type="submit"
            style={{
              zIndex: "1"
            }}
          >
            Iniciar Sesión
          </Link>
          <button
            className="btn btn-outline-secondary register_button"
            type="submit"
          >
            Registrate
          </button>
        </div>
      </div>
    </nav>
  );
};
