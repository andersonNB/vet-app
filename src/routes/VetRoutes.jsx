import {Routes, Route} from 'react-router-dom';
import { LoginPage } from "../shared/components/auth"
;

const VetRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage/> } />
    </Routes>
  )
}

export default VetRoutes