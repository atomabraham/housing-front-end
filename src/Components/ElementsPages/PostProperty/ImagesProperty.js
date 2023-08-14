import "../../../Styles/PostProperty/FormPostProperty.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from '../../../Assets/Images/logo 2.png'
import { CloseMenu } from "../Banners/FirstBanner"

function ImageProperty(){
    function SelectImage1(){
        let file1=document.getElementById('imagePost1')
        let picture1=document.getElementById('backgroundLogo1')
        let nb=document.getElementById('NB')
        picture1.style.border='none'
        picture1.src=window.URL.createObjectURL(file1.files[0])
        nb.style.display='block'
    }
    function SelectImage2(){
        let file2=document.getElementById('imagePost2')
        let picture2=document.getElementById('backgroundLogo2')
        let nb=document.getElementById('NB')
        picture2.style.border='none'
        nb.style.display='block'
        picture2.src=window.URL.createObjectURL(file2.files[0])
    }
    function SelectImage3(){
        let file3=document.getElementById('imagePost3')
        let picture3=document.getElementById('backgroundLogo3')
        let nb=document.getElementById('NB')
        picture3.style.border='none'
        nb.style.display='block'
        picture3.src=window.URL.createObjectURL(file3.files[0])
    }
    function SelectImage4(){
        let file4=document.getElementById('imagePost4')
        let picture4=document.getElementById('backgroundLogo4')
        let nb=document.getElementById('NB')
        picture4.style.border='none'
        nb.style.display='block'
        picture4.src=window.URL.createObjectURL(file4.files[0])
    }
    function SelectImage5(){
        let file5=document.getElementById('imagePost5')
        let picture5=document.getElementById('backgroundLogo5')
        let nb=document.getElementById('NB')
        picture5.style.border='none'
        nb.style.display='block'
        picture5.src=window.URL.createObjectURL(file5.files[0])
    }

    return(
        <>
            <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                <p className="basicInformation" id="basicInformation">Images (Vous pouvez ajouter jusqu'a 5 images)</p>
            </Row>
            <Row className="rowNB" id="roNB">
                <p className="NB" id="NB">
                    <span>NB :</span>
                    Vous pouvez cliquer sur une image pour la modifier
                </p>
            </Row>
            <Row className="imageProperty" id="imageProperty">
                <Col md="4">
                    <label for='imagePost1' className="labelImagePost labelImagePost1" id="labelImagePost1">
                        <img src={logo} className="backgroundLogo" id="backgroundLogo1" alt="HOUSING"/>
                    </label> 
            `       <input type="file" onChange={SelectImage1} name="imagePost1" className="imagePost imagePost1" id="imagePost1"/>
                </Col>
                <Col md="4">
                    <label for='imagePost2' className="labelImagePost labelImagePost2" id="labelImagePost2">
                        <img src={logo} className="backgroundLogo" id="backgroundLogo2" alt="HOUSING"/>
                    </label> 
            `       <input type="file" onChange={SelectImage2} name="imagePost2" className="imagePost imagePost2" id="imagePost2"/>
                </Col>
                <Col md="4">
                    <label for='imagePost3' className="labelImagePost labelImagePost3" id="labelImagePost3">
                        <img src={logo} className="backgroundLogo" id="backgroundLogo3" alt="HOUSING"/>
                    </label> 
            `       <input type="file" onChange={SelectImage3} name="imagePost3" className="imagePost imagePost3" id="imagePost3"/>
                </Col>
            </Row>
            <Row className="imageProperty" id="imageProperty">
                <Col md="6">
                    <label for='imagePost4' className="labelImagePost labelImagePost4" id="labelImagePost4">
                        <img src={logo} className="backgroundLogo" id="backgroundLogo4" alt="HOUSING"/>
                    </label> 
            `       <input type="file" onChange={SelectImage4} name="imagePost4" className="imagePost imagePost4" id="imagePost4"/>
                </Col>
                <Col md="6">
                    <label for='imagePost5' className="labelImagePost labelImagePost5" id="labelImagePost5">
                        <img src={logo} className="backgroundLogo" id="backgroundLogo5" alt="HOUSING"/>
                    </label> 
            `       <input type="file" onChange={SelectImage5} name="imagePost5" className="imagePost imagePost5" id="imagePost5"/>
                </Col>
            </Row>
        </>
    )
}

export default ImageProperty