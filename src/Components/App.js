
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import SingUp from './Pages/SingUpPage';
import PostProperty from './Pages/PostProperty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = { <Home/> }></Route>
          <Route path = "/SignUp" element = { <SingUp/> }></Route>
          <Route path= '/CreatePost' element = { <PostProperty/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
