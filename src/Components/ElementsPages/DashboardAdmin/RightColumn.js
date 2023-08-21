import "../../../Styles/DashboardAdmin/RightColumn.css"
import { Col, Row } from "react-bootstrap"
import TopMenu from "./TopMenu"
import FormPostProperty from "../../ElementsPages/PostProperty/FormPostProperty"
import MenuOptionAdmin from "./MenuOptionAdmin"

function RightColumn(){
    return( 
        <>
          <Row>
            <Col sm="2"></Col>
            <Col sm="10" className="menuOptionAdmin" id="menuOptionAdmin" >
              <MenuOptionAdmin/>  
            </Col>
          </Row>
        </>
    )
}

export default RightColumn