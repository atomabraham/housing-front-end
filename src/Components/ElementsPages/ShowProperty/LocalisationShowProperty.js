import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import axios from "../../Authentification/axios";

function LocalisationShowProperty() {
  //recuperation de la propriete
  const { id } = useParams();

  const [property, setProperty] = useState([]);
  const fetchProperty = async () => {
    await axios
      .get(`http://localhost:8000/api/property/${id}`)
      .then(({ data }) => {
        setProperty(data);
      });
  };

  // useEffect(() => {
  //     fetchProperty();
  // }, []);

  let pays;
  let ville;
  let quartier;

  //geolocalisation de la propriete
  const [location, setLocation] = useState(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  property.map(
    (prop) => (
      (pays = prop.country), (ville = prop.ville), (quartier = prop.quartier)
    )
  );
  // console.log(ville)
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            "Douala"
          )}`
        );
        const data = await response.json();

        if (data.length > 0) {
          const { lat, lon } = data[0];
          setLocation({ lat, lon });
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de la localisation :",
          error
        );
      }
    };

    fetchLocation();
  }, [pays]);

  useEffect(() => {
    if (location && !mapInitialized) {
      const map = L.map("map").setView([4.052, 9.7043], 14);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "Map data &copy; OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      L.marker([4.052, 9.7043]).addTo(map);

      setMapInitialized(true); // Met à jour l'état d'initialisation de la carte
      // Utilise fitBounds pour ajuster la vue de la carte pour englober le pays
      const bounds = L.latLngBounds([[location.lat, location.lon]]);
      map.fitBounds(bounds);
    }
  }, [location, mapInitialized]);

  return (
    <>
      <div>
        {location ? (
          // <></>
          <div id="map" style={{ width: "100%", height: "400px" }}></div>
        ) : (
          <p>Localisation introuvable</p>
        )}
      </div>
    </>
  );
}

export default LocalisationShowProperty;
