import React from "react";
import "./ForgotPassword.scss";

export const ForgotPassword = () => {
	return (
		<div>
			<a
				className="btn btn-primary row--button"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				style={{fontSize: "2.5vh", lineHeight: "30px"}}
			>
				¿Olvide mi contraseña?
			</a>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Cambiar Contraseña
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form className="">
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
									<label className="form-label">Nueva contraseña:</label>
									<input
										type="password"
										className="form-control inputText"
										id="exampleInputPassword1"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Repetir contraseña:</label>
									<input
										type="password"
										className="form-control inputText"
										id="exampleInputPassword1"
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Cambiar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
