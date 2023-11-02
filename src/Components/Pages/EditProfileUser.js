import { useState, useEffect } from "react";
import "../../Styles/EditProfileUser.css";
import Navbar from "../ElementsPages/Banners/Navbar";
import axios from "../Authentification/axios";
import avatar from "../../Assets/Images/man-avatar-icon-free-vector.jpg";
import Footer from "../ElementsPages/Footer/Footer";

function EditProfileUser() {
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

  //modifier la photo de profile
  let inputProfilePicture = document.querySelector(".inputProfilePicture");
  let avatarProfile = document.getElementById("avatar");
  let deleteProfilePictureBtn = document.getElementById(
    "deleteProfilePictureBtn"
  );

  // function changeAvatar() {

  // }

  function removeImage() {
    avatarProfile.src = avatar;
  }

  //preparation et envoie de la photo de profil
  const [image, setImage] = useState();

  const changeAvatar = (event) => {
    avatarProfile.src = window.URL.createObjectURL(
      inputProfilePicture.files[0]
    );
    setImage(event.target.files[0]);

    deleteProfilePictureBtn.disabled = false;
  };

  const updateProfilePicture = async (e) => {
    e.preventDefault();
    const dataImage = new FormData();

    dataImage.append("picture", image);

    const resp = await axios.post(
      `http://localhost:8000/api/updateProfilePicture/${user.id}`,
      dataImage
    );

    if (resp.status == 200) {
      // alert("success");
      document.location = "/users/edit";
    } else {
      alert("echec");
    }
  };

  //preparation et envoi des donnees de mise a jour des information de l'utilisateurs

  const updateInformationUser = async (e) => {
    let editProfileUserName = document.getElementById(
      "editProfileUserName"
    ).value;
    let editProfileName = document.getElementById("editProfileName").value;
    let editProfileSecondName = document.getElementById(
      "editProfileSecondName"
    ).value;
    let editProfilePhone = document.getElementById("editProfilePhone").value;
    let editProfileEmail = document.getElementById("editProfileEmail").value;
    let editProfileBirthday = document.getElementById(
      "editProfileBirthday"
    ).value;
    let editProfileCountry =
      document.getElementById("editProfileCountry").value;
    let editProfileCity = document.getElementById("editProfileCity").value;
    let editProfilePostalCode = document.getElementById(
      "editProfilePostalCode"
    ).value;

    const dataInformation = new FormData();

    dataInformation.append("userName", editProfileUserName);
    dataInformation.append("name", editProfileName);
    dataInformation.append("secondname", editProfileSecondName);
    dataInformation.append("phone", editProfilePhone);
    dataInformation.append("birthday", editProfileBirthday);
    dataInformation.append("country", editProfileCountry);
    dataInformation.append("city", editProfileCity);
    dataInformation.append("postalCode", editProfilePostalCode);

    const resp = await axios.post(
      `http://localhost:8000/api/updateInformationUser/${user.id}`,
      dataInformation
    );

    if (resp.status == 200) {
      document.location = "/users/edit";
    } else {
      alert("echec");
    }
  };

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className="row edit-profile">
            <h1>Modifier mon profile</h1>
            <div className="row mt-3 blockProfileEditUser">
              {/* <div className="row"> */}
              <div className="mb-2 mt-2 profilePicture">
                <img
                  src={`http://localhost:8000/storage/images/profilePicture/${user.picture}`}
                  className="avatar"
                  id="avatar"
                  alt=""
                />
              </div>
              {/* </div> */}
              <div className="mb-3 actionProfilePicture">
                <input
                  type="file"
                  className="inputProfilePicture"
                  id="inputProfilePicture"
                  accept="image/*"
                  onChange={changeAvatar}
                />
                <label
                  for="inputProfilePicture"
                  className="p-2 mx-2 inputProfilePicture actionProfilePicture editProfilePictureBtn"
                  //   id="inputProfilePicture"
                  // onClick={changeAvatar}
                >
                  MODIFIER
                </label>
                <button
                  type="button"
                  disabled="true"
                  className="p-2 mx-2 deleteProfilePictureBtn"
                  id="deleteProfilePictureBtn"
                  onClick={removeImage}
                >
                  SUPPRIMER
                </button>
                <button
                  type="button"
                  className="p-2 mx-2 actionProfilePicture updateProfilePictureBtn"
                  onClick={updateProfilePicture}
                >
                  SAUVEGARDER
                </button>
              </div>
            </div>
            <div className="row">
              <form>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="inputFormPost"
                    id="editProfileUserName"
                    defaultValue={user.userName}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Nom</label>
                  <input
                    type="text"
                    className="inputFormPost"
                    id="editProfileName"
                    defaultValue={user.name}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Prénom</label>
                  <input
                    type="text"
                    className="inputFormPost"
                    id="editProfileSecondName"
                    defaultValue={user.secondname}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Téléphone</label>
                  <input
                    type="number"
                    className="inputFormPost"
                    id="editProfilePhone"
                    defaultValue={user.phone}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Email</label>
                  <input
                    type="Email"
                    className="inputFormPost"
                    id="editProfileEmail"
                    disabled
                    defaultValue={user.email}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Date de naissance</label>
                  <input
                    type="date"
                    className="inputFormPost"
                    id="editProfileBirthday"
                    defaultValue={user.birthday}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Pays</label>
                  <input
                    type="text"
                    className="inputFormPost"
                    id="editProfileCountry"
                    defaultValue={user.country}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>Ville</label>
                  <input
                    type="text"
                    className="inputFormPost"
                    id="editProfileCity"
                    defaultValue={user.city}
                  />
                </div>
                <div class="form-group row mb-4 blockInformationEditUser">
                  <label>code postal</label>
                  <input
                    type="text"
                    className="inputFormPost"
                    id="editProfilePostalCode"
                    defaultValue={user.postalCode}
                  />
                </div>
                <button
                  type="button"
                  className="p-2 mx-2 mb-2 actionProfilePicture saveUpdateInformationUser"
                  onClick={updateInformationUser}
                >
                  SAUVEGARDER
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default EditProfileUser;
