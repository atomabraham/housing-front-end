function FormPostController() {
  //Controle des informations de base
  let nameProperty=document.getElementById('inputFormPostName')
  if(nameProperty.value==""){
    nameProperty.style.borderColor="red"
  }
}

export default FormPostController