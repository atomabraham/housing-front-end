import { useEffect, useState } from 'react'
import '../../../Styles/Home/ContentProperty.css'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import { TbBellDollar } from 'react-icons/tb'
import { Bathroom, BathroomOutlined, BedroomParent, BedroomParentOutlined, BedroomParentRounded, BedroomParentSharp, BedroomParentTwoTone, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function ContentProperty() { 
    //recuperation des propriete

    const [Properties, setProperties] = useState([])

    const fetchProperties = async () => {
        await axios.get('http://localhost:8000/api/properties').then(({data}) => {
            setProperties(data);
        })
    }

    useEffect(() => {
        fetchProperties()
    }, [])


    // mettre les premieres lettres des mots d'une phrase en majuscule
    function capitalizeWords(sentence) {
        const words = sentence.split(' ');
      
        const capitalizedWords = words.map(word => {
          const firstLetter = word.charAt(0).toUpperCase();
          const restOfWord = word.slice(1);
      
          return firstLetter + restOfWord;
        });
      
        return capitalizedWords.join(' ');
    }

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
            <div className='ContentProperty'>
                <Row>
                    {Properties.map((property, index) => (
                        <div key={index} className="col-md-3 col-sm-6 my-3 ">
                            <div className='colPropertie'>
                                <img width="100%" height="300px" className='imageProperty' src={`http://localhost:8000/storage/images/properties/${property.image}`} alt="" />
                                <p className='statusProperty'>
                                    {capitalizeWords(property.propertyStatus)}
                                </p>
                                <p className='nameProperty'>{capitalizeWords(property.propertyName)}</p>
                                <p className='localizationProperty'>
                                    <svg className='iconLocalizationProperty' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <span className='spanLocalizationProperty'>{capitalizeWords(property.country)}, {capitalizeWords(property.city)}, {capitalizeWords(property.quartier)}</span>
                                </p>
                                <p className='priceProperty'>
                                    {addThousandSeparator(property.price)} XAF
                                    <FavoriteBorder className='iconFavorite'/>
                                </p>
                                <p className='manyDetail'>
                                    <BedroomParentOutlined className='iconBedRoom'/>
                                    {property.bathrooms} Chambres
                                    <span className='spanBathrooms'>
                                        <BathroomOutlined className='iconBathRoom'/>
                                        {property.bedrooms} Sales de bain
                                    </span>
                                </p>
                                <div className='linePoperty'>
                                    {/* linePoperty */}
                                </div>
                                <row className="rowLinkForDetail">
                                    <Link className='linkForDetail' to={`/property/${property.id}`}>DETAILS</Link>
                                </row>
                            </div>
                        </div>
                    ))}
                </Row>

            </div>


        </>
    )
}

export default ContentProperty