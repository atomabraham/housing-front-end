function LayoutStatisticController() {
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

  MenuStatisticAdmin.style.display = "block";
  rowMenupropertyAdmin.style.display = "none";
  rowMenuOptionAdmin.style.display = "none";
  rowMenuUserAdmin.style.display = "none";

  blockStatisticAdmin.style.backgroundColor = "#f6b100";
  btnPropertieSideBarAdmin.style.backgroundColor = "transparent";
  btnAgrementSideBarAdmin.style.backgroundColor = "transparent";
  btnUserSideBarAdmin.style.backgroundColor = "transparent";
}

export default LayoutStatisticController;
