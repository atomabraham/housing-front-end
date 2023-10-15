import { useEffect, useState } from "react";
import "../../Styles/MyProperty.css";
import Navbar from "../ElementsPages/Banners/Navbar";
import axios from "../Authentification/axios";
// import axios from "axios";

function MyProperty() {
  const [user, setUser] = useState(null);
  const [propertiesUser, setPropertiesUser] = useState(null);

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

  const [Properties, setProperties] = useState([]);
  // useEffect(() => {
  const fetchProperties = async () => {
    await axios.get("http://localhost:8000/api/properties").then(({ data }) => {
      setProperties(data);
    });
  };

  // }, []);

  useEffect(() => {
    fetchProperties();
  }, []);

  // if (user) {
  //   console.log(user.id);
  //   const formData = new FormData();
  //   formData.append("id_user", user.id);
  //   // const id_user = user.id;

  //   try {
  //     const resp = axios.get(
  //       `http://localhost:8000/api/propertyUsers/${user.id}`
  //     );

  //     console.log(resp.data);
  //   } catch (error) {}
  // } else {
  // }

  // console.log(propertiesUser);

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div
            className="row blockPropertiesUser"
            id="blockPropertiesUser"
          ></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MyProperty;
