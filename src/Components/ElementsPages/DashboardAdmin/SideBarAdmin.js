import { Link } from "react-router-dom";
import "../../../Styles/DashboardAdmin/SideBarAdmin.css";
import React, { useEffect, useState } from "react";
import axios from "../../Authentification/axios";
import { AutoGraph } from "@mui/icons-material";
import AgrementController from "../../Controllers/DahboardAdmin/AgrementController";
import LayoutPropertiesController from "../../Controllers/DahboardAdmin/LayoutPropertiesController";

function Sidebar({ isVisible, toggleSidebar, isSidebarVisible }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Effectue une requête HTTP GET à l'API pour récupérer les données de l'utilisateur
    axios
      .get("http://localhost:8000/api/user")
      .then((response) => {
        setUser(response.data.data); // Affecte les données de l'utilisateur à la variable d'état "user"
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {user ? (
        <div className={`sidebar ${isVisible ? "visible" : ""}`}>
          {/* Contenu du menu latéral */}
          <button
            className={`toggle-btn ${isSidebarVisible ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            {isSidebarVisible ? (
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   width="30"
              //   height="30"
              //   fill="currentColor"
              //   class="bi bi-list"
              //   viewBox="0 0 16 16"
              // >
              //   <path
              //     fill-rule="evenodd"
              //     d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              //   />
              // </svg>
              <></>
            ) : (
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   width="30"
              //   height="30"
              //   fill="currentColor"
              //   class="bi bi-x-lg"
              //   viewBox="0 0 16 16"
              // >
              //   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              // </svg>
              <></>
            )}
          </button>
          <div class="profilePictureAdmin" id="profilePictureAdmin">
            <img
              src={`http://localhost:8000/storage/images/profilePicture/${user.picture}`}
              alt="HOUSING"
              className="pictureAdmin"
            />
          </div>
          <div className="menu">
            <h2>ADMINISTRATEUR</h2>
            {/* <ul> */}
            {/* <Link to="/Dashboard/options">STATISTQUES</Link> */}
            {/* <li>UTILISATEURS</li>
                  <li>PROPRIETES</li>
                  <li>OPTION DE PROPRIETES</li> */}
            {/* </ul> */}
            <p>
              {user.name} {user.secondname}
            </p>
          </div>
          <div className="row blockStatisticAdmin" id="blockStatisticAdmin">
            <AutoGraph
              className="iconSideBarAdmin"
              // fontSize="large"
              // color="#f6b100"
            />
            <Link
              to="#statistics"
              className="btnSideBarAdmin"
              name="linkStatistic"
            >
              STATISTIQUES
            </Link>
          </div>
          <div className="row blockStatisticAdmin" id="blockStatisticAdmin">
            <AutoGraph
              className="iconSideBarAdmin"
              // fontSize="large"
              // color="#f6b100"
            />
            <Link
              to="#property"
              className="btnSideBarAdmin"
              id="btnPropertieSideBarAdmin"
              name="linkStatistic"
              onClick={LayoutPropertiesController}
            >
              PROPRIETES
            </Link>
          </div>
          <div className="row blockStatisticAdmin" id="blockStatisticAdmin">
            <AutoGraph
              className="iconSideBarAdmin"
              // fontSize="large"
              // color="#f6b100"
            />
            <Link
              to="#agrements"
              className="btnSideBarAdmin"
              id="btnAgrementSideBarAdmin"
              name="linkStatistic"
              onClick={AgrementController}
            >
              AGREMENTS
            </Link>
          </div>
          <div className="row blockStatisticAdmin" id="blockStatisticAdmin">
            <AutoGraph
              className="iconSideBarAdmin"
              // fontSize="large"
              // color="#f6b100"
            />
            <Link to="#users" className="btnSideBarAdmin" name="linkStatistic">
              UTILISATEURS
            </Link>
          </div>
          <div className="row blockStatisticAdmin" id="blockStatisticAdmin">
            <AutoGraph
              className="iconSideBarAdmin"
              // fontSize="large"
              // color="#f6b100"
            />
            <Link
              to="#transactions"
              className="btnSideBarAdmin"
              name="linkStatistic"
            >
              TRANSACTIONS
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;
