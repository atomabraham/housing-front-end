import { Col, Container, Row } from "react-bootstrap"
import "../../../Styles/DashboardAdmin/BodyDashboard.css"
import LeftNavBarAdmin from "./LeftNavBarAdmin"
import RightColumn from "./RightColumn"

function BodyDashboard(){
    return(
            // {/* Titre de la section */}
            <Row className="rowBodyDashboard" id="rowBodyDashboard">
                <Row>
                    <Col md="2" sm="3" className="blockMenuDashboard">
                        <LeftNavBarAdmin/>
                    </Col>
                    <Col md="10" sm="9" className="contentDashboard">
                        <RightColumn/>
                    </Col>
                </Row>
            </Row>
        
    )
}

export default BodyDashboard