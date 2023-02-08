
import { BodyComponent, Footer, StepByStep } from "../..";
import { Navbar } from "../../../shared/components/Navbar/Navbar";
import img from "./../../../assets/cd2.png";
import "./home.scss";

const HomePage = () => {
  return (
    <>
    <Navbar/>
      <div className="container mt-3 containerHome">
        <div className="row containerHome__row d-flex align-items-center">
          <div className=" col-md-6 col-sm-12 rowHomepage--column-1">
            <h1>LA MEJOR OPCIÓN PARA TU AMIGO</h1>
            <h3 className="h3-home">
              Es hora de cuidar de una manera totalmente tecnólogica y
              personalizada a tu compañero de vida.
            </h3>
            <a href="#vetApp" className="btn btn-secondary mt-4 mb-2">
              ¡Quiero saber más!
            </a>
          </div>
          <div className="col-md-6 col-sm-12 rowHomepage--column-2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <BodyComponent />
      <StepByStep />
      <Footer />
    </>
  );
};

export default HomePage;
