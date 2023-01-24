import { Link } from "react-router-dom";
import './LoginPage.scss'
import logoQuery from '../../../../../assets/LOGOAIPRUEBA.png'
import { SvgComponentLogin } from "../../../../other/SvgComponentLogin";

export const LoginPage = () => {

	return (
		<>
      <div className="container backgroundImage text-center" style={{minHeight:"100vh", maxWidth:"100%"}}>
        <div  className="row align-items-center justify-content-center">
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
                
                  <button type="submit" className="btn btn-primary" style={{zIndex: "1"}}>
                    Iniciar Sesión
                  </button>
                  <Link to="#" className="forgotPassword">¿Olvide mi contraseña?</Link>
                  <Link to="/" className="goHome">Página Inicial</Link>
                
              </form>
          </div>
          <div className="col-md-6 col-6">
            {/* <img src={loginDog2} className="loginDogImage" loading="lazy"/> */}
            <SvgComponentLogin />
          </div>
          <div className="col-sm-12">
            <img src={logoQuery} className="loginAiTemporal" loading="lazy"/>
          </div>
        </div>
      </div>
		</>
	);
};
