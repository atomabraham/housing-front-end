function LayoutPropertiesController() {
  let rowMenuOptionAdmin = document.getElementById("rowMenuOptionAdmin");
  let rowMenupropertyAdmin = document.getElementById("rowMenupropertyAdmin");
  let rowMenuUserAdmin = document.getElementById("rowMenuUserAdmin");

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
  let btnUserSideBarAdmin = document.getElementById("btnUserSideBarAdmin");

  rowMenupropertyAdmin.style.display = "block";
  rowMenuOptionAdmin.style.display = "none";
  rowMenuUserAdmin.style.display = "none";

  btnPropertieSideBarAdmin.style.backgroundColor = "#f6b100";
  btnAgrementSideBarAdmin.style.backgroundColor = "transparent";
  btnUserSideBarAdmin.style.backgroundColor = "transparent";
}

export default LayoutPropertiesController;
