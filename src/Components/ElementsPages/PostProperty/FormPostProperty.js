import "../../../Styles/PostProperty/FormPostProperty.css"
import { Container, Form } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import BlockImagePostPorperty from "./BlockImageFormProperty";
import { CloseMenu } from "../Banners/FirstBanner";
import BasicInformation from "./BasicInformation";
import LocationProperty from "./LocationProperty";
import ImageProperty from "./ImagesProperty";
import ContactPost from "./ContactPost";
import DetailsPost from "./DetailsPost";
import SubmitProperty from "./SubmitProperty";
import axios from "axios";
import logo from '../../../Assets/Images/logo 2.png'
import { useEffect, useState } from "react";

function FormPostProperty() {

    function SelectImage1(){
        let file1=document.getElementById('imagePost1')
        let picture1=document.getElementById('backgroundLogo1')
        let nb=document.getElementById('NB')
        picture1.style.border='none'
        picture1.src=window.URL.createObjectURL(file1.files[0])
        nb.style.display='block'
    }
    useEffect (() => {
        let file1=document.getElementById('imagePost1')
        file1.addEventListener('change',SelectImage1)

    })

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

    // recuperation des options
    const [options, setOptions] = useState([])
    const fetchOptions = async () => {
        await axios.get(`http://localhost:8000/api/options`).then(({ data }) => {
        setOptions(data);
        });
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    const [image, setImage] = useState()

    const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

    const addProperty = async (e) => {
        e.preventDefault();

        // Basic informatiom
        let inputFormPostName = document.getElementById('inputFormPostName').value
        let inputFormPostType = document.getElementById('inputFormPostType').value
        let inputFormPostStatus = document.getElementById('inputFormPostStatus').value
        let inputFormPostBetRoom = document.getElementById('inputFormPostBetRoom').value
        let inputFormPostBadRoom = document.getElementById('inputFormPostBadRoom').value
        let inputFormPostSuperficie = document.getElementById('inputFormPostSuperficie').value
        let inputFormPostPrice = document.getElementById('inputFormPostPrice').value
        
        // localisation
        let inputFormPostCountry = document.getElementById('inputFormPostCountry').value
        let inputFormPostCity = document.getElementById('inputFormPostCity').value
        let inputFormAddress = document.getElementById('inputFormAddress').value
        let inputFormPostalCode = document.getElementById('inputFormPostalCode').value

        // Detail
        let inputFormPostDescription = document.getElementById('inputFormPostDescription').value

        // contact
        let inputFormPostContactName = document.getElementById('inputFormPostContactName').value
        let inputFormPostContactEmail = document.getElementById('inputFormPostContactEmail').value
        let inputFormPostPhone = document.getElementById('inputFormPostPhone').value


        const formData = new FormData()

        formData.append('propertyName', inputFormPostName)
        formData.append('propertyType', inputFormPostType)
        formData.append('propertyStatus', inputFormPostStatus)
        formData.append('bedrooms', inputFormPostBetRoom)
        formData.append('bathrooms', inputFormPostBadRoom)
        formData.append('area', inputFormPostSuperficie)
        formData.append('price', inputFormPostPrice)
        formData.append('country', inputFormPostCountry)
        formData.append('city', inputFormPostCity)
        formData.append('quartier', inputFormAddress)
        formData.append('postalcode', inputFormPostalCode)
        formData.append('description', inputFormPostDescription)
        formData.append('image', image)
        formData.append('contactName', inputFormPostContactName)
        formData.append('contactEmail', inputFormPostContactEmail)
        formData.append('contactPhone', inputFormPostPhone)

        // alert(inputFormPostStatus)
        try {
            const resp = await axios.post('http://localhost:8000/api/createProperties', formData)

            if (resp.status === 200) {
                document.location.href="/"
            } else {
                alert('Save failed')
                }
        } catch (error) {
                
        }
    }

    return(
    <>    
        <BlockImagePostPorperty/>
        <Container onClick={CloseMenu} className="FormPostProperty" id="FormPostProperty">
            {/* Titre de la section */}
            <Row className="row rowTitleFormPP" id="rowTitleFormPP">
                <p className="text-left titleFormPP" id="titleFormPP">AJOUTER UNE PROPRIETE</p>
            </Row>

            {/* ligne */}
            <div className="lineFormPost" id="lineFormPost"></div>

            {/* formulaire d'ajout des informations sur les propriétes*/}
            <form action="" method="POST" onSubmit={addProperty}>
                {/* information de base */}
                <BasicInformation/>
                <LocationProperty/>
                {/* details */}
                <DetailsPost/>
                {/* images */}
                <>
                    <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                        <p className="basicInformation" id="basicInformation">Images (Vous pouvez ajouté jusqu'a 5 images)</p>
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
                    `       <input type="file" onChange={changeHandler} name="imagePost1" className="imagePost imagePost1" id="imagePost1"/>
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
                <ContactPost/>
                <SubmitProperty/>
            </form>

        </Container>
    </>
    )
}

export default FormPostProperty