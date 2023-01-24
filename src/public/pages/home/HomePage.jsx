
import { BodyComponent, Footer } from "../..";
import { Navbar } from "../../../shared/components/Navbar/Navbar";
import img from "./../../../assets/cd2.png";
import "./home.scss";

const HomePage = () => {
  return (
    <>
    <Navbar/>
      <div className="container mt-3">
        <div className="row d-flex align-items-center">
          <div className=" col-md-6 col-sm-12 column-1 align-items-center">
            <h1>LA MEJOR OPCIÓN PARA TU AMIGO</h1>
            <h3>
              {" "}
              Es hora de cuidar de una manera totalmente tecnólogica y
              personalizada a tu compañero de vida.
            </h3>
            <button type="button" className="btn btn-secondary mt-4">
              ¡Quiero saber más!
            </button>
          </div>
          <div className="col-md-6 col-sm-12 column-2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <BodyComponent />
      <Footer />
    </>
  );
};

export default HomePage;
