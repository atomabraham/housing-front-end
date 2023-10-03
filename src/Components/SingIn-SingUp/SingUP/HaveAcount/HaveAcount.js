import "../../../../Styles/SingIn-SingUp/SingUp.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SingIn from "../../SingIn/SingIn";

//J'ai deja un compte (se connecter)

function HaveAccount() {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Modal show={show} onHide={handleClose} id="login">
                <SingIn/>
            </Modal> */}
      {/* j'ai deja un compte */}
      {/* <div className='haveAccount' id='haveAccount'>
                Déja inscrit ? <span onClick={handleShow} className='signInRegister' id='signInRegister'>Se connecter</span>
            </div> */}
    </>
  );
}

export default HaveAccount;
