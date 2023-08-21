import { Row,Col } from "react-bootstrap"
import "../../../Styles/DashboardAdmin/LeftNavBarAdmin.css"
import axios from "axios"
import { Link } from "react-router-dom";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { AddHome, Apartment, AutoGraph, Paid, People } from "@mui/icons-material";
import LayoutOptionController from "../../Controllers/DahboardAdmin/LayoutOptionController";
import LayoutStatisticController from "../../Controllers/DahboardAdmin/LayoutStatisticController";
import LayoutPropertiesController from "../../Controllers/DahboardAdmin/LayoutPropertiesController";
import LayoutUsersController from "../../Controllers/DahboardAdmin/LayoutUsersController";
import LayoutTransactionsController from "../../Controllers/DahboardAdmin/LayoutTransactionsController";
// import LayoutOptionController from "../../Controllers/DahboardAdmin/LayoutOptionController";

function LeftNavBarAdmin(){
    // recuperer le user authentifier
    // let data_user
    // async function userActif(){
    //     const user = await axios.get('http://localhost:8000/api/user')
    //     data_user=user.data.data
    //     return data_user
    // }

    return(
        <>
            {/* profil de l'admin */}
            <Row className="blockProfile">
                <Row className="blockProfile2">
                    <Row>
                        <div className="profilePicture" id="profilePicture">
                            {/* photo de profil */}
                            {/* <svg className="iconAccount" xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg> */}
                        </div>
                    </Row>
                    <Row>
                        <p className="textDashboardAdmin">ADMINISTRATEUR</p>
                        <p className="textDashboardAdmin">Nom et Prénom</p>
                    </Row>
                    <Row className="lineblockProfile">
                        
                    </Row>
                    {/* menus */}
                    {/* Statistics */}
                    <Row className="rowMenuDashboard" id="rowMenuStatistic" onClick={LayoutStatisticController}>
                        <Col sm="1">
                            <AutoGraph className="iconLeftNavBarAdmin" fontSize="large" color="#f6b100"/>
                        </Col>
                        <Col sm="10">
                            <Link to="#/Statistics" className="linkDahboard linkStatistic" name="linkStatistic" >STATISQUES</Link>
                        </Col>
                    </Row>
                    {/* Properties */}
                    <Row className="rowMenuDashboard" id="rowMenuProperties" onClick={LayoutPropertiesController}>
                        <Col sm="1">
                            <Apartment className="iconLeftNavBarAdmin" fontSize="large" color="#f6b100"/>
                        </Col>
                        <Col sm="10">
                            <Link  to="#/Properties" className="linkDahboard linkPropertiesD">PROPRIETES</Link>
                        </Col>
                    </Row>
                    {/* Options */}
                    <Row className="rowMenuDashboard" id="rowMenuOption" onClick={LayoutOptionController}>
                        <Col sm="1">
                            <AddHome className="iconLeftNavBarAdmin" fontSize="large" color="#f6b100"/>
                        </Col>
                        <Col sm="10">
                            <Link to="#/options" className="linkDahboard linkOptions">OPTIONS</Link>
                        </Col>
                    </Row>
                    {/* Users */}
                    <Row className="rowMenuDashboard" id="rowMenuUsers" onClick={LayoutUsersController}>
                        <Col sm="1">
                            <People className="iconLeftNavBarAdmin" fontSize="large" color="#f6b100"/>
                        </Col>
                        <Col sm="10">
                            <Link to="#/Users" className="linkDahboard linkOptions">UTILISATEURS</Link>
                        </Col>
                    </Row>
                    {/* Transactions */}
                    <Row className="rowMenuDashboard" id="rowMenuTransaction" onClick={LayoutTransactionsController}>
                        <Col sm="1">
                            <Paid className="iconLeftNavBarAdmin" fontSize="large" color="#f6b100"/>
                        </Col>
                        <Col sm="10">
                            <Link  to="#/Transactions" className="linkDahboard linkOptions">TRANSACTIONS</Link>
                        </Col>
                    </Row>
                </Row>
            </Row>
        </>
    )
}

export default LeftNavBarAdmin