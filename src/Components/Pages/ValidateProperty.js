import { useParams } from "react-router-dom";
import axios from "../Authentification/axios";

function ValidateProperty() {
  const { id } = useParams();
  // console.log(id);

  axios.post(`http://localhost:8000/api/validateProperty/${id}`);
  // if (resp.status == 200) {
  // }
  // const Validate = async () => {
  //   // const resp = axios.post(`http://localhost:8000/api/validateProperty/${id}`);
  //   const { id } = useParams();

  // };

  window.location.href = "/Dashboard";
}

export default ValidateProperty;
