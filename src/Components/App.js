
import '../Styles/App.css';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.css'
import { NavClik } from './Banners/FirstBanner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUp from './SingIn-SingUp/SingUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/SignUp" element={<SingUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
