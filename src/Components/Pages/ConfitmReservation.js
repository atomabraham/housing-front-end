import { useParams } from "react-router-dom";
import axios from "../Authentification/axios";

function ConfitmReservation() {
  // confirm reservation

  const { id } = useParams();

  const confirmationReservation = async () => {
    const resp = await axios.post(
      `http://localhost:8000/api/confirmationReservation/${id}`
    );

    if (resp.status == 200) {
      const resp2 = await axios.post(
        `http://localhost:8000/api/soldProperty/${id}`
      );

      if (resp2 == 200) {
        document.location.href = "/";
      }
    }
  };
}

export default ConfitmReservation;
