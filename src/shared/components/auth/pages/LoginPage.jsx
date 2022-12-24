export const LoginPage = () => {
	return (
		<>
      <div className="container">
      <div style={{backgroundColor:"#F1F7B5"}} className="row">
      <div className="col align-self-center">
      <h3>Iniciar Sesión</h3>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Correo:
					</label>
					<input
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">
						Contraseña:
					</label>
					<input
						type="password"
						class="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" class="btn btn-primary">
					Iniciar Sesión
				</button>
        <a>¿Olvide mi contraseña</a>
			</form>
      </div>
    </div>
      </div>
		</>
	);
};
