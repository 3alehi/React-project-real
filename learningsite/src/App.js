import { useRoutes } from 'react-router-dom';
import RouteAddress from './componnent/Routes';
import './App.css';
import Navbars from './componnent/Navbars';
export default function App() {
  let rout = useRoutes(RouteAddress)
 
  return (
    <div>
      <Navbars/>
      {rout}
     
    </div>
  );
}
