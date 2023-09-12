import "../../../Styles/PostProperty/FormPostProperty.css"
import { useEffect, useState } from "react"
import axios from "../../Authentification/axios"
import { useParams } from "react-router-dom"
import Navbar from "../Banners/Navbar"
import BlockImagePostPorperty from "../PostProperty/BlockImageFormProperty"
import LocationProperty from "../PostProperty/LocationProperty"
import DetailsPost from "../PostProperty/DetailsPost"
import ContactPost from "../PostProperty/ContactPost"
import BasicInformation from "../PostProperty/BasicInformation"
import { Container, Row, Col } from "react-bootstrap"
import addImage from '../../../Assets/Images/add-2935429_1280.png'


function EditProperty () {
    const [property, setProperty] = useState([])
    const {id} = useParams


    const fetchProperty = async () => {
        await axios.get(`http://localhost:8000/api/property/${id}`).then(({data}) =>
            setProperty(data)
        )
    }

    useEffect(() => {
        fetchProperty()
    },[])

    console.log(property)

    let inputFormPostName = document.getElementById('inputFormPostName')
    let inputFormPostType = document.getElementById('inputFormPostType')
    let inputFormPostStatus = document.getElementById('inputFormPostStatus')
    let inputFormPostBetRoom = document.getElementById('inputFormPostBetRoom')
    let inputFormPostBadRoom = document.getElementById('inputFormPostBadRoom')
    let inputFormPostSuperficie = document.getElementById('inputFormPostSuperficie')
    let inputFormPostPrice = document.getElementById('inputFormPostPrice')

    let inputFormPostCountry = document.getElementById('inputFormPostCountry')
    let inputFormPostCity = document.getElementById('inputFormPostCity')
    let inputFormAddress = document.getElementById('inputFormAddress')
    let inputFormPostalCode = document.getElementById('inputFormPostalCode')

    let inputFormPostDescription = document.getElementById('inputFormPostDescription')

    // gestion des images
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (event) => {
        property.map(prop => {
            prop.images.map(image => {

            })
        })

        const files = Array.from(event.target.files);
        // const files = event.target.files;
        const selectedImages = Array.from(files);

        // const filesImages = Array.from(event.target.files);
        const selectedImagesArray = [];
        
        // Met à jour les images sélectionnées
        setImages((prevImages) => [...prevImages, ...selectedImages]);
    };

    const handleImageRemove=0

    let inputFormPostContactName = document.getElementById('inputFormPostContactName')
    let inputFormPostContactEmail = document.getElementById('inputFormPostContactEmail')
    let inputFormPostPhone = document.getElementById('inputFormPostPhone')


    //affichage des informations par defauts
    property.map(prop => (
        // informations de bases
        inputFormPostName.value = prop.propertyName,
        inputFormPostType.value = prop.propertyType,
        inputFormPostStatus.value = prop.propertyStatus,
        inputFormPostBetRoom.value = prop.bedrooms,
        inputFormPostBadRoom.value = prop.bathrooms,
        inputFormPostSuperficie.value = prop.area,
        inputFormPostPrice.value = prop.price,
        
        // localisation
        inputFormPostCountry.value = prop.country,
        inputFormPostCity.value = prop.city,
        inputFormAddress.value = prop.quartier,
        inputFormPostalCode.value = prop.postalcode,
        
        //details
        inputFormPostDescription.value = prop.description,

        // images
        // images = prop.images,
        
        //contact
        inputFormPostContactName.value = prop.contactName,
        inputFormPostContactEmail.value = prop.contactEmail,
        inputFormPostPhone.value = prop.contactPhone
    ))
    // console.log(property)
    

    return(
        <>
            <Navbar/>
            <BlockImagePostPorperty/>
            <Container className="FormPostProperty" id="FormPostProperty">
                {/* Titre de la section */}
                <Row className="row rowTitleFormPP" id="rowTitleFormPP">
                    <p className="text-left titleFormPP" id="titleFormPP">AJOUTER UNE PROPRIETE</p>
                </Row>

                {/* ligne */}
                <div className="lineFormPost" id="lineFormPost"></div>

                {/* formulaire d'ajout des informations sur les propriétes*/}
                <form action="" method="POST">
                    <BasicInformation/>
                    <LocationProperty/>
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
                            <Row>
                                {images.map((image, index) => (
                                    <Col md="4">
                                        <img className="img-thumbnail m-2 backgroundLogo2" key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`}/>
                                        <svg className="bi bi-x deleteImage" onClick={() => handleImageRemove(index)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </Col>
                                ))}
                                <Col md="4">
                                    <label for='imagePost1' className="labelImagePost labelImagePost1" id="labelImagePost1">
                                        <img src={addImage} className="backgroundLogo" id="backgroundLogo1" alt="HOUSING"/>
                                    </label> 
                            `       <input type="file" multiple onChange={handleImageUpload} name="images" className="imagePost imagePost1" id="imagePost1"/>
                                </Col>
                            </Row>
                            <Row className="imageProperty" id="imageProperty">
                            </Row>
                            {/* <div className="d-flex flex-wrap"> */}
                        {/* </div> */}
                        </>

                        <ContactPost/>
                    </form>
            </Container>
        </>
    )
}

export default EditProperty