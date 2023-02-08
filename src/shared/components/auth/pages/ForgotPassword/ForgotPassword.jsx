import React from "react";

export const ForgotPassword = () => {
	return (
		<div>
			<a
				// type="button"
				// className="btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
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
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Cambiar contraseña
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">In progress...</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Cambiar contraseña
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
