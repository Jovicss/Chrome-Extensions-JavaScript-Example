// Simple Chrome Extension made by: @Jovic#8370

let myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocStor = JSON.parse( localStorage.getItem("myLeads") ) 
//local.Storage.getItem("")  Give access to see every item which was saved in our local Storage, (item savign with localStorage.setItem("key", "value"))

if (leadsFromLocStor) {
    myLeads = leadsFromLocStor
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear("myLeads")
    myLeads = []
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li> 
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a> 
            </li>
        `
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}