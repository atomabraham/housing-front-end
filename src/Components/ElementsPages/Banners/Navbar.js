import "../../../Styles/Banners/Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../../Assets/Images/logo 1.png";
import dafaultAvatar from "../../../Assets/Images/man-avatar-icon-free-vector.jpg";
import { Link } from "react-router-dom";
import SingIn from "../../SingIn-SingUp/SingIn/SingIn";
import { Modal } from "react-bootstrap";
import axios from "../../Authentification/axios";
import Line from "./Line";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //le modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Verifier si un utilisateur est connecter ou non au serveur
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("http://localhost:8000/api/user");
        if (resp.status === 200 && resp.data.data.role === "User") {
          let myAccount = document.getElementById("linkMenuAccount");
          let myFavoris = document.getElementById("linkMenuFavoris");
          let myProperty = document.getElementById("linkMenuMyProperty");
          let login = document.getElementById("linkMenuSignIn");
          let logout = document.getElementById("linkMenuLogout");
          let admin = document.getElementById("linkMenuAdmin");
          myAccount.style.display = "block";
          myFavoris.style.display = "block";
          myProperty.style.display = "block";
          logout.style.display = "block";
          login.style.display = "none";
          admin.style.display = "none";
        } else if (resp.status === 200 && resp.data.data.role === "Admin") {
          let myAccount = document.getElementById("linkMenuAccount");
          let myFavoris = document.getElementById("linkMenuFavoris");
          let myProperty = document.getElementById("linkMenuMyProperty");
          let login = document.getElementById("linkMenuSignIn");
          let logout = document.getElementById("linkMenuLogout");
          let admin = document.getElementById("linkMenuAdmin");
          admin.style.display = "block";
          myAccount.style.display = "block";
          myFavoris.style.display = "block";
          myProperty.style.display = "block";
          logout.style.display = "block";
          login.style.display = "none";
        } else if (resp.status === 401) {
          let myAccount = document.getElementById("linkMenuAccount");
          let myFavoris = document.getElementById("linkMenuFavoris");
          let myProperty = document.getElementById("linkMenuMyProperty");
          let login = document.getElementById("linkMenuSignIn");
          let logout = document.getElementById("linkMenuLogout");
          let admin = document.getElementById("linkMenuAdmin");
          login.style.display = "block";
          logout.style.display = "none";
          myAccount.style.display = "none";
          myFavoris.style.display = "none";
          myProperty.style.display = "none";
          admin.style.display = "none";
        }
      } catch (error) {}
    })();
  });

  //déconnexion d'un utilisqteur
  const handleLogout = async () => {
    try {
      const resp = await axios.post("http://localhost:8000/api/logout");
      if (resp.status === 200) {
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    } catch (error) {}
  };

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

  //afficher le box-shadow lorsqu'on commence a scroller
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${hasScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        {/* Insérez ici votre composant de logo */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar__links">
        {user ? (
          <Link to="/CreatePost" className="linkCreateProperty">
            PUBLIER MA PROPRIETE
          </Link>
        ) : (
          <>
            <Link
              to="#login"
              className="linkCreateProperty"
              onClick={handleShow}
            >
              PUBLIER MA PROPRIETE
            </Link>
            <button
              type="button"
              className="linkCreateProperty"
              onClick={handleShow}
            >
              SE CONNECTER
            </button>
          </>
        )}
        <div className="navbar__account" ref={menuRef}>
          <button className="navbar__account-icon" onClick={toggleMenu}>
            {user ? (
              <>
                {user.picture ? (
                  <img
                    className="pictureProfile"
                    src={`http://localhost:8000/storage/images/profilePicture/${user.picture}`}
                    width="50px"
                    height="50px"
                    alt="profile"
                  />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </>
                )}
              </>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            )}
          </button>
          {menuOpen && (
            <div className="navbar__account-menu">
              <Link
                to={`/search?world=&status=${"A vendre"}&type=&city=`}
                id="linkMenuBuy"
              >
                Acheter
              </Link>
              <Link
                to={`/search?world=&status=${"A Louer"}&type=&city=`}
                id="linkMenuLocation"
              >
                Louer
              </Link>
              <a href="#" className="" id="linkMenuFavoris">
                Mes favoris
              </a>
              {user ? (
                <>
                  <Link
                    to={`/MyProperties/${user.id}`}
                    className=""
                    id="linkMenuMyProperty"
                  >
                    Mes biens
                  </Link>
                </>
              ) : (
                <></>
              )}
              <Link to="/Dashboard" className="" id="linkMenuAdmin">
                ADMINISTRATEUR
              </Link>
              <Link to="/users/edit" className="" id="linkMenuAccount">
                Mon Compte
              </Link>
              <Link to="/contactUs" className="" id="linkMenuContactUs">
                Nous contacter
              </Link>
              <Link to="/aboutUs">A propos de nous</Link>
              <Link to="#signIn" onClick={handleShow} id="linkMenuSignIn">
                Se connecter
              </Link>
              <Link
                to="#"
                className=""
                onClick={handleLogout}
                id="linkMenuLogout"
              >
                Se déconnecter
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* <Line/> */}
      {/*modal connexion*/}
      <Modal show={show} onHide={handleClose} id="login">
        <SingIn />
      </Modal>
    </nav>
  );
};

export default Navbar;
