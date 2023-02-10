import {Link} from "react-router-dom";
import "./LoginPage.scss";
import logoQuery from "../../../../../assets/LOGOAIPRUEBA.png";
import {SvgComponentLogin} from "../../../../other/SvgComponentLogin";
import {ForgotPassword} from "../ForgotPassword/ForgotPassword";

export const LoginPage = () => {
	const onSubmit = (e) => {
		console.log("click");
		e.preventDefault();
	};

	return (
		<>
			<div
				className="container backgroundImage text-center"
				style={{minHeight: "100vh", maxWidth: "100%"}}
			>
				<div
					className="row row-login align-items-center justify-content-center"
					style={{height: "100vh"}}
				>
					<div className="col-sm-12 col-md-6 col-12">
						<form className="formLogin" onSubmit={onSubmit}>
							<h3>Iniciar Sesión</h3>
							<div className="mb-3">
								<label className="form-label">Correo:</label>
								<input
									type="email"
									className="form-control inputText"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Contraseña:</label>
								<input
									type="password"
									className="form-control inputText"
									id="exampleInputPassword1"
								/>
							</div>
							<div className="container text-center containerRow ">
								<div className="row containerRow__row">
									<div className="col-5 offset-md-1">
										<div className="m-4">
											<button
												type="submit"
												className="btn btn-primary row--button "
												style={{zIndex: "1"}}
											>
												Iniciar Sesión
											</button>
										</div>
									</div>
									<div className="col-5">
										<div className="m-4">
											<ForgotPassword />
										</div>
									</div>
								</div>
							</div>

							<div className="m-3">
								<Link to="/" className="goHome">
									Página Inicial
								</Link>
							</div>
						</form>
					</div>
					{/* <div className="col-sm-12 col-md-6 col-12">
						<form className="">
							<div class="mb-3 formLogin">
								<label for="exampleInputEmail1" class="form-label">
									Email address
								</label>
								<input
									type="email"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
								<div id="emailHelp" class="form-text">
									We'll never share your email with anyone else.
								</div>

								<label for="exampleInputPassword1" class="form-label">
									Password
								</label>
								<input
									type="password"
									class="form-control"
									id="exampleInputPassword1"
								/>

								<div class="mb-3 form-check">
									<input
										type="checkbox"
										class="form-check-input"
										id="exampleCheck1"
									/>
									<label class="form-check-label" for="exampleCheck1">
										Check me out
									</label>
								</div>
								<button type="submit" class="btn btn-primary">
									Submit
								</button>
							</div>
							<ForgotPassword />
						</form>
					</div> */}

					<div className="col-md-6 col-6" style={{height: "100vh"}}>
						<SvgComponentLogin />
					</div>
					<div className="col-sm-12">
						<img src={logoQuery} className="loginAiTemporal" loading="lazy" />
					</div>
				</div>
			</div>
		</>
	);
};
