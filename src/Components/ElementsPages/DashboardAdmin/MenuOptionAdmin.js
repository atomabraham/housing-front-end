import "../../../Styles/DashboardAdmin/MenuOptionAdmin.css";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
// import axios from "axios";
import axios from "../../Authentification/axios";
import Modal from "react-bootstrap/Modal";
import { BorderColor, DeleteSweep, Lock, LockOpen } from "@mui/icons-material";
import { Form } from "react-bootstrap";
import React from "react";
import {
  addOption,
  deleteOption,
} from "../../Controllers/DahboardAdmin/MenuOptionController";
import { useLocation } from "react-router-dom";

function MenuOptionAdmin() {
  //le modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // recuperation des options
  const [options, setOptions] = useState([]);
  const fetchOptions = async () => {
    await axios.get(`http://localhost:8000/api/options`).then(({ data }) => {
      setOptions(data);
    });
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <div className="rowMenuOptionAdmin" id="rowMenuOptionAdmin">
      <Row className="rowAddElement">
        <button
          className="addElement addOption"
          id="addOption"
          onClick={handleShow}
        >
          AJOUTER
        </button>
      </Row>
      <Row className="lineMenuOption">{/* line */}</Row>
      <Row className="rowOptionList">
        <table>
          <tr className="menuEntete">
            <th className="thMenuEntete">Id</th>
            <th className="thMenuEntete">Nom</th>
            <th className="thMenuEntete">Status</th>
            <th className="thMenuEntete"></th>
          </tr>
          <Row className="espaceTableOption"></Row>
          {options.map((option) => (
            <>
              <tr className="trMenuOption">
                <td className="idMenuOption">{option.id}</td>
                <td>{option.name.toUpperCase()}</td>
                <td>
                  {option.status == "enable" ? (
                    <LockOpen className="statusOption" />
                  ) : (
                    <Lock className="statusOption" />
                  )}
                </td>
                <td className="editDeleteOption">
                  <button
                    type="button"
                    onClick={handleShow2}
                    className="buttonEditOption"
                    id="buttonEditOption"
                  >
                    <BorderColor className="editMenu" />
                  </button>
                  {/* modal add option */}
                  <Modal show={show2} onHide={handleClose2} id="login">
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <p className="connexionTitle" id="connexionTitle">
                        Ajouter une option de propriétés
                      </p>
                      <form method="POST" action="#">
                        <Row>
                          <input
                            type="text"
                            name="inputNameOptionMenu"
                            className="inputNameOptionMenu"
                            id="name"
                            value={option.name}
                          />
                        </Row>
                        <span className="errorInput" id="errorInput"></span>
                        <button
                          type="submit"
                          className="submitAddOption"
                          id="submitAddOption"
                        >
                          Ajouter
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  <button
                    type="button"
                    onClick={() => deleteOption(option.id)}
                    className="buttonDeleteOption"
                  >
                    <DeleteSweep className="deleteMenu" />
                  </button>
                </td>
              </tr>
              <Row className="espaceTableOption"></Row>
            </>
          ))}
        </table>
      </Row>

      {/* modal add option */}
      <Modal show={show} onHide={handleClose} id="login">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p className="connexionTitle" id="connexionTitle">
            Ajouter un agrément
          </p>
          <form method="POST" action="#" onSubmit={addOption}>
            <Row>
              <input
                type="text"
                name="inputNameOptionMenu"
                className="inputNameOptionMenu"
                id="name"
                placeholder="E.g : WIFI"
              />
            </Row>
            <span className="errorInput" id="errorInput"></span>
            <button
              type="submit"
              className="submitAddOption"
              id="submitAddOption"
            >
              Ajouter
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MenuOptionAdmin;
