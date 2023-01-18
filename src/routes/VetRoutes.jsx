import {Routes, Route} from 'react-router-dom';
import {HomePage} from "../public/";
import { LoginPage } from "../shared/components/auth";
import { Navbar, Footer} from "../shared/components";


const VetRoutes = () => {
  return (
    <>
    z
    <Navbar/>
      <Routes>
            <Route path="/" element={<HomePage/> } />
            <Route path="/login" element={<LoginPage/>}/>
       </Routes>

       
    </>
  )
}

export default VetRoutes