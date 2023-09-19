import { useNavigate } from "react-router-dom"


function FormPostController() {
  //Controle des informations de base
  let nameProperty=document.getElementById('inputFormPostName')
  if(nameProperty.value==""){
    nameProperty.style.borderColor="red"
  }

}

export default FormPostController

export function SavePropertie () {
  const navigate = useNavigate()

}
