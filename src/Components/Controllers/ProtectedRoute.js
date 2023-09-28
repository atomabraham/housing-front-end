import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import axios from "../Authentification/axios";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user");
        if (response.data.authenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        // Gérer l'erreur de vérification de l'authentification
        console.error(error);
      }
      setLoading(false);
    };
    checkAuthentication();
  }, []);

  if (loading) {
    // Afficher un écran de chargement pendant la vérification de l'authentification
    // return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/*" replace />}
    />
  );
};

export default ProtectedRoute;
