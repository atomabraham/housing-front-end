import { useParams } from 'react-router-dom'
import '../../Styles/ShowProperty.css'
import { useEffect, useState } from 'react';
import axios from '../Authentification/axios';
import { Bathtub, Bed, Hotel } from '@mui/icons-material';
import FirstBanner from '../ElementsPages/Banners/FirstBanner';
import { Form } from 'react-bootstrap';
import ContactProprio from '../ElementsPages/ShowProperty/ContactProprio';

function ShowProperty () {

    const {id} = useParams()

    const [property, setProperty] = useState([])
    const fetchProperty = async () => {
        await axios.get(`http://localhost:8000/api/property/${id}`).then(({ data }) => {
        setProperty(data);
        });
    };

    useEffect(() => {
        fetchProperty();
    }, []);

    //ajouter un point apres 3 chiffres
    function addThousandSeparator(number) {
        // Convertir le nombre en chaîne de caractères
        const numberString = number.toString();
      
        // Utiliser une expression régulière pour ajouter un point après chaque groupe de trois chiffres
        const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      
        return formattedNumber;
    }

    return(

        <>
            <FirstBanner/>
            <div className='container'>
                {
                property.map(prop => (
                    <>
                        <div className='row divShowImageProp'>
                            <img className='showImageProperty' src={`http://localhost:8000/storage/images/properties/${prop.image}`} alt=''/>
                        </div>
                        <div className='row'>
                            <p className='showNameProperty'>{prop.propertyName}</p>
                        </div>
                        <div className='row'>
                            <p className='showLocalizationProperty'>{prop.country}, {prop.city}</p>
                        </div>
                        <div className='row'>
                            <p className='showPriceProperty'>{addThousandSeparator(prop.price)} FCFA</p>
                        </div>
                        <div className='row lineNameProperty1'></div>
                        <div className='positionFlex'>
                            <div className='row blockLeftInformation'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <p className='showBedroomsProperty'>
                                            <Hotel className='iconShowBedrooms'/>
                                            {prop.bedrooms} chambres
                                        </p>
                                    </div>
                                    <div className='col-md-2'>
                                        <p className='showBadroomsProperty'>
                                            <svg className='iconShowBadrooms' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5h13v2a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-2h0Zm7-6a2 2 0 0 0-4 0v6m4-4v1"/></svg>
                                            {prop.bathrooms} sales de bains
                                        </p>
                                    </div>
                                    <div className='col-md-2'>
                                        <p className='showAreaProperty'>
                                            {prop.area} m²
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <button className='askQuestion pt-2 pb-2'>Poser une question</button>
                                    <button className='searchPropertyButton pt-2 pb-2'>Partager</button>
                                </div>
                                <div className='lineNameProperty'></div>
                                <div className='row'>
                                    <p className='showTitleDescriptionProperty'>Description</p>
                                    <p className='showDescriptionProperty'>{prop.description}</p>
                                </div>
                                <div className='row blockAgrement'>
                                    <p className='showTitleAgrementroperty'>Agréments</p>

                                </div>
                                <div className='row mt-2'>
                                    <p className='text-left'>
                                        <span>Propriétaire: </span>
                                        <span>{prop.contactName}</span>
                                    </p>
                                    <p className='text-left'>
                                        <span>Date de publication: </span>
                                        <span>{prop.created_at}</span>
                                    </p>
                                    <p className='textAboutShowProp'>Vous voulez en savoir plus sur cette propriété ?</p>
                                    <div className='row block2ContactProprio'>
                                        <div className='col-md-6'>
                                            <ContactProprio/>
                                        </div>
                                        <div className='col-md-6'>
                                            <img className='showImageProperty2' src={`http://localhost:8000/storage/images/properties/${prop.image}`} alt=''/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* contact proprietaire */}
                            <div className='row blockRightContact'>
                                <ContactProprio/>
                            </div>
                        </div>
                        <p className='similareTilteShowProp mt-2'>Annonces similaire</p>
                    </>
                ))
                }
            </div>
        </>
    )
}

export default ShowProperty