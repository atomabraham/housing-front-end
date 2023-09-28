import { Col, Row } from "react-bootstrap";
import "../../../Styles/DashboardAdmin/HomeDashboardAdmin.css";
import Navbar from "../../ElementsPages/Banners/Navbar";
import Line from "../../ElementsPages/Banners/Line";
import BodyDashboard from "../../ElementsPages/DashboardAdmin/BodyDashboard";
import { useAuth } from "../../Authentification/AuthContext";
import { useEffect, useState } from "react";
import axios from "../../Authentification/axios";
import { Navigate } from "react-router-dom";
import NotFound from "../NotFound";
import Sidebar from "../../ElementsPages/DashboardAdmin/SideBarAdmin";
import ContentSection from "../../ElementsPages/DashboardAdmin/ContentSectionAdmin";

function HomeDashboardAdmin() {
  const { user, setUser } = useAuth();
  // check if user is logged in or not from server
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("http://localhost:8000/api/user");
        if (resp.status === 200) {
          setUser(resp.data.data);
          // let notFound = document.getElementById('notFound')
          // notFound.style.display="none"
        }
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("user");
        }
      }
    })();
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Fonction pour basculer la visibilité du menu latéral
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* <Navbar/>  */}
      {/* <BodyDashboard/> */}
      {/* <NotFound id="notFound"/> */}
      <Sidebar
        isVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
      <ContentSection
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
    </>
  );
}

export default HomeDashboardAdmin;
