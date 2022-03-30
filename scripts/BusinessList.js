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


export const agentArray = getBusinesses().map(bizObj => (
    {
        fullName: `${bizObj.purchasingAgent.nameFirst} ${bizObj.purchasingAgent.nameLast}`,
        company: bizObj.companyName,
        phoneNumber: bizObj.phoneWork
    }
    ))
    

    export const purchAgentHTML = () => {
        const purchAgentsElement = document.querySelector(".purch_Agents")
        purchAgentsElement.innerHTML += `<section>`
        
        for (let agent of agentArray) {
            purchAgentsElement.innerHTML += `
            <h4> ${agent.fullName}</h4>
            ${agent.company} <br>
            ${agent.phoneNumber} <br>
            `
        }
        purchAgentsElement.innerHTML += `</section>`
    }


