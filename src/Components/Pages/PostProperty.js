import "../../Styles/PostProperty/PostProperty.css";
import Navbar from "../ElementsPages/Banners/Navbar";
import Line from "../ElementsPages/Banners/Line";
import FormPostProperty from "../ElementsPages/PostProperty/FormPostProperty";
import { useEffect, useState } from "react";
import axios from "../Authentification/axios";

function PostProperty() {
  const addProperty = async (e) => {
    // e.preventDefault();
    // const {propertyName, description} = e.target.elements;
    // const image = e.target.files[0];
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

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <FormPostProperty />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default PostProperty;
