import React from "react";
import "./body.scss";
import img from "./../../../assets/dogsandcats2.png";

const BodyComponent = () => {
  return (
    <div id="bodyComponent">
      <div className="container container-body">
      <div className="row row-body d-flex">
        <div className="col-md-12 col-sm-12 ">
        <img src={img} alt="dogsAndCats" className="image" />
        <div className="middle">
    <div className="text">🦴lleva toda la información de tu mascota a todo lado🐕‍🦺</div>
  </div>
        </div>
      </div>
      </div>
      <a
        href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
        className="whatsapp"
        target="_blank"
      >
        {" "}
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default BodyComponent;
