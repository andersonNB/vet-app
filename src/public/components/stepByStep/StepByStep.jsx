import React from 'react'

const StepByStep = () => {
  return (
    <div className="container">
      <div className="row row-body d-flex">
        <div className="col-md-6 col-sm-12 text-center">
          <img className="mt-5" src={img} alt="dogs&catsQR" />
        </div>
        <div className="col-md-6 col-sm-12  mt-5">
          <h2 className="text-center">¿Qué hacemos en vetApp?</h2>
          <p className="m-3">Somos la opción más innovadora del mercado actual, aquí te contamos el por qué:</p>
          <ul className="text-justify">
            <p className="li">🐾 Porque podrás tener los datos de tus mascotas online</p>
            <p className="li">🐾 Porque podras portar en todas partes y a toda hora información veterinaria relevante</p>
            <p className="li">🐾 Futuramente cosas como el seguro de tus peluditos podrá estar aquí</p>
            <p className="li">🐾 Podrás estar seguro de que tu mascota siempre encontrará el camino a casa gracias a vetApp</p>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default StepByStep