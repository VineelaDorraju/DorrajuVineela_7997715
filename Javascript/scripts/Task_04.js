// Task 4: Functions, Scope, Closures, Higher-Order Functions

// Core data array containing categorized records
const eventsDatabase = [];

// 1. Create addEvent() to populate data structured objects
function addEvent(name, date, seats, category) {
    eventsDatabase.push({ name, date, seats, category });
}

// Populate system defaults using our initialization function
addEvent("Community Picnic", "June 15, 2026", 15, "Social");
addEvent("Farmers Market", "Every Saturday", 50, "Market");
addEvent("Music Festival", "July 20, 2026", 25, "Music");

// 2. Use closure to track total registrations for a category independently
function createRegistrationTracker() {
    const counts = { Social: 0, Market: 0, Music: 0 };
    
    return function(category) {
        if (category in counts) {
            counts[category]++;
            return counts[category];
        }
        return 0;
    };
}
const trackRegistration = createRegistrationTracker();

// 3. Pass callbacks to filter functions for dynamic search (Higher-Order Function)
function filterEventsByCategory(searchCriterion, callback) {
    return eventsDatabase.filter(evt => callback(evt, searchCriterion));
}

// Core rendering function to build UI views mapping structural elements
function renderPortalList(listToRender) {
    const eventListContainer = document.getElementById("dynamicEventList");
    if (!eventListContainer) return;
    
    eventListContainer.innerHTML = "";
    listToRender.forEach(evt => {
        const li = document.createElement("li");
        li.innerHTML = `${evt.name} — <em>${evt.date}</em> [Category: ${evt.category}] (Seats: ${evt.seats})`;
        eventListContainer.appendChild(li);
    });
}

// Window load bootstrap attaching handlers and running initialization views
window.addEventListener("load", () => {
    renderPortalList(eventsDatabase);

    // Setup input listener to fire filter actions processing callbacks real-time
    const searchBox = document.getElementById("searchBox");
    if (searchBox) {
        searchBox.addEventListener("input", (e) => {
            const query = e.target.value.trim();
            
            // Higher-order function call passing an inline evaluation callback function
            const filteredResults = filterEventsByCategory(query, (evt, criteria) => {
                if (!criteria) return true;
                return evt.category.toLowerCase().includes(criteria.toLowerCase());
            });
            
            renderPortalList(filteredResults);
        });
    }
});

// Refactored form engine incorporating registration modules and tracking counters
function showMessage(event) {
    event.preventDefault();
    const selectedName = document.getElementById("regEvent").value;
    const feedbackOutput = document.getElementById("msg");

    const matchedEvent = eventsDatabase.find(e => e.name === selectedName);

    if (matchedEvent && matchedEvent.seats > 0) {
        matchedEvent.seats--;
        
        // Execute closure function updater module
        const currentCategoryTotal = trackRegistration(matchedEvent.category);
        
        // Update DOM stats targets matching tracked counts
        const statLabel = document.getElementById(`stat-${matchedEvent.category}`);
        if (statLabel) {
            statLabel.innerText = currentCategoryTotal;
        }

        feedbackOutput.style.color = "green";
        feedbackOutput.innerHTML = `Registration successful for ${matchedEvent.name}!`;
        renderPortalList(eventsDatabase);
    } else {
        feedbackOutput.style.color = "red";
        feedbackOutput.innerHTML = "Selection invalid or item has sold out.";
    }
}

// Retained Portal Functions
function checkPhone() {
    let p = document.getElementById("phone").value;
    document.getElementById("pmsg").innerHTML = (p.length == 10) ? "✓ Valid" : "✗ Invalid";
}

// Corrected window-level function hooks for elements referencing them via HTML inline attributes
window.showFee = function(val) {
    document.getElementById("fee").innerHTML = val ? "Fee: ₹" + val : "";
};

window.count = function() {
    let t = document.getElementById("fb").value;
    document.getElementById("count").innerText = t.length;
};

window.submitForm = function() {
    document.getElementById("emsg").innerHTML = "Submitted successfully!";
};
