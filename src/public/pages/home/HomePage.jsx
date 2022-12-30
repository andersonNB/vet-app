import { Footer, Navbar } from "../../../shared/components"
import img from './../../../assets/cd2.png'
import paws from './../../../assets/paws.png'
import './home.scss'

const HomePage = () => {
  return (
    <>
        {/* <Navbar/> */}
       {/*  <Footer/> */}
        <div class="container">
          <div class="row d-flex align-items-center">
          <div class=" col-md-6 col-sm-12 column-1 align-items-center">
            <h1>LA MEJOR OPCIÓN PARA TU AMIGO</h1>
            <h4> Es hora de cuidar de una manera totalmente tecnólogica y personalizada a tu compañero de vida.</h4>
            <button type="button" class="btn btn-secondary mt-4">¡Quiero saber más!</button>
          </div>
          <div class="col-md-6 col-sm column-2">
          <img src={img} alt="" />
          </div>
          </div>
        </div>
       

    </>
  )
}

export default HomePage