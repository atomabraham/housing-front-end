import { useEffect, useState } from "react";
import "../../../Styles/Home/ContentProperty.css";
import axios from "axios";
import { Row } from "react-bootstrap";
import { TbBellDollar } from "react-icons/tb";
import {
  Bathroom,
  BathroomOutlined,
  BedroomParent,
  BedroomParentOutlined,
  BedroomParentRounded,
  BedroomParentSharp,
  BedroomParentTwoTone,
  Favorite,
  FavoriteBorder,
  Hotel,
} from "@mui/icons-material";
import { FaBath, FaBed, FaExpand, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { AddThousandSeparator } from "../../Controllers/Config";

function ContentProperty() {
  //recuperation des propriete

  const [Properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    await axios.get("http://localhost:8000/api/properties").then(({ data }) => {
      setProperties(data);
    });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // mettre les premieres lettres des mots d'une phrase en majuscule
  function capitalizeWords(sentence) {
    const words = sentence.split(" ");

    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);

      return firstLetter + restOfWord;
    });

    return capitalizedWords.join(" ");
  }

  //ajouter un point apres 3 chiffres
  function addThousandSeparator(number) {
    // Convertir le nombre en chaîne de caractères
    const numberString = number.toString();

    // Utiliser une expression régulière pour ajouter un point après chaque groupe de trois chiffres
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return formattedNumber;
  }

  let i = 0;

  //configuration du caroussel
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //   const viewsProperty = async

  return (
    <>
      <div className="ContentProperty">
        <Row>
          {/* <img width="100%" height="300px" className='imageProperty' src={`http://localhost:8000/storage/${property.images[0]}`} alt="" /> */}
          {Properties.map((property, index) => (
            <div
              key={property.id}
              className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 my-3"
            >
              <div className="property-card">
                <div className="card imageCard carousel slide">
                  {property.images.length == 1 ? (
                    <div class="carousel-item active">
                      <img
                        width="100%"
                        height="350px"
                        className="imageProperty card-img-top mb-3 d-block w-100"
                        src={`http://localhost:8000/storage/${property.images[i]}`}
                        alt=""
                      />
                    </div>
                  ) : (
                    <Carousel
                      interval={null}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {property.images.map((image) => (
                        <Carousel.Item key={image}>
                          <img
                            width="100%"
                            height="350px"
                            className="imageProperty card-img-top mb-3 d-block w-100"
                            src={`http://localhost:8000/storage/${image}`}
                            alt=""
                          />
                        </Carousel.Item>
                      ))}
                      {/* {isHovered && (
                                                    <>
                                                    <Carousel.Control
                                                        className="carousel-control-prev"
                                                        direction="prev"
                                                        icon={<span className="carousel-control-prev-icon" />}
                                                    />
                                                    <Carousel.Control
                                                        className="carousel-control-next"
                                                        direction="next"
                                                        icon={<span className="carousel-control-next-icon" />}
                                                    />
                                                    </>
                                                )} */}
                    </Carousel>
                  )}
                </div>
                <Link
                  to={`/property/${property.id}`}
                  className="linkShowProperty"
                >
                  <div className="card-body">
                    <div className="d-flex justify-content-between mt-2">
                      <h5 className="card-title namePropertyCard">
                        {property.propertyName}
                      </h5>
                      <p className="card-text statusPropertyCard">
                        {property.propertyStatus}
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-container">
                        <FaMapMarkerAlt className="iconLocalizationCard" />
                      </div>
                      <p className="card-text">
                        {property.country},{property.city}-{property.quartier}
                      </p>
                    </div>
                    <div className="d-flex align-items-center detailCard">
                      <div className="d-flex">
                        <div className="icon-container">
                          <FaBed size={16} className="iconLocalizationCard" />
                        </div>
                        <p className="card-text">{property.bathrooms}</p>
                        <div className="icon-container">
                          <FaBath size={16} className="iconLocalizationCard" />
                        </div>
                        <p className="card-text">{property.bedrooms}</p>
                        {property.area !== null && (
                          <>
                            <div className="icon-container">
                              <FaExpand
                                size={16}
                                className="iconLocalizationCard"
                              />
                            </div>
                            <p className="card-text">{property.area} m²</p>
                          </>
                        )}
                      </div>
                    </div>
                    <p className="card-text priceCard">
                      {property.propertyStatus === "A vendre" ? (
                        <>{addThousandSeparator(property.price)} FCFA</>
                      ) : (
                        <>{addThousandSeparator(property.price)} FCFA/Mois</>
                      )}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Row>
      </div>
    </>
  );
}

export default ContentProperty;
