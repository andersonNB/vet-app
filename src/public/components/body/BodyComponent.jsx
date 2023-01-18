import React from "react";
import "./body.scss";

const BodyComponent = () => {
  return (
    <div id="bodyComponent">
      <div className="container">
      <div className="row row-body">
        <div className="col-6">1</div>
        <div className="col-6">2</div>
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
