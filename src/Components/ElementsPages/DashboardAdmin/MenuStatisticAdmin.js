import { useEffect, useRef, useState } from "react";
import "../../../Styles/DashboardAdmin/MenuStatisticAdmin.css";
import axios from "../../Authentification/axios";
import {
  AdminPanelSettings,
  BorderColor,
  CheckBoxRounded,
  ConfirmationNumber,
  ContactEmergency,
  DeleteSweep,
  Favorite,
  Home,
  Lock,
  LockOpen,
  People,
  Person,
  Person2,
  PostAdd,
  Save,
  Sell,
} from "@mui/icons-material";
import { Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function MenuStatisticAdmin() {
  //liste de tous les utilisateur
  const [Users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await axios.get("http://localhost:8000/api/users").then(({ data }) => {
      setUsers(data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  var utilisateursActif = Users.filter(function (utilisateur) {
    return utilisateur.active === "true";
  });

  let nbreUtilisateurActif = utilisateursActif.length;

  var utilisateursAdmin = Users.filter(function (utilisateur) {
    return utilisateur.role === "Admin";
  });

  var nombreUtilisateursAdmin = utilisateursAdmin.length;

  //propriete
  const [Properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    await axios
      .get("http://localhost:8000/api/allPropertie")
      .then(({ data }) => {
        setProperties(data);
      });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // compter les biens vendu
  let bienVendue = Properties.filter(function (property) {
    return property.vendu === "true";
  });

  let nbrBienVendus = bienVendue.length;

  // compter les bien de janvier
  let bienJanvier = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 0;
  });

  let nbrBienJanvier = bienJanvier.length;

  // compter les bien de Fevrier
  let bienFevrier = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 1;
  });

  let nbrBienFevrier = bienFevrier.length;

  // compter les bien de Mars
  let bienMars = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 2;
  });

  let nbrBienMars = bienMars.length;

  // compter les bien de Avril
  let bienAvril = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 3;
  });

  let nbrBienAvril = bienAvril.length;

  // compter les bien de Mai
  let bienMai = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 4;
  });

  let nbrBienMai = bienMai.length;

  // compter les bien de Juin
  let bienJuin = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 5;
  });

  let nbrBienJuin = bienJuin.length;

  // compter les bien de Juillet
  let bienJuillet = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 6;
  });

  let nbrBienJuillet = bienJuillet.length;

  // compter les bien de Aout
  let bienAout = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 7;
  });

  let nbrBienAout = bienAout.length;

  // compter les bien de Sept
  let bienSept = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 8;
  });

  let nbrBienSept = bienSept.length;

  // compter les bien de Oct
  let bienOct = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 9;
  });

  let nbrBienOct = bienOct.length;

  // compter les bien de Nov
  let bienNov = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 10;
  });

  let nbrBienNov = bienNov.length;

  // compter les bien de Dec
  let bienDec = Properties.filter(function (property) {
    let moisCreation = new Date(property.created_at);
    return moisCreation.getMonth() === 11;
  });

  let nbrBienDec = bienDec.length;

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

  //reservation
  const [Reservation, setReservation] = useState([]);

  const fetchReservation = async () => {
    await axios
      .get("http://localhost:8000/api/allReservation")
      .then(({ data }) => {
        setReservation(data);
      });
  };

  useEffect(() => {
    fetchReservation();
  }, []);

  var reservationEnAttente = Reservation.filter(function (reservation) {
    return reservation.validate === "false";
  });

  let nbrReservationEnAttente = reservationEnAttente.length;

  var reservationConfirmer = Reservation.filter(function (reservation) {
    return reservation.validate === "true";
  });

  let nbrReservationConfirmer = reservationConfirmer.length;

  //ajouter un point apres 3 chiffres
  function addThousandSeparator(number) {
    // Convertir le nombre en chaîne de caractères
    const numberString = number.toString();

    // Utiliser une expression régulière pour ajouter un point après chaque groupe de trois chiffres
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return formattedNumber;
  }

  // Récupérez les données pour le diagramme
  const data = {
    maintainAspectRatio: false, // Désactive le maintien du ratio pour permettre au diagram de s'adapter en fonction de son conteneur
    labels: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    datasets: [
      {
        label: "Proprietés",
        data: [
          nbrBienJanvier,
          nbrBienFevrier,
          nbrBienMars,
          nbrBienAvril,
          nbrBienMai,
          nbrBienJuin,
          nbrBienJuillet,
          nbrBienAout,
          nbrBienAout,
          nbrBienSept,
          nbrBienOct,
          nbrBienNov,
          nbrBienDec,
        ],
        backgroundColor: "#f6b00088",
        borderColor: "#f6b000",
        borderWidth: 2,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    maintainAspectRatio: false, // Désactive le maintien du ratio pour permettre au diagram de s'adapter en fonction de son conteneur
    scales: {
      x: {
        type: "category",
        labels: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Aout",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  //digramme pour type de proprietes
  const dataDiagramTypeProperty = {
    maintainAspectRatio: false, // Désactive le maintien du ratio pour permettre au diagram de s'adapter en fonction de son conteneur
    labels: ["Maison", "Appartement", "Villa", "Studio", "Chambre"],
    datasets: [
      {
        label: "Type Proprietés",
        data: [nbrMaisons, nbrAppartements, nbrVilla, nbrStudio, nbrChambres],
        backgroundColor: "rgba(0, 128, 0, 0.359)",
        borderColor: "rgba(0, 128, 0, 1)",
        borderWidth: 2,
      },
    ],
  };

  // Configuration options for the chart
  const optionsDiagramTypeProperty = {
    maintainAspectRatio: false, // Désactive le maintien du ratio pour permettre au diagram de s'adapter en fonction de son conteneur
    scales: {
      x: {
        type: "category",
        labels: ["Maison", "Appartement", "Villa", "Studio", "Chambre"],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="MenuStatisticAdmin" id="MenuStatisticAdmin">
      <p className="tilteStatistic">Statistiques</p>

      <div class="row">
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div class="stats-icon" id="iconAllUsersStatistic">
                    <i class="iconly-boldShow">
                      <People className="iconStatistic" fontSize="large" />
                    </i>
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">Utilisateurs</h6>
                  <h6 class="font-extrabold mb-0">
                    {addThousandSeparator(Users.length)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div class="stats-icon red" id="iconActifUsersStatistic">
                    <Person className="iconStatistic" fontSize="large" />
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">Utilisateurs actifs</h6>
                  <h6 class="font-extrabold mb-0">
                    {addThousandSeparator(nbreUtilisateurActif)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div class="stats-icon blue" id="iconAllPropertiessStatistic">
                    <Home className="iconStatistic" fontSize="large" />
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">
                    Nombres total d'annonces
                  </h6>
                  <h6 class="font-extrabold mb-0">
                    {addThousandSeparator(Properties.length)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="stats-icon green"
                    id="iconSellPropertiessStatistic"
                  >
                    <Sell className="iconStatistic" fontSize="large" />
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">Biens vendu</h6>
                  <h6 class="font-extrabold mb-0">{nbrBienVendus}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="stats-icon green"
                    id="iconSellPropertiessStatistic"
                  >
                    <ContactEmergency
                      className="iconStatistic"
                      fontSize="large"
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">Réservations</h6>
                  <h6 class="font-extrabold mb-0">
                    {addThousandSeparator(Reservation.length)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="stats-icon purple"
                    id="iconAllPropertiessStatistic"
                  >
                    <ContactEmergency
                      className="iconStatistic"
                      fontSize="large"
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">
                    Réservations en attente
                  </h6>
                  <h6 class="font-extrabold mb-0">
                    {addThousandSeparator(nbrReservationEnAttente)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div class="stats-icon red" id="iconActifUsersStatistic">
                    <CheckBoxRounded
                      className="iconStatistic"
                      fontSize="large"
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">
                    Réservations confirmés
                  </h6>
                  <h6 class="font-extrabold mb-0">
                    {addThousandSeparator(nbrReservationConfirmer)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-3 col-md-6 my-2">
          <div class="card">
            <div class="card-body px-3 py-4-5">
              <div class="row">
                <div class="col-md-4">
                  <div class="stats-icon blue" id="iconAllUsersStatistic">
                    <AdminPanelSettings
                      className="iconStatistic"
                      fontSize="large"
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <h6 class="text-muted font-semibold">Administrateurs</h6>
                  <h6 class="font-extrabold mb-0">
                    {addThousandSeparator(nombreUtilisateursAdmin)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row rowDiagramStatistics">
        <div className="col-md-6 blocDiagramPropertMonth">
          <Bar className="DiagramPropertMonth" data={data} options={options} />
        </div>
        <div className="col-md-6 blocDiagramPropertMonth">
          <Bar
            className="DiagramPropertMonth"
            data={dataDiagramTypeProperty}
            options={optionsDiagramTypeProperty}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuStatisticAdmin;
