import { useParams, Link } from "react-router-dom";
import "../../Styles/ShowProperty.css";
import { useEffect, useState } from "react";
import axios from "../Authentification/axios";
import { Bathtub, Bed, Hotel } from "@mui/icons-material";
import Navbar from "../ElementsPages/Banners/Navbar";
import { Form, Modal, Row } from "react-bootstrap";
import ContactProprio from "../ElementsPages/ShowProperty/ContactProprio";
import { Carousel } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaBath, FaBed, FaExpand, FaMapMarkerAlt } from "react-icons/fa";
import { FaHeart, FaShareAlt, FaRegHeart } from "react-icons/fa";
import LocalisationShowProperty from "../ElementsPages/ShowProperty/LocalisationShowProperty";
import moment from "moment";
import "moment/locale/fr";
import SingIn from "../SingIn-SingUp/SingIn/SingIn";
import Footer from "../ElementsPages/Footer/Footer";
import emailjs from "emailjs-com";
import logo from "../../Assets/Images/logo 3.png";

// import nodemailer from "nodemailer";

moment.locale("fr");

function ShowProperty() {
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

  //recuperation de la propriete a afficher

  const { id } = useParams();

  const [property, setProperty] = useState([]);
  const fetchProperty = async () => {
    await axios
      .get(`http://localhost:8000/api/property/${id}`)
      .then(({ data }) => {
        setProperty(data);
      });
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  const viewProperty = async () => {
    axios.post(`http://localhost:8000/api/viewProperties/${id}`);
  };
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      //   const viewProperty = async () => {
      //     axios.put(`http://localhost:8000/api/viewProperties/${id}`);
      //   };

      console.log("La page est entièrement chargée !");
    });
  }, []);

  //ajouter un point apres 3 chiffres
  function addThousandSeparator(number) {
    // Convertir le nombre en chaîne de caractères
    const numberString = number.toString();

    // Utiliser une expression régulière pour ajouter un point après chaque groupe de trois chiffres
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return formattedNumber;
  }

  // const IconSave = () => <FaHeart />;
  const IconSave = () => <FaRegHeart />;
  const IconShare = () => <FaShareAlt />;

  //le formulaire devient fixe a un certain niveau
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const threshold =
      document.documentElement.scrollHeight - window.innerHeight - 200; // Ajustez la valeur "200" selon vos besoins
    // const threshold = 100
    setIsFixed(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let lenght = 0;

  //verifier si un utilisateur est connecter

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Effectue une requête HTTP GET à l'API pour récupérer les données de l'utilisateur
    axios
      .get("http://localhost:8000/api/user")
      .then((response) => {
        setUser(response.data.data); // Affecte les données de l'utilisateur à la variable d'état "user"
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //les constances du modal
  const [show, setShow] = useState(false);
  const [showSingIn, setShowSingIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSingin = () => setShowSingIn(false);
  const handleShowSingIn = () => setShowSingIn(true);

  //recuperation des information de l'utilisateur interessé
  const UserInteressed = async (e) => {
    let inputNameInteressed = document.getElementById(
      "inputNameInteressed"
    ).value;
    let inputSecondNameInteressed = document.getElementById(
      "inputSecondNameInteressed"
    ).value;
    let inputEmailInteressed = document.getElementById(
      "inputEmailInteressed"
    ).value;
    let inputPhoneInteressed = document.getElementById(
      "inputPhoneInteressed"
    ).value;
    let inputMessageInteressed = document.getElementById(
      "inputMessageInteressed"
    ).value;
    let inputDateRendezvous = document.getElementById(
      "inputDateRendezvous"
    ).value;
    let inputPropertyEmailReserveur = document.getElementById(
      "inputPropertyIdUser"
    ).value;
    let inputPropertyNameUser = document.getElementById(
      "inputPropertyNameUser"
    ).value;

    const formData = new FormData();

    formData.append("id_property", property[0].id);
    formData.append("id_reserveur", user.id);
    formData.append("id_proprio", property[0].id_user);
    formData.append("id_proprio", property[0].id_user);
    formData.append("name", user.name);
    formData.append("secondname", user.secondname);
    formData.append("email_reserveur", user.email);
    formData.append("phone_reserveur", user.phone);
    formData.append("commentaire", inputMessageInteressed);
    formData.append("rendezvous", inputDateRendezvous);

    // variable de l'email
    e.preventDefault();
    let date = new Date();

    const templateParamsReserveur = {
      from_name: "HOUSING",
      from_email: "housingatom@gmail.com",
      subject: "Confirmation de reservation",
      // message: "Salut",
      to_name: inputSecondNameInteressed,
      to_email: inputEmailInteressed,
      logo: logo,
      date:
        date.getDate() +
        "/" +
        date.getMonth() +
        1 +
        "/" +
        date.getFullYear() +
        "( " +
        date.getHours().toString().padStart(2, "0") +
        "H" +
        date.getMinutes().toString().padStart(2, "0") +
        " )",
    };

    const templateParamsProprio = {
      from_name: "HOUSING",
      from_email: "housingatom@gmail.com",
      subject: "Reservation de l'un de vos biens",
      // message: "Salut",
      to_name: inputPropertyNameUser,
      name_reserveur: inputNameInteressed,
      secondname_reserveur: inputSecondNameInteressed,
      phone: inputPhoneInteressed,
      email: inputPropertyEmailReserveur,
      comment: inputMessageInteressed,
      to_email: inputPropertyEmailReserveur,
      date:
        date.getDate() +
        "/" +
        date.getMonth() +
        1 +
        "/" +
        date.getFullYear() +
        "( " +
        date.getHours() +
        "H" +
        date.getMinutes() +
        " )",
      rendez_vous: inputDateRendezvous,
    };

    const resp = await axios.post(
      "http://localhost:8000/api/reservation",
      formData
    );
    if (resp.status == 200) {
      const resp2 = await axios.post(
        `http://localhost:8000/api/updatePropertyReserved/${property[0].id}`
      );

      if (resp2.status == 200) {
        //message email du proprio
        const email2 = emailjs
          .send(
            "service_y2agyhj",
            "template_wcun4bp",
            templateParamsProprio,
            "-B2khBw2yyOnOQ0kS"
          )
          .then(
            (result) => {
              // message du du reserveur
              const email1 = emailjs
                .send(
                  "service_y2agyhj",
                  "template_0lvthas",
                  templateParamsReserveur,
                  "-B2khBw2yyOnOQ0kS"
                )
                .then(
                  (result) => {
                    alert("Votre reservation a bien été prise en compte");
                    document.location.href = "/";
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    }

    console.log(formData);
  };

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
      <Navbar />
      <div className="container blockShowProperty" onLoad={viewProperty}>
        {property.map((prop) => (
          <>
            {/* {console.log(prop.agrement)} */}
            <div className="row">
              <div clasName="d-flex">
                <Carousel className="main-carousel">
                  {prop.images.map((image) => (
                    <Carousel.Item key={prop.id}>
                      <img
                        className="d-block w-100 imageShowProperty"
                        src={`http://localhost:8000/storage/${image}`}
                        alt={`Property Image ${prop.id + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                {/* <div className="carousel-controls">
                                        <button className="carousel-control-prev">
                                        <BsChevronLeft />
                                        </button>
                                        <button className="carousel-control-next">
                                        <BsChevronRight />
                                        </button>
                                    </div> */}
              </div>
              {/* <div className='row property-header'> */}
              <div className="pt-2 property-actions">
                <div className="spacer"></div>
                <Link
                  to={`/edit/property/${prop.id}`}
                  className="action-button"
                >
                  <IconSave />
                </Link>
                <button className="action-button">
                  <IconShare />
                </button>
              </div>
              <div className="left-column">
                {/* </div> */}
                <div className="row">
                  <h2 className="textShowProperty showNameProperty pt-5">
                    {prop.propertyName}
                  </h2>
                  <p className="textShowProperty showLocalisationProperty">
                    {prop.country}, {prop.city} - {prop.quartier}
                  </p>
                  {prop.propertyStatus === "A vendre" ? (
                    <p className="textShowProperty showPriceProperty">
                      {addThousandSeparator(prop.price)} FCFA
                    </p>
                  ) : (
                    <p className="textShowProperty showPriceProperty">
                      {addThousandSeparator(prop.price)} FCFA / Mois
                    </p>
                  )}
                </div>

                <div className="d-flex align-items-center detailCard detailShowProperty">
                  <hr />
                  <div className="d-flex">
                    <div className="icon-container showIconProperty">
                      <FaBed size={16} className="iconLocalizationCard" />
                    </div>
                    <p className="card-text showbedbadProperty">
                      {prop.bathrooms} Chambres
                    </p>
                    <div className="icon-container showIconProperty margingDetailShowProp">
                      <FaBath size={16} className="iconLocalizationCard" />
                    </div>
                    <p className="card-text showbedbadProperty">
                      {prop.bedrooms} Douches
                    </p>
                    {property.area !== null && (
                      <>
                        <div className="icon-container showIconProperty">
                          <FaExpand
                            size={16}
                            className="iconLocalizationCard"
                          />
                        </div>
                        <p className="card-text showbedbadProperty">
                          {prop.area} m²
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="row">
                  <LocalisationShowProperty />
                </div>

                <div className="row">
                  <p className="titleDescriptionShowProperty">Description</p>
                  <p className="showDescriptionProperty">{prop.description}</p>
                </div>
                <div className="row">
                  {prop.agrement.lenght == 0 ? (
                    <></>
                  ) : (
                    <div className="row ifAgrementExist">
                      <p className="titleAgrementShowProperty">Commodités</p>
                      {prop.agrement.map((agrement, index) => (
                        <div
                          className="col-md-6 agrementShowProerty"
                          key={index}
                        >
                          <p>{agrement}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="row">
                  <p className="showProprioProperty">
                    Publié par : {prop.contactName}
                  </p>
                  <p className="showCreateAtProperty">
                    Date de publication :{" "}
                    {moment(prop.created_at).format("DD-MM-YYYY")} à{" "}
                    {moment(prop.created_at).format("HH:MM")} (
                    {moment(prop.created_at).fromNow()})
                  </p>
                </div>

                <Form.Control
                  type="hidden"
                  className="inputFormPost inputFormPostBetRoom"
                  id="inputPropertyIdUser"
                  placeholder="Entrer votre nom"
                  value={prop.contactEmail}
                />
                <Form.Control
                  type="hidden"
                  className="inputFormPost inputFormPostBetRoom"
                  id="inputPropertyNameUser"
                  placeholder="Entrer votre nom"
                  value={prop.contactName}
                />
                <div className="divInteresdToProperty">
                  {user ? (
                    <>
                      <Link
                        to="#"
                        onClick={handleShow}
                        className="linkToHome"
                        id="interesdToProperty"
                      >
                        Je suis interessé
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="#"
                        onClick={handleShowSingIn}
                        className="linkToHome  interesdToPropertyc"
                        id="interesdToProperty"
                      >
                        Je suis interessé
                      </Link>
                    </>
                  )}
                </div>

                {/* les biens similaires */}
                <div className="blockLastProperty">
                  <h2 className="titleLastProperty">Biens similaires</h2>

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
                                  <p className="card-text">
                                    {property.bathrooms}
                                  </p>
                                  <div className="icon-container">
                                    <FaBath
                                      size={16}
                                      className="iconLocalizationCard"
                                    />
                                  </div>
                                  <p className="card-text">
                                    {property.bedrooms}
                                  </p>
                                  {property.area !== null && (
                                    <>
                                      <div className="icon-container">
                                        <FaExpand
                                          size={16}
                                          className="iconLocalizationCard"
                                        />
                                      </div>
                                      <p className="card-text">
                                        {property.area} m²
                                      </p>
                                    </>
                                  )}
                                </div>
                              </div>
                              <p className="card-text priceCard">
                                {property.propertyStatus === "A vendre" ? (
                                  <>
                                    {addThousandSeparator(property.price)} FCFA
                                  </>
                                ) : (
                                  <>
                                    {addThousandSeparator(property.price)}{" "}
                                    FCFA/Mois
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
              </div>
            </div>
          </>
        ))}
        <>
          {/* modal pour connexion */}
          {user ? (
            <>
              <Modal show={show} onHide={handleClose} id="login">
                <Modal.Header closeButton>
                  <p className="textInteressed">
                    Veuillez renseigner les informations suivantes
                  </p>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <div className="col-sm-12">
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="labelBlockPost"
                          id="labelBlockPostBetRooms"
                        >
                          Nom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="inputFormPost inputFormPostBetRoom"
                          id="inputNameInteressed"
                          placeholder="Entrer votre nom"
                          value={user.name}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="labelBlockPost"
                          id="labelBlockPostBadRooms"
                        >
                          Prénom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="inputFormPost inputFormPostBadRoom"
                          id="inputSecondNameInteressed"
                          // placeholder="Entrer votre prénom"
                          value={user.secondname}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="labelBlockPost"
                          id="labelBlockPostBetRooms"
                        >
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="inputFormPost inputFormPostBetRoom"
                          id="inputEmailInteressed"
                          placeholder="Entrer votre email"
                          value={user.email}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="labelBlockPost"
                          id="labelBlockPostBadRooms"
                        >
                          Téléphone
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="inputFormPost inputFormPostBadRoom"
                          id="inputPhoneInteressed"
                          // placeholder="Entrer votre prénom"
                          value={user.phone}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="labelBlockPost"
                          id="labelBlockPostBadRooms"
                        >
                          Message ou commentaires (facultatif)
                        </Form.Label>
                        <textarea
                          type="text"
                          className="inputFormPost inputFormPostBadRoom"
                          id="inputMessageInteressed"
                        ></textarea>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="labelBlockPost"
                          id="labelBlockPostBadRooms"
                        >
                          Comment voulez-vous etre contacter ?
                        </Form.Label>
                        <select
                          type="text"
                          className="inputFormPost inputFormPostBadRoom"
                          id="inputContactMethodInteressed"
                        >
                          <option value="email" selected>
                            Email
                          </option>
                          <option value="téléphone">Téléphone</option>
                        </select>
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="labelBlockPost"
                          id="labelBlockPostBadRooms"
                        >
                          Prendre un rendez-vous
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="inputFormPost inputFormPostBadRoom"
                          id="inputDateRendezvous"
                          // placeholder="Entrer votre prénom"
                          // value={user.phone}
                        />
                      </Form.Group>
                    </div>
                    <button
                      type="button"
                      className="submitInteressedInformation"
                      id="submitInteressedInformation"
                      onClick={UserInteressed}
                    >
                      Valider
                    </button>
                  </div>
                </Modal.Body>
              </Modal>
            </>
          ) : (
            <>
              {/*modal connexion*/}
              <Modal show={show} onHide={handleClose} id="login">
                <SingIn />
              </Modal>
            </>
          )}
        </>
      </div>
      <Footer />
    </>
  );
}

export default ShowProperty;
