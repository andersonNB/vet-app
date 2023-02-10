import React from 'react'
import img from '../../../assets/register.png';
import './stepByStep.scss';

const StepByStep = () => {
  return (
    <div className="container" id="stepByStep">
      <div className="row rowBodyStep d-flex row-one">
        <div className="col-md-6 col-sm-12 text-center col-one">
          <img src={img} alt="form" className='rowBodyStep__img--modifier' />
        </div>
        <div className="col-md-6 col-sm-12  mt-5 text-light col-two">
          <h2 className="text-center rowBodyStep--h2-step">Como comenzar con VetAPP</h2>
          <ul className="text-justify rowBodyStep__ul--modifier">
            <p className="li">1️⃣ Crea una cuenta 📝</p>
            <p className="li">2️⃣ Después de creada la cuenta, registra a tu peludito 🐶😻</p>
            <p className="li">3️⃣ Cuando tu peludito esté registrado, puedes mandar a pedir tu placa personalizada</p>
            <p className="li">4️⃣ Terminados los pasos anteriores, tu placa llegará hasta tu hogar🤩💌</p>
            <p className="li">5️⃣ Llegada la placa podrás ingresar datos relevantes de peludito y siempre contar que la tecnología de vetApp te ayudará 🌍</p>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default StepByStep