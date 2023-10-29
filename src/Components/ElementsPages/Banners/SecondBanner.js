//importation des dépendances
import { React, useState, useEffect } from "react";
import "../../../Styles/Banners/SecondBanner.css";
import { TbListSearch } from "react-icons/tb";
import { TbHomePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "../../Authentification/axios.js";

//conposqnt qui créé la navbar du filtre de recherche

function SecondBanner() {
  // function FilterController(){
  // }
  const [searchResults, setSearchResults] = useState([]);

  const [world, setWorld] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleChangeWorld = (event) => {
    setWorld(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

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
    <nav
      className={`secondBanner ${hasScrolled ? "navbar--scrolled" : ""}`}
      id="secondBanner"
    >
      {/* <React.Fragment className='filterSelect'> */}
      <div className="blockFilter" id="blockFilter">
        <form>
          <input
            type="text"
            className="inputFilter inputLouer"
            id="inputWordKey"
            value={world}
            onChange={handleChangeWorld}
            placeholder="Mots clés"
          />

          <input
            type="text"
            className="inputFilter inputCity"
            id="inputCity"
            value={city}
            onChange={handleChangeCity}
            placeholder="ville"
          />

          <input
            type="text"
            className="inputFilter inputType"
            id="inputType"
            value={type}
            onChange={handleChangeType}
            placeholder="Type"
          />

          <input
            type="text"
            className="inputFilter inputStatus"
            id="inputStatus"
            value={status}
            onChange={handleChangeStatus}
            placeholder="A Louer"
          />

          <button type="button" className="submitSearch" id="submitSearch">
            <Link
              to={`/search?world=${world}&status=${status}&type=${type}&city=${city}`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#F7B100" />
                <path
                  d="M32.9398 31.867L38 37.98L36.3282 40L31.2693 33.8856C29.3869 35.709 27.0456 36.7007 24.6331 36.6966C18.7636 36.6966 14 30.9405 14 23.8483C14 16.756 18.7636 11 24.6331 11C30.5025 11 35.2661 16.756 35.2661 23.8483C35.2696 26.7634 34.4488 29.5925 32.9398 31.867ZM30.5699 30.8078C32.0693 28.9446 32.9066 26.4471 32.9032 23.8483C32.9032 18.3278 29.2017 13.8552 24.6331 13.8552C20.0644 13.8552 16.3629 18.3278 16.3629 23.8483C16.3629 29.3688 20.0644 33.8414 24.6331 33.8414C26.7838 33.8455 28.8507 32.8337 30.3926 31.0219L30.5699 30.8078Z"
                  fill="white"
                />
              </svg>
            </Link>
          </button>
        </form>
      </div>

      {/* <div className='blockSearch' id='blockSearch'>
                    <div className='search block1'>
                        <p><TbListSearch className='iconSearch icon1'/></p>
                        <span className='textSearch text1' id='textSearch'>Rechercher</span>
                    </div>
                    <div className='search block2'>
                        <p><TbHomePlus className='iconSearch icon2' /></p>
                        <span className='textSearch text2' id='textSearch'>Rechercher</span>
                    </div>
                    <div className='search block3'>
                        <p><TbListSearch className='iconSearch icon3'/></p>
                        <span className='textSearch text3' id='textSearch'>Rechercher</span>
                    </div>
                </div> */}
      {/* </React.Fragment> */}
    </nav>
  );
}

export default SecondBanner;
