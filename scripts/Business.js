export const BusinessHTML = (businessObj) => {
    return `
        <section class="business">
            <h2 class="business_name">${businessObj.companyName}</h2>
            <div class="business_address">
                ${businessObj.addressFullStreet} <br>
                ${businessObj.addressCity}, ${businessObj.addressStateCode}
            </div>
        </section>    
        `
}

// export const purchAgentHTML = (businessObj) => {
//     return `
//         <div>
//             ${businessObj.nameFirst} ${businessObj.nameLast} <br>
//             ${businessObj.companyName}
//             ${businessObj.phoneWork}
//         </div>
//     `
// }

