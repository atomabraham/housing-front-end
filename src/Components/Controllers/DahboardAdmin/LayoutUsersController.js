function LayoutUsersController() {
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

  rowMenuUserAdmin.style.display = "block";
  rowMenuOptionAdmin.style.display = "none";
  rowMenupropertyAdmin.style.display = "none";

  btnUserSideBarAdmin.style.backgroundColor = "#f6b100";
  btnPropertieSideBarAdmin.style.backgroundColor = "transparent";
  btnAgrementSideBarAdmin.style.backgroundColor = "transparent";
}

export default LayoutUsersController;
