import "../Styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import SingUp from "./Pages/SingUpPage";
import PostProperty from "./Pages/PostProperty";
import HomeDashboardAdmin from "./Pages/DashboardAdmin/HomeDashboardAdmin";
import ShowProperty from "./Pages/ShowProperty";
import NotFound from "./Pages/NotFound";
import EditProperty from "./ElementsPages/EditProperty/EditProperty";
import SearchResultPage from "./Pages/SearchResultPage";
import AboutUs from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactPage";
import MenuOptionAdmin from "./ElementsPages/DashboardAdmin/MenuOptionAdmin";
import EditProfileUser from "./Pages/EditProfileUser";
import ProtectedRoute from "./Controllers/ProtectedRoute";
import MyProperty from "./Pages/MyProperty";
import ValidateProperty from "./Pages/ValidateProperty";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SingUp />} />
          <Route path="/CreatePost" element={<PostProperty />} />
          <Route path="/Dashboard" element={<HomeDashboardAdmin />} />
          <Route path="/Dashboard/options" element={<MenuOptionAdmin />} />
          <Route path="/property/:id" element={<ShowProperty />} />
          <Route path="/edit/property/:id" element={<EditProperty />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/users/edit" element={<EditProfileUser />} />
          {/* <ProtectedRoute path="/users/edit" element={<EditProfileUser />} /> */}
          <Route path="/MyProperties" element={<MyProperty />} />
          <Route path="/ValidateProperty/:id" element={<ValidateProperty />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
