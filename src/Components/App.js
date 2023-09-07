
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/HomePage';
import SingUp from './Pages/SingUpPage';
import PostProperty from './Pages/PostProperty';
import HomeDashboardAdmin from './Pages/DashboardAdmin/HomeDashboardAdmin';
import ShowProperty from './Pages/ShowProperty';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = { <Home/> }/>
          <Route path = "/SignUp" element = { <SingUp/> }/>             
          <Route path= '/CreatePost' element = { <PostProperty/> }/>
          <Route path='/Dashboard' element={<HomeDashboardAdmin/>}/>
          <Route path='/Dashboard/options' element={<HomeDashboardAdmin/>}/>
          <Route path='/property/:id' element={<ShowProperty/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
