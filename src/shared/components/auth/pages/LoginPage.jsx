import { Link } from "react-router-dom";
import './LoginPage.scss'
import loginDog from '../../../../assets/loginDog.png';
import logoQuery from '../../../../assets/LOGOAIPRUEBA.png'

export const LoginPage = () => {
	return (
		<>
      <div className="container backgroundImage text-center">
        <div  className="row align-items-center justify-content-center vh-100">
          <div className="col-sm-12 col-md-6 col-12">
              <form className="formLogin">
              <h3>Iniciar Sesión</h3>
                <div className="mb-3">
                  <label className="form-label">
                    Correo:
                  </label>
                  <input
                    type="email"
                    className="form-control inputText"
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
                    className="form-control inputText"
                    id="exampleInputPassword1"
                  />
                </div>
                
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                  <Link to="#" className="forgotPassword">¿Olvide mi contraseña?</Link>
                
              </form>
          </div>
          <div className="col-md-6 col-6">
            <img src={loginDog} className="loginDogImage" loading="lazy"/>
          </div>
          <div className="col-sm-12">
            <img src={logoQuery} className="loginAiTemporal" loading="lazy"/>
          </div>
        </div>
      </div>
		</>
	);
};
