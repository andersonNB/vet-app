import React from "react";
import "./body.scss";
import img from "./../../../assets/dpQR.png";

const BodyComponent = () => {
  return (
    <div id="bodyComponent">
      <div className="container">
      <div className="row row-body d-flex">
        <div className="col-md-6 col-sm-12  mt-5">
          <h2 className="text-center">¿Qué hacemos en vetApp?</h2>
          <p className="m-3">Somos la opción más innovadora del mercado actual, aquí te contamos el por qué:</p>
          <ul className="text-justify">
            <li>Porque podrás tener los datos de tus mascotas online</li>
            <li>Porque podras portar en todas partes y a toda hora información veterinaria relevante</li>
            <li>Futuramente cosas como el seguro de tus peluditos podrá estar aquí</li>
            <li>Podrás estar seguro de que tu mascota siempre encontrará el camino a casa gracias a vetApp</li>
            <li>Perfecto para aspectos médicos relevantes de tu mascota</li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12 text-center">
          <img className="mt-5" src={img} alt="dogs&catsQR" />
        </div>
      </div>
      </div>
      <a
        href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
        className="whatsapp"
        target="_blank"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default BodyComponent;
