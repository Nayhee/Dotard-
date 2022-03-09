import { businessList, purchAgentList } from "./BusinessList.js"
import { getBusinesses } from "./BusinessData.js"

businessList();
purchAgentList();



const businesses = getBusinesses();

const companySearchResultArticle = document.querySelector(".foundCompanies")

document.querySelector("#companySearch")
document.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {

        const foundBusiness = businesses.find(element => element.companyName.includes(keyPressEvent.target.value));

        companySearchResultArticle.innerHTML = `
            <h2>
            ${foundBusiness.companyName}
            </h2>
            <section>
            ${foundBusiness.addressFullStreet}

            </section>
            <section>
            ${foundBusiness.addressCity},
            ${foundBusiness.addressStateCode}
            ${foundBusiness.addressZipCode}
            </section>
            <br>
        `;
    }
});