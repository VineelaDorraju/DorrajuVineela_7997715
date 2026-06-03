// Task 10: Modern JavaScript Features

const initialEventsList = [
    { name: "Community Picnic", date: "June 15, 2026", category: "Social" },
    { name: "Farmers Market", date: "Every Saturday", category: "Market" }
];

function renderEvents(eventsToDisplay) {
    const listElement = document.getElementById("allEventsList");
    if (!listElement) return;

    listElement.innerHTML = "";
    
    eventsToDisplay.forEach(eventItem => {
        // Destructuring assignment to extract variables
        const { name, date, category } = eventItem;
        
        const li = document.createElement("li");
        li.innerHTML = `${name} - <em>${date}</em> [Category: ${category}]`;
        listElement.appendChild(li);
    });
}

// Function declaring default parameters
window.applyFilter = function(categoryCriterion = "All") {
    // Spread operator used to clone the dataset array before execution
    const clonedDatabase = [...initialEventsList];
    
    let filteredList;
    if (categoryCriterion === "All") {
        filteredList = clonedDatabase;
    } else {
        filteredList = clonedDatabase.filter(item => item.category === categoryCriterion);
    }
    
    renderEvents(filteredList);
};

window.addEventListener("load", () => {
    applyFilter();
});

function showMessage(event) {
    event.preventDefault();
    document.getElementById("msg").innerHTML = "Registration submitted successfully!";
}

function checkPhone() {
    let p = document.getElementById("phone").value;
    document.getElementById("pmsg").innerHTML = (p.length == 10) ? "Valid" : "Invalid";
}

window.showFee = function(val) {
    document.getElementById("fee").innerHTML = val ? "Fee: INR " + val : "";
};

window.count = function() {
    let t = document.getElementById("fb").value;
    document.getElementById("count").innerText = t.length;
};

window.submitForm = function() {
    document.getElementById("emsg").innerHTML = "Submitted successfully!";
};
