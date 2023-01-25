import React from 'react'
import img from '../../../assets/register.png';
import './stepByStep.scss';

const StepByStep = () => {
  return (
    <div className="container" id="stepByStep">
      <div className="row row-body-step d-flex row-one">
        <div className="col-md-6 col-sm-12 text-center">
          <img src={img} alt="form" />
        </div>
        <div className="col-md-6 col-sm-12  mt-5 text-light row-two">
          <h2 className="text-center h2-step">Como comenzar con VetAPP</h2>
          <ul className="text-justify">
            <p className="li">1️⃣ Crea una cuenta 📝</p>
            <p className="li">2️⃣ Después de creada la cuenta, registra a tu peludito 🐶😻</p>
            <p className="li">3️⃣ Cuando tu peludito este registrado, puedes mandar a pedir tu placa personalizada🪪</p>
            <p className="li">4️⃣ Terminados los pasos anteriores, tu placa llegará hasta tu hogar🤩💌</p>
            <p className="li">5️⃣ Llegada la placa podrás ingresar datos relevantes de peludito y siempre contar que la tecnología de vetApp te ayudará.</p>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default StepByStep