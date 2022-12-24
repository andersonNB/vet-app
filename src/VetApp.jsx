import {BrowserRouter} from 'react-router-dom';
// import reactLogo from './assets/react.svg'
import './VetApp.scss'
import { VetRoutes } from "./routes";

function VetApp() {
 

  return (
    <BrowserRouter>
      <VetRoutes/>
    </BrowserRouter>
  )
}

export default VetApp
