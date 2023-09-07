import { Col, Row } from "react-bootstrap"
import "../../../Styles/DashboardAdmin/HomeDashboardAdmin.css"
import FirstBanner from '../../ElementsPages/Banners/FirstBanner'
import Line from '../../ElementsPages/Banners/Line'
import BodyDashboard from "../../ElementsPages/DashboardAdmin/BodyDashboard"
import { useAuth } from "../../Authentification/AuthContext"
import { useEffect } from "react"
import axios from "../../Authentification/axios"
import { Navigate } from "react-router-dom"
import NotFound from "../NotFound"

function HomeDashboardAdmin() {
    const { user, setUser } = useAuth();
    // check if user is logged in or not from server
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('http://localhost:8000/api/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
                    // let notFound = document.getElementById('notFound')
                    // notFound.style.display="none"
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
				}
			}
		})();
	}, );
    
    return(
        <>
            <FirstBanner/>
            <BodyDashboard/>
            {/* <NotFound id="notFound"/> */}
        </>
    )
}

export default HomeDashboardAdmin