function LayoutUsersController() {
  let rowMenuOptionAdmin = document.getElementById("rowMenuOptionAdmin");
  let rowMenupropertyAdmin = document.getElementById("rowMenupropertyAdmin");
  let rowMenuUserAdmin = document.getElementById("rowMenuUserAdmin");
  let MenuStatisticAdmin = document.getElementById("MenuStatisticAdmin");

  let btnPropertieSideBarAdmin = document.getElementById(
    "btnPropertieSideBarAdmin"
  );
  let btnAgrementSideBarAdmin = document.getElementById(
    "btnAgrementSideBarAdmin"
  );
  let btnUserSideBarAdmin = document.getElementById("btnUserSideBarAdmin");
  let blockStatisticAdmin = document.getElementById("blockStatisticAdmin");

  rowMenuUserAdmin.style.display = "block";
  rowMenuOptionAdmin.style.display = "none";
  rowMenupropertyAdmin.style.display = "none";
  MenuStatisticAdmin.style.display = "none";

  btnUserSideBarAdmin.style.backgroundColor = "#f6b100";
  btnPropertieSideBarAdmin.style.backgroundColor = "transparent";
  btnAgrementSideBarAdmin.style.backgroundColor = "transparent";
  blockStatisticAdmin.style.backgroundColor = "transparent";
}

export default LayoutUsersController;
