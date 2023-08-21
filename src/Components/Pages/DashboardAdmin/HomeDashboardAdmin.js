import { Col, Row } from "react-bootstrap"
import "../../../Styles/DashboardAdmin/HomeDashboardAdmin.css"
import FirstBanner from '../../ElementsPages/Banners/FirstBanner'
import Line from '../../ElementsPages/Banners/Line'
import BodyDashboard from "../../ElementsPages/DashboardAdmin/BodyDashboard"

function HomeDashboardAdmin() {
    return(
        <>
            <FirstBanner/>
            <BodyDashboard/>
        </>
    )
}

export default HomeDashboardAdmin