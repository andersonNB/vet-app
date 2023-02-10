import React from "react";
import "./body.scss";
import img from "./../../../assets/dogsandcats2.jpg";

const BodyComponent = () => {
  return (
    <div id="bodyComponent">
      <div className="container bodyComponent__container">
      <div className="row d-flex">
        <div className="col-md-12 col-sm-12 ">
        <img src={img} alt="dogsAndCats" className="bodyComponent__container--image" />
        <div className="middle">
    <div className="text">🦴lleva toda la información de tu mascota a todo lado🐕‍🦺</div>
  </div>
        </div>
      </div>
      </div>
      <a
        href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
        className="bodyComponent--whatsapp"
        target="_blank"
      >
        {" "}
        <i className="fa fa-whatsapp bodyComponent--whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default BodyComponent;
