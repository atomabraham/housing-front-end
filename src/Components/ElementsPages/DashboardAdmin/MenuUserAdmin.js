import { useEffect, useState } from "react";
import "../../../Styles/DashboardAdmin/MenuUserAdmin.css";
import axios from "../../Authentification/axios";
import { BorderColor, DeleteSweep, Lock, LockOpen } from "@mui/icons-material";
import { Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function MenuUserAdmin() {
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

  return (
    <>
      {/* biens en attente de validation */}
      <Row className="rowMenuUserAdmin" id="rowMenuUserAdmin">
        <Row className="blockPropertyToValida" id="blockPropertyToValidat">
          <table>
            <tr className="menuEntete">
              <th className="thMenuEntete">Id</th>
              <th className="thMenuEntete">Profile</th>
              <th className="thMenuEntete">Nom</th>
              <th className="thMenuEntete">Prénom</th>
              <th className="thMenuEntete">Ville</th>
              <th className="thMenuEntete">Téphone</th>
              <th className="thMenuEntete">Email</th>
              <th className="thMenuEntete">Role</th>
              <th className="thMenuEntete"></th>
            </tr>
            <Row className="espaceTableproperty" id="espaceTableproperty"></Row>
            {Users.map((user) => (
              <>
                <tr className="trMenuProperty">
                  <td className="idPropertyMenuDashboard">{user.id}</td>
                  <td>
                    <img
                      width="40px"
                      height="40px"
                      className="profileUserDashBoardAd"
                      src={`http://localhost:8000/storage/images/profilePicture/${user.picture}`}
                      alt=""
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.secondname}</td>
                  <td>{user.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="editDeleteOption">
                    {user.active == "true" ? <LockOpen /> : <Lock />}
                  </td>
                </tr>
                <Row className="espaceTableproperty"></Row>
              </>
            ))}
          </table>
        </Row>
      </Row>
    </>
  );
}

export default MenuUserAdmin;
