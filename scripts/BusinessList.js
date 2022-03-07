import { getBusinesses } from "./BusinessData.js";
import { BusinessHTML } from "./Business.js";

const businessElement = document.querySelector(".business")
const NYElement = document.querySelector(".businessList--newYork")   


export const businessList = () => {
    const businessArray = getBusinesses()
    const newYorkArray = businessArray.filter(business => {
        return business.addressStateCode === "NY"
    })

    businessArray.forEach(element => {
        businessElement.innerHTML += BusinessHTML(element);
    })

    newYorkArray.forEach(element => {
        NYElement.innerHTML += BusinessHTML(element);
    })

}
