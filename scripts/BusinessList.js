import { getBusinesses } from "./BusinessData.js";
import { BusinessHTML } from "./Business.js";

const businessElement = document.querySelector(".business")
const NYElement = document.querySelector(".businessList--newYork")
const purchAgentsElement = document.querySelector(".purch_Agents")


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



    
export const purchAgentList = () => {
    let businessArray = getBusinesses();
        
    const purchAgents = businessArray.map(agent => {
        return agent.purchasingAgent;
    })
    purchAgents.forEach(
        (element) => {
            purchAgentsElement.innerHTML += `<h4>${element.nameFirst} ${element.nameLast} </h4> <br>`
    })
}
