function LayoutPropertiesController() {
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

  rowMenupropertyAdmin.style.display = "block";
  rowMenuOptionAdmin.style.display = "none";
  rowMenuUserAdmin.style.display = "none";
  MenuStatisticAdmin.style.display = "none";

  btnPropertieSideBarAdmin.style.backgroundColor = "#f6b100";
  btnAgrementSideBarAdmin.style.backgroundColor = "transparent";
  btnUserSideBarAdmin.style.backgroundColor = "transparent";
  blockStatisticAdmin.style.backgroundColor = "transparent";
}

export default LayoutPropertiesController;
