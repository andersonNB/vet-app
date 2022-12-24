import { Link } from "react-router-dom";
import logoPrueba from '../../../assets/logoDePrueba.png';


export const Navbar = () => {
  return (
    <nav class="navbar bg-light">
     <div class="container-fluid">
       <a class="navbar-brand">
        <img src={logoPrueba} alt="logoPrueba" width="30" height="24" />
        </a>
        <div class="d-flex">
            <Link to="/login" className="btn btn-primary" type="submit">Iniciar Sesión</Link>
            <button className="btn btn-outline-success" type="submit">Registrate</button>
        </div>
      </div>
   </nav>
  )
}