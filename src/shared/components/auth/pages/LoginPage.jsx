import { Link } from "react-router-dom";
import './LoginPage.scss'
import loginDog from '../../../../assets/loginDog.png';

export const LoginPage = () => {
	return (
		<>
      <div className="container fondoImage">
        <div  className="row align-items-center justify-content-center vh-100">
          <div className="col-6">
              <form className="formLogin">
              <h3>Iniciar Sesión</h3>
                <div className="mb-3">
                  <label className="form-label">
                    Correo:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                {/* <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div> */}
                <button type="submit" className="btn btn-primary">
                  Iniciar Sesión
                </button>
                <Link to="#">¿Olvide mi contraseña?</Link>
              </form>
          </div>
          <div className="col-6">
            <img src={loginDog} className="loginDogImage" loading="lazy"/>
          </div>
        </div>
      </div>
		</>
	);
};
