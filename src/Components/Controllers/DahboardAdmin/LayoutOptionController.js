
function LayoutOptionController () {
    let rowMenuOptionAdmin = document.getElementById('rowMenuOptionAdmin')
    let rowMenuStatistic = document.getElementById('rowMenuStatistic')
    let rowMenuProperties = document.getElementById('rowMenuProperties')
    let rowMenuOption = document.getElementById('rowMenuOption')
    let rowMenuUsers = document.getElementById('rowMenuUsers')
    let rowMenuTransaction = document.getElementById('rowMenuTransaction')
    if (rowMenuOptionAdmin.style.display == "none") {
        rowMenuOptionAdmin.style.display = "block" 
        rowMenuOption.style.backgroundColor = "#f6b100"
        rowMenuStatistic.style.backgroundColor = "transparent"
        rowMenuProperties.style.backgroundColor = "transparent"
        rowMenuUsers.style.backgroundColor = "transparent"
        rowMenuTransaction.style.backgroundColor = "transparent"
    } else {
        rowMenuOptionAdmin.style.display = "none" 
        rowMenuOption.style.backgroundColor = "transparent"
    }
}


// for modal
export function LayoutOptionController2 () {
    
}


export default LayoutOptionController
