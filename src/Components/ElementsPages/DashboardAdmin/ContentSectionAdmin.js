import React from 'react';
import '../../../Styles/DashboardAdmin/ContentSectionAdmin.css'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import { setOptions } from 'leaflet';
import MenuOptionAdmin from './MenuOptionAdmin';

function ContentSection({ toggleSidebar, isSidebarVisible }) {
    return (
      // <Router>
        <div className="content-section">
          {/* Bouton pour masquer/afficher le menu latéral */}
          <button className={`toggle-btn ${isSidebarVisible ? 'active' : ''}`} onClick={toggleSidebar}>
              {/* Button */}
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
    
          {/* Contenu de la section */}
          <Routes>    
            <Route path="/Dashboard/options" Component={<MenuOptionAdmin/>}/>
          </Routes>
        </div>
      //</Router>
    );
  }
  
export default ContentSection;