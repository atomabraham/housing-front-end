import "../../../Styles/DashboardAdmin/RightColumn.css"
import { Col, Row } from "react-bootstrap"
import TopMenu from "./TopMenu"
import FormPostProperty from "../../ElementsPages/PostProperty/FormPostProperty"
import MenuOptionAdmin from "./MenuOptionAdmin"
import MenuProperyAdmin from "./MenuProperyAdmin"

function RightColumn(){
    return( 
        <>
          <Row>
            <Col sm="2"></Col>
            <Col sm="10" className="menuOptionAdmin" id="menuOptionAdmin" >
              <MenuOptionAdmin/>  
              {/* <MenuProperyAdmin/> */}
            </Col>
          </Row>
        </>
    )
}

export default RightColumn