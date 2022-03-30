import { businessList, purchAgentHTML} from "./BusinessList.js"
import { getBusinesses } from "./BusinessData.js"

businessList();
purchAgentHTML();



const businesses = getBusinesses();

const companySearchResultArticle = document.querySelector(".foundCompanies")

document.querySelector("#companySearch")
document.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        console.log(keyPressEvent)
        //get the input element and grab its value.
        //loop through the businesses objects and if any of the startWith inputElement.value then we identify that as the found business. 

        const foundBusiness = businesses.find(element => element.companyName.includes(keyPressEvent.target));

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

// 