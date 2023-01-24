import {Link} from "react-router-dom";
import ImageRegister from "../../../../../assets/verify.png";
import "./RegisterPage.scss";

export const RegisterPage = () => {
	return (
		<>
			<div
				className="backgroundImageRegister text-center"
				style={{minHeight: "100vh", maxWidth: "100%"}}
			>
				<div className="row align-items-center justify-content-center">
					<div className="col-sm-12 col-md-6 col-12">
						<form className="formLogin">
							<p>Empieza Gratis</p>
							<h3 style={{fontWeight:"900"}}>Crear nueva cuenta</h3>
							<div className="row">
								<div className="col-6">
									<div className="InputForm">
										<input
											type="text"
											className="form-control inputText"
											id="name"
											placeholder="Nombre"
											style={{width: "100%"}}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="InputForm">
										<input
											type="text"
											className="form-control inputText"
											id="apellido"
											placeholder="Apellido"
											style={{width: "100%"}}
										/>
									</div>
								</div>
							</div>
							<div className="InputForm">
								<input
									type="email"
									className="form-control inputText"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Correo Electronico"
									style={{width: "100%"}}
								/>
							</div>
							<div className="InputForm">
								<input
									type="password"
									className="form-control inputText"
									id="exampleInputPassword2"
									placeholder="Contraseña"
									style={{width: "100%"}}
								/>
							</div>
							<div className="InputForm">
								<input
									type="password"
									className="form-control inputText"
									id="exampleInputPassword1"
									placeholder="Confirmar Contraseña"
									style={{width: "100%"}}
								/>
							</div>
							<div className="row">
								<div className="col" style={{backgroundColor:"cornflowerblue"}}>
									<button type="submit" className="btn btn-primary box">
										Crear Cuenta
										<img
											src={ImageRegister}
											style={{marginLeft: "6px", width: "25px", height: "25px"}}
										/>
									</button>
								</div>
								<div className="col" style={{backgroundColor:"grey"}}>
									<button className="btn btn-primary box">
										<Link to="/" className="goHome">
											Página Inicial
										</Link>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
