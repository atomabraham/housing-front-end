function LayoutPropertiesController() {
  let rowMenuOptionAdmin = document.getElementById("rowMenuOptionAdmin");
  let rowMenupropertyAdmin = document.getElementById("rowMenupropertyAdmin");

  let rowMenuStatistic = document.getElementById("rowMenuStatistic");
  let rowMenuProperties = document.getElementById("rowMenuProperties");
  let rowMenuOption = document.getElementById("rowMenuOption");
  let rowMenuUsers = document.getElementById("rowMenuUsers");
  let rowMenuTransaction = document.getElementById("rowMenuTransaction");
  let btnPropertieSideBarAdmin = document.getElementById(
    "btnPropertieSideBarAdmin"
  );
  let btnAgrementSideBarAdmin = document.getElementById(
    "btnAgrementSideBarAdmin"
  );

  rowMenuOptionAdmin.style.display = "none";

  btnPropertieSideBarAdmin.style.backgroundColor = "#f6b100";
  btnAgrementSideBarAdmin.style.backgroundColor = "transparent";
  rowMenupropertyAdmin.style.display = "block";
  // rowMenuProperties.style.backgroundColor = "#f6b100";
  // rowMenuProperties.style.display = "block";
  // rowMenuStatistic.style.backgroundColor = "transparent";
  // rowMenuOption.style.backgroundColor = "transparent";
  // rowMenuUsers.style.backgroundColor = "transparent";
  // rowMenuTransaction.style.backgroundColor = "transparent";
}

export default LayoutPropertiesController;
