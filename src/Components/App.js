
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/HomePage';
import SingUp from './Pages/SingUp/SingUpPage';
import DashboardUsers from './Pages/Dashboard_User/DashboardUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = { <Home/> }></Route>
          <Route path = "/SignUp" element = { <SingUp/> }></Route>
          <Route path = '/account' element = { <DashboardUsers/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
