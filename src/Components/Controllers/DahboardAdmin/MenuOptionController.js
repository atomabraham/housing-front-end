import React from "react";
import axios from "../../Authentification/axios";
import { useEffect, useState } from "react";

// ajout d'une option
export const addOption = async (e) => {
  let option = document.getElementById("name");
  let errorInput = document.getElementById("errorInput");

  if (option.value == "") {
    errorInput.innerHTML = "Veullez entrer une option";
    option.style.borderColor = "red";
  } else {
    errorInput.innerHTML = "";
    option.style.borderColor = "#00000064";

    e.preventDefault();
    const { inputNameOptionMenu } = e.target.elements;
    const body = {
      name: inputNameOptionMenu.value,
    };
    console.log(body);

    try {
      const resp = await axios.post(
        "http://localhost:8000/api/createOption",
        body
      );
      console.log(resp.status);
      if (resp.status === 200) {
        // return (
        document.location.href = "/Dashboard";
        // )
        let rowMenuOptionAdmin = document.getElementById("rowMenuOptionAdmin");
        rowMenuOptionAdmin.style.display = "block";
      }
    } catch (error) {}
  }
};

// Suppression d'option
export const deleteOption = async (id) => {
  const resp = await axios.delete(
    `http://localhost:8000/api/deleteOption/${id}`
  );

  if (resp.status == 200) {
    document.location.href = "/Dashboard";
  }
};
