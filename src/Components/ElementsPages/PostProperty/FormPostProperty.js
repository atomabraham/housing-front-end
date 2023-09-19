import "../../../Styles/PostProperty/FormPostProperty.css"
import { Container, Form } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import BlockImagePostPorperty from "./BlockImageFormProperty";
import { CloseMenu } from "../Banners/Navbar";
import BasicInformation from "./BasicInformation";
import LocationProperty from "./LocationProperty";
import ImageProperty from "./ImagesProperty";
import ContactPost from "./ContactPost";
import DetailsPost from "./DetailsPost";
import SubmitProperty from "./SubmitProperty";
// import axios from "axios";
import axios from "../../Authentification/axios";
import addImage from '../../../Assets/Images/add-2935429_1280.png'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../Authentification/AuthContext";

function FormPostProperty() {
    
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

    // gestion du select
    const tableOptions= []

    options.map ((option) => (
        tableOptions.push({value: `${option.name}`, label: `${option.name}`,})
    ))
    // console.log(tableOptions)

    const [selectedItems, setSelectedItems] = useState([]);

    const [availableTableOptions, setAvailableTableOptions] = useState(tableOptions);

    const handleSelect = (event) => {
      const selectedOption = event.target.value;

      // Vérifier si l'option sélectionnée existe déjà dans la liste des éléments sélectionnés
      if (!selectedItems.includes(selectedOption)) {
        setSelectedItems([...selectedItems, selectedOption]);

        // Retirer l'option sélectionnée des options disponibles
        const updatedTableOptions = availableTableOptions.filter(tableOptions => tableOptions.value !== selectedOption);
        setAvailableTableOptions(updatedTableOptions);

        console.log(selectedItems)
    }
};

    // const location = useLocation()
    // console.log(location.pathname)

    const handleRemoveItem = (item) => {
        const updatedItems = selectedItems.filter(selectedItem => selectedItem !== item);
        setSelectedItems(updatedItems);
    }

    /* gestion des images */

    const [images, setImages] = useState([]); // Images sélectionnées par l'utilisateur
    const [previewImages, setPreviewImages] = useState([]); // Chemins d'accès aux images prévisualisées
    const [selectedImages, setSelectedImages] = useState([]);

    //ajouter une image dans la liste
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        // const files = event.target.files;
        const selectedImages = Array.from(files);

        // const filesImages = Array.from(event.target.files);
        const selectedImagesArray = [];
        
        // Met à jour les images sélectionnées
        setImages((prevImages) => [...prevImages, ...selectedImages]);
    };

    //retier une image dans la liste
    const handleImageRemove = (index) => {
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages.splice(index, 1);
          console.log(images)
          return updatedImages;
        });
      };

    //Ensuite, utilise l'objet FileReader pour lire les fichiers d'images en tant que données binaires.
    const readImageFile = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
    };

    //itérer sur le tableau images et lire chaque fichier d'image en utilisant la fonction readImageFile
    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        const imageDataPromises = images.map((image) => readImageFile(image));
        const imageDataArray = await Promise.all(imageDataPromises);
      
        // imageDataArray contient les données des images sous forme de tableau
      
        const jsonData = JSON.stringify(imageDataArray);
      
    };

    //recuperation de l'id de l'utilisateur
    const [user, setUser] = useState([])
    // const { user, setUser } = useAuth();

    const fetchUser = async () => {
        await axios.get(`http://localhost:8000/api/user`).then(({data}) =>
            setUser(data)
        )
    }

    useEffect(() => {
        fetchUser()
    },[])

    //preparetion et envoi des data en back-end
    const addProperty = async (e) => {
        e.preventDefault();

        const ul = document.getElementById('selectedItems');
        const elements = ul.getElementsByTagName('li');

        const listeJson = [];

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i].textContent;
            listeJson.push(element);
        }
        const listeJsonTexte = JSON.stringify(listeJson);

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

        // images
        
        // contact
        let inputFormPostContactName = document.getElementById('inputFormPostContactName').value
        let inputFormPostContactEmail = document.getElementById('inputFormPostContactEmail').value
        let inputFormPostPhone = document.getElementById('inputFormPostPhone').value


        const formData = new FormData()

        formData.append('id_user', parseInt(user.data.id))
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
        formData.append('agrement', listeJsonTexte)
        // formData.append('images', formDataImg)
        for (let i = 0; i < images.length; i++){
            formData.append('images[]', images[i]);
        }

        formData.append('contactName', inputFormPostContactName)
        formData.append('contactEmail', inputFormPostContactEmail)
        formData.append('contactPhone', inputFormPostPhone)
        // console.log(JSON.stringify(selectedItems))
        
        try {
            // console.log(images)
            const resp = await axios.post('http://localhost:8000/api/createProperties', formData)

            if (resp.status === 200) {
                document.location.href="/"
            } else {
                alert('Save failed')
                }
        } catch (error) {
                
        }
        // console.log(DetailsPost.getSelectedItems)
    }
        // console.log(tableJson)

    return(
    <>    
        <BlockImagePostPorperty/>
        <Container className="FormPostProperty" id="FormPostProperty">
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
                <>
                    <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                        <p className="basicInformation" id="basicInformation">Détails de la propriétés</p>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label className="labelBlockPost" id="labelDescription">Description</Form.Label>
                        <textarea name="inputFormPostDescription" type="text" className="inputFormPost inputFormPostDescription" id="inputFormPostDescription" placeholder="Donnez une brève description de votre produit" />
                    </Form.Group>
                    <label for="supplement" className="labelBlockPost"><b>Agréments</b></label>
                    <ul id="selectedItems" className="selected-items">
                        {selectedItems.map((item, index) => (
                            <li className="optionSelectCreateProp" onClick={() => handleRemoveItem(item)} key={index}>{item}</li>
                        ))}
                    </ul>
                    <Form.Select onChange={handleSelect} type="select" className="supplement" id="supplement" aria-label="" value="option2">

                        <option disabled value="Selectionnez tous les suplément que contient votre propriété">Selectionnez tous les suplément que contient votre propriété</option>
                        {
                            tableOptions.map ((option) => (
                                <option value={option.value} className="optionFormPost">{option.value}</option>
                            ))    
                        }
                    </Form.Select>
                </>

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
                <SubmitProperty/>
            </form>

        </Container>
    </>
    )
}

export default FormPostProperty