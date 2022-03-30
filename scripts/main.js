import { businessList, purchAgentHTML} from "./BusinessList.js"
import { getBusinesses } from "./BusinessData.js"

businessList();
purchAgentHTML();




const companySearchResultArticle = document.querySelector(".foundCompanies")

const businesses = getBusinesses();

document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
    
        let lowercaseInputElementsValue = document.querySelector("#companySearch").value.toLowerCase();
    
        for (let business of businesses) {
           console.log(business)
           console.log(lowercaseInputElementsValue)
    
            let lowercaseCompanyName = business.companyName.toLowerCase(); //fix here
    
            if(lowercaseCompanyName.startsWith(lowercaseInputElementsValue)) {
                companySearchResultArticle.innerHTML = `
                    <h2>
                    ${business.companyName}
                    </h2>
                    <section>
                    ${business.addressFullStreet}
        
                    </section>
                    <section>
                    ${business.addressCity},
                    ${business.addressStateCode}
                    ${business.addressZipCode}
                    </section>
                    <br>
                `;
            }
        }
    }
})
