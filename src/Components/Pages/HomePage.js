//importation des dépendances
// import React from 'react'
import '../../Styles/Home/Home.css'
import FirstBanner from '../ElementsPages/Banners/FirstBanner'
import Line from '../ElementsPages/Banners/Line'
import SecondBanner from '../ElementsPages/Banners/SecondBanner'

import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from '../Authentification/axios';
import { useAuth } from '../Authentification/AuthContext';

//composant de la page d'acceuil

function Home(){
    const { user, setUser } = useAuth();
    // check if user is logged in or not from server
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('http://localhost:8000/api/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
					// document.location.href = "http://localhost:3000/";
					<Navigate to="/"/>;
					console.log(resp.data.data.role);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
				}
			}
		})();
	}, );


    return(
        <div className='home' id='home'>
            <FirstBanner/>
            <Line/>
            <SecondBanner/>
        </div>
    )
}

export default Home