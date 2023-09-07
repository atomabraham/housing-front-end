import { useLocation } from "react-router-dom"

function LayoutOptionController () {
    const location = useLocation()

    let rowMenuOptionAdmin = document.getElementById('rowMenuOptionAdmin')
    if(location.pathname === "/Dashboard/options"){
//         let rowMenuStatistic = document.getElementById('rowMenuStatistic')
//         let rowMenuProperties = document.getElementById('rowMenuProperties')
//         let rowMenuOption = document.getElementById('rowMenuOption')
//         let rowMenuUsers = document.getElementById('rowMenuUsers')
//         let rowMenuTransaction = document.getElementById('rowMenuTransaction')
//         // if (rowMenuOptionAdmin.style.display == "none") {
//             rowMenuOptionAdmin.style.display = "block" 
//             rowMenuProperties.style.display = "none" 
//             rowMenuOption.style.backgroundColor = "#f6b100"
//             rowMenuStatistic.style.backgroundColor = "transparent"
//             rowMenuProperties.style.backgroundColor = "transparent"
//             rowMenuUsers.style.backgroundColor = "transparent"
//             rowMenuTransaction.style.backgroundColor = "transparent"
//         // }
        // rowMenuOptionAdmin.style.display = "block"
        alert('ok')
        // alert('ok')
    }else{
        rowMenuOptionAdmin.style.display = "none"

    }
// }


// for modal
// export function LayoutOptionController2 () {
    
}


export default LayoutOptionController
