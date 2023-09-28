import { Link } from 'react-router-dom';
import '../../../Styles/DashboardAdmin/SideBarAdmin.css'
import React from 'react';

function Sidebar({ isVisible, toggleSidebar, isSidebarVisible }) {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      {/* Contenu du menu latéral */}
             <button className={`toggle-btn ${isSidebarVisible ? 'active' : ''}`} onClick={toggleSidebar}> 
              
              {
                isSidebarVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                )
              }
            </button>
        <div className="menu">
            <h2>Tableau de bord</h2>
            <ul>
                <Link to="/Dashboard/options">STATISTQUES</Link>
                {/* <li>UTILISATEURS</li>
                <li>PROPRIETES</li>
                <li>OPTION DE PROPRIETES</li> */}
            </ul>
        </div>
    </div>
  );
}

export default Sidebar;