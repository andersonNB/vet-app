import {Routes, Route} from 'react-router-dom';
import {HomePage} from "../public/";
import { LoginPage, RegisterPage } from "../shared/components/auth";


const VetRoutes = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<HomePage/> } />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
       </Routes>

       
    </>
  )
}

export default VetRoutes