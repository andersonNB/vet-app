import {BrowserRouter} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import { VetRoutes } from "./routes";

function VetApp() {
 

  return (
    <BrowserRouter>
      <VetRoutes/>
    </BrowserRouter>
  )
}

export default VetApp
