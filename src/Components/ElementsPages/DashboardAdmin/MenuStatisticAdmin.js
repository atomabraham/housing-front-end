import { useEffect, useState } from "react";
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

  let bienVendue = Properties.filter(function (property) {
    return property.vendu === "true";
  });

  let nbrBienVendus = bienVendue.length;

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
    </div>
  );
}

export default MenuStatisticAdmin;
