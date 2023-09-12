import { useParams } from 'react-router-dom'
import '../../Styles/ShowProperty.css'
import { useEffect, useState } from 'react';
import axios from '../Authentification/axios';
import { Bathtub, Bed, Hotel } from '@mui/icons-material';
import Navbar from '../ElementsPages/Banners/Navbar';
import { Form } from 'react-bootstrap';
import ContactProprio from '../ElementsPages/ShowProperty/ContactProprio';
import { Carousel } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaBath, FaBed, FaExpand } from 'react-icons/fa';
import { FaHeart, FaShareAlt, FaRegHeart  } from 'react-icons/fa';
import LocalisationShowProperty from '../ElementsPages/ShowProperty/LocalisationShowProperty';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

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


    //icon de sauvegarde et de partage
    // ...

    // const IconSave = () => <FaHeart />;
    const IconSave = () => <FaRegHeart  />;
    const IconShare = () => <FaShareAlt />;

    //le formulaire devient fixe a un certain niveau
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const threshold = document.documentElement.scrollHeight - window.innerHeight - 200; // Ajustez la valeur "200" selon vos besoins
        // const threshold = 100
        setIsFixed(scrollTop > threshold);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let lenght = 0

    return(

        <>
            <Navbar/>
            <div className='container'>
                {
                    property.map(prop => (
                        <>
                        {/* {console.log(prop.agrement)} */}
                        <div className="row">
                            <div clasName="d-flex">
                                    <Carousel className="main-carousel">
                                        {prop.images.map(image => (
                                            <Carousel.Item key={prop.id}>
                                                <img className="d-block w-100 imageShowProperty" src={`http://localhost:8000/storage/${image}`} alt={`Property Image ${prop.id + 1}`}/>  
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>   
                                    <div className="carousel-controls">
                                        <button className="carousel-control-prev">
                                        <BsChevronLeft />
                                        </button>
                                        <button className="carousel-control-next">
                                        <BsChevronRight />
                                        </button>
                                    </div>
                            </div>
                            {/* <div className='row property-header'> */}
                            <div className="pt-2 property-actions">
                                    <div className="spacer"></div>
                                    <button className="action-button">
                                        <IconSave />
                                    </button>
                                    <button className="action-button">
                                        <IconShare /> 
                                    </button>
                            </div>
                            <div className="left-column">
                                {/* </div> */}
                                <div className="row">
                                    <h2 className="textShowProperty showNameProperty pt-5">{prop.propertyName}</h2>
                                    <p className="textShowProperty showLocalisationProperty">{prop.country}, {prop.city} - {prop.quartier}</p>
                                    {prop.propertyStatus==="A vendre" ? (
                                        <p className="textShowProperty showPriceProperty">{addThousandSeparator(prop.price)} FCFA</p>
                                        ) : (
                                        <p className="textShowProperty showPriceProperty">{addThousandSeparator(prop.price)} FCFA / Mois</p>
                                    )}
                                </div>

                                <div className="d-flex align-items-center detailCard detailShowProperty">
                                    <hr />
                                    <div className='d-flex'>
                                        <div className="icon-container showIconProperty">
                                            <FaBed size={16} className="iconLocalizationCard" />
                                        </div>
                                        <p className="card-text showbedbadProperty">{prop.bathrooms} Chambres</p>
                                        <div className="icon-container showIconProperty margingDetailShowProp">
                                            <FaBath size={16} className="iconLocalizationCard" />
                                        </div>
                                        <p className="card-text showbedbadProperty">{prop.bedrooms} Douches</p>
                                        {property.area !== null && (
                                            <>
                                                <div className="icon-container showIconProperty">
                                                    <FaExpand size={16} className="iconLocalizationCard" />
                                                </div>
                                                <p className="card-text showbedbadProperty">{prop.area} m²</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                                
                                <div className='row'>
                                    <LocalisationShowProperty/>
                                </div>

                                <div className='row'>
                                    <p className='titleDescriptionShowProperty'>Description</p>
                                    <p className='showDescriptionProperty'>{prop.description}</p>
                                </div>
                                <div className='row'>
                                    {prop.agrement.lenght == 0 ? (
                                        <></>
                                        ) : (
                                        <div className='row ifAgrementExist'>
                                            <p className='titleAgrementShowProperty'>Commodités</p>
                                            {
                                                prop.agrement.map((agrement, index) => (
                                                    <div className='col-md-6 agrementShowProerty' key={index}>
                                                        <p>{agrement}</p>
                                                    </div> 
                                                ))
                                            }
                                                
                                            
                                        </div>
                                    )}
                                </div>
                                
                                <div className='row'>
                                    <p className='showProprioProperty'>Publié par : {prop.contactName}</p>
                                    <p className='showCreateAtProperty'>Date de publication : {moment(prop.created_at).format('DD-MM-YYYY')} à {moment(prop.created_at).format('HH:MM')} ({moment(prop.created_at).fromNow()})</p>
                                </div>
                            </div>
                            <div className={`right-column ${isFixed ? 'fixed-column' : ''}`}>
                                <ContactProprio/>
                            </div> 
                        </div>
                    </>
                ))
                }
            </div>
        </>
    )
}

export default ShowProperty