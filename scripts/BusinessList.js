import { getBusinesses } from "./BusinessData.js";
import { BusinessHTML } from "./Business.js";

const businessElement = document.querySelector(".business")

export const businessList = () => {
    const businessArray = getBusinesses();
    businessElement.innerHTML = "<h1>Business List</h1>";

    businessArray.forEach(
        (object) => {
            businessElement.innerHTML += BusinessHTML(object)
        }
    );
}