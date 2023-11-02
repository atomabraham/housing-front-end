import "../../../Styles/Home/FirstBlockHome.css";
import { useEffect, useState } from "react";
import axios from "../../Authentification/axios";
import { Row } from "react-bootstrap";
import { TbBellDollar } from "react-icons/tb";
import {
  AccountBalance,
  AddBusiness,
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
  Roofing,
} from "@mui/icons-material";
import { FaBath, FaBed, FaExpand, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { AddThousandSeparator } from "../../Controllers/Config";
import Footer from "../Footer/Footer";

function FirstBlockHome() {
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

  //nbre appartement
  let appartements = Properties.filter(function (property) {
    return property.propertyType === "Appartement";
  });

  let nbrAppartements = appartements.length;

  //nbre maison
  let maisons = Properties.filter(function (property) {
    return property.propertyType === "Maison";
  });

  let nbrMaisons = maisons.length;

  //nbre maison
  let villas = Properties.filter(function (property) {
    return property.propertyType === "Villa";
  });

  let nbrVilla = villas.length;

  //nbre studio
  let studio = Properties.filter(function (property) {
    return property.propertyType === "Studio";
  });

  let nbrStudio = studio.length;

  //nbre chambre
  let chambres = Properties.filter(function (property) {
    return property.propertyType === "Chambre";
  });

  let nbrChambres = chambres.length;

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

  const fourProperties = Properties.slice(0, 4);

  return (
    <>
      {Properties ? (
        <>
          {/* premiere section */}

          <section className="FirstBlockHome">
            <div className="textFrisBlockHome">
              <h2 className="tiltleWelcomeHome">BIENVENUE CHEZ HOUSING</h2>
              <p>Trouvez votre bien immobilier idéal en quelques clics !</p>
              {/* <p>
                Inscrivez-vous dès aujourd'hui pour recevoir <br /> des
                notifications sur les nouvelles annonces.
              </p> */}
            </div>
            <div className="opacityFirstBlock"></div>

            <span className="skewed"></span>
          </section>

          {/* <div className="opacityFirstBlockHome"></div> */}

          {/* les dernier biens poster */}
          <div className="blockLastProperty">
            <h2 className="titleLastProperty">Nos Derniers Biens</h2>

            <Row>
              {/* <img width="100%" height="300px" className='imageProperty' src={`http://localhost:8000/storage/${property.images[0]}`} alt="" /> */}
              {fourProperties.map((property, index) => (
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
                            {property.country},{property.city}-
                            {property.quartier}
                          </p>
                        </div>
                        <div className="d-flex align-items-center detailCard">
                          <div className="d-flex">
                            <div className="icon-container">
                              <FaBed
                                size={16}
                                className="iconLocalizationCard"
                              />
                            </div>
                            <p className="card-text">{property.bathrooms}</p>
                            <div className="icon-container">
                              <FaBath
                                size={16}
                                className="iconLocalizationCard"
                              />
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
                            <>
                              {addThousandSeparator(property.price)} FCFA/Mois
                            </>
                          )}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Row>

            <Link
              to="/search?world=&status=&type=&city="
              className="linkShowMoreHome"
            >
              VOIR PLUS &raquo;
            </Link>
          </div>

          {/* les services */}
          <div className="blockServices">
            <div className="opacityBlockServices">
              <span className="skewed2"></span>
              <span className="skewed3"></span>
              {/* <p className="titleServiceHome">Nos Services</p> */}
              <p className="textServiceHome">
                Nous vous proposons une large gamme de services pour répondre à
                vos besoins en immobilier.
              </p>
              <div className="row blockListServicesHome">
                <div className="col-md-3 my-3 blockLinkServiceHome blockServiceBuiyHome">
                  <Link
                    to={`/search?world=&status=${"A vendre"}&type=&city=`}
                    className="linkBuyHome"
                  >
                    <div className="blockLinkBuyHome">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-house-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                        <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.707l-.646.646V10.5a.5.5 0 0 0-1 0v2.793l-.646-.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0Z" />
                      </svg>
                      <p>
                        VOUS CHERCHEZ A <br /> ACHETER
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 my-3 blockLinkServiceHome blockServiceSellyHome">
                  <Link to={`/CreatePost`} className="linkBuyHome">
                    <div className="blockLinkBuyHome">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-house-up"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z" />
                      </svg>
                      <p>VENDEZ VOTRE MAISON</p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 my-3 blockLinkServiceHome blockServiceRentHome">
                  <Link
                    to={`/search?world=&status=${"A Louer"}&type=&city=`}
                    className="linkBuyHome"
                  >
                    <div className="blockLinkBuyHome">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-house-exclamation"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                      </svg>
                      <p>LOUER UN LOGEMENT</p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 my-3 blockLinkServiceHome blockServiceHelpHome">
                  <Link to={`/contactUs`} className="linkBuyHome">
                    <div className="blockLinkBuyHome">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-question-octagon"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                      </svg>
                      <p>BESOIN D'AIDE ?</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* les categories */}
          <div className="blockCategories">
            <h2 className="titleCategorieHome">Nos Catégories</h2>
            <p className="textCategorieHome">
              Choisissez une catégories pour afficher les biens qui
              correspondent
            </p>
            <div className="row blockListCategorie">
              <div className="col-md-4 my-3">
                <Link
                  to={`/search?world=&status=&type=${"Appartement"}&city=`}
                  className="linkBuyHome"
                >
                  <div className="aCategorieHome categorieApprtement">
                    <div className="opacityCategorie">
                      <p className="quantityProperty">
                        {addThousandSeparator(nbrAppartements)} Propriétés
                      </p>
                      <p className="nameCategorie">Appartement</p>
                      <p className="seeCategorie">Afficher &raquo;</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 my-3">
                <Link
                  to={`/search?world=&status=&type=${"Maison"}&city=`}
                  className="linkBuyHome"
                >
                  <div className="aCategorieHome categorieMaison">
                    <div className="opacityCategorie">
                      <p className="quantityProperty">
                        {addThousandSeparator(nbrMaisons)} Propriétés
                      </p>
                      <p className="nameCategorie">Maison</p>
                      <p className="seeCategorie">Afficher &raquo;</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 my-3">
                <Link
                  to={`/search?world=&status=&type=${"Villa"}&city=`}
                  className="linkBuyHome"
                >
                  <div className="aCategorieHome categorieMaison">
                    <div className="opacityCategorie">
                      <p className="quantityProperty">
                        {addThousandSeparator(nbrVilla)} Propriétés
                      </p>
                      <p className="nameCategorie">Villa</p>
                      <p className="seeCategorie">Afficher &raquo;</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 my-3">
                <Link
                  to={`/search?world=&status=&type=${"Studio"}&city=`}
                  className="linkBuyHome"
                >
                  <div className="aCategorieHome categorieStudio">
                    <div className="opacityCategorie">
                      <p className="quantityProperty">
                        {addThousandSeparator(nbrStudio)} Propriétés
                      </p>
                      <p className="nameCategorie">Studio</p>
                      <p className="seeCategorie">Afficher &raquo;</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 my-3">
                <Link
                  to={`/search?world=&status=&type=${"Chambre"}&city=`}
                  className="linkBuyHome"
                >
                  <div className="aCategorieHome categorieChambres">
                    <div className="opacityCategorie">
                      <p className="quantityProperty">
                        {addThousandSeparator(nbrChambres)} Propriétés
                      </p>
                      <p className="nameCategorie">Chambres</p>
                      <p className="seeCategorie">Afficher &raquo;</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 my-3">
                <Link
                  to={`/search?world=&status=&type=${"Appartement"}&city=`}
                  className="linkBuyHome"
                >
                  <div className="aCategorieHome categorieApprtement">
                    <div className="opacityCategorie">
                      <p className="quantityProperty">
                        {addThousandSeparator(nbrAppartements)} Propriétés
                      </p>
                      <p className="nameCategorie">Appartement</p>
                      <p className="seeCategorie">Afficher &raquo;</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Nous contacter */}
          <div className="blockContactHome">
            <div className="opacityBlockContactHome"></div>
          </div>

          {/* <Footer */}
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default FirstBlockHome;
