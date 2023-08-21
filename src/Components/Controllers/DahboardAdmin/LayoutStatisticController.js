
function LayoutStatisticController () {
    // content dashboard
    let rowMenuOptionAdmin = document.getElementById('rowMenuOptionAdmin')

    // content leftNavbar
    let rowMenuStatistic = document.getElementById('rowMenuStatistic')
    let rowMenuProperties = document.getElementById('rowMenuProperties')
    let rowMenuOption = document.getElementById('rowMenuOption')
    let rowMenuUsers = document.getElementById('rowMenuUsers')
    let rowMenuTransaction = document.getElementById('rowMenuTransaction')

    // if (rowMenuOptionAdmin.style.display == "none") {
        // content dashboard
        rowMenuOptionAdmin.style.display = "none" 

        // content leftNavbar
        rowMenuStatistic.style.backgroundColor = "#f6b100"
        rowMenuOption.style.backgroundColor = "transparent"
        rowMenuProperties.style.backgroundColor = "transparent"
        rowMenuUsers.style.backgroundColor = "transparent"
        rowMenuTransaction.style.backgroundColor = "transparent"
    // } else {
    //     rowMenuOptionAdmin.style.display = "none" 
    //     rowMenuOption.style.backgroundColor = "transparent"
    // }
}

export default LayoutStatisticController