import { Link } from "react-router-dom"
import ImageRegister from "../../../../../assets/verify.png";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  return (
    <>
      <div className="backgroundImageRegister text-center" style={{minHeight:"100vh", maxWidth:"100%"}}>
        <div  className="row align-items-center justify-content-center">
          <div className="col-sm-12 col-md-6 col-12">
            <form className="formLogin">
                <p style={{backgroundColor:"cornflowerblue", display:"inline-block"}} >Empieza Gratis</p>
              <h3>Crear nueva cuenta</h3>
              <div className="row">
                    <div className="col-6" style={{display:"flex",alignItems:"center", }}>
                        Nombre: 
                        <input
                        type="text"
                        className="form-control inputText"
                        id="name"
                        placeholder="nombre"
                    />
                    </div>
                    <div className="col-6" style={{display:"flex",alignItems:"center"}}>
                        Apellido:
                        <input
                        type="text"
                        className="form-control inputText"
                        id="apellido"
                        placeholder="Apellido"
                    />
                    </div>
              </div>
                <div className="mb-3">
                  <label className="form-label">
                    Correo:
                  </label>
                  <input
                    type="email"
                    className="form-control inputText"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ej@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    className="form-control inputText"
                    id="exampleInputPassword2"
                    placeholder="*******"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Confirmar Contraseña:
                  </label>
                  <input
                    type="password"
                    className="form-control inputText"
                    id="exampleInputPassword1"
                    placeholder="*******"
                  />
                </div>
                
                  <button type="submit" className="btn btn-primary box">
                   Crear Cuenta
                    <img src={ImageRegister} style={{marginLeft:"6px",width: '25px', height: '25px'}} />
                  </button>
                  <Link to="/" className="goHome m-3">Página Inicial</Link>
              </form>
          </div>
        </div>
      </div>
		</>
  )
}