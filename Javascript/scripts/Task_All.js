// Task 1 to 14: Combined JavaScript Exercises Architecture Module

// Framework Move Benefit Reflection (Task 14): Component frameworks like React or Vue utilize a declarative virtual DOM mechanism that binds layout elements to state models automatically, eliminating manual DOM selection, mutation tracking, or imperative string template concatenation steps.

// Task 5.1: Define Event Constructor
function CommunityEvent(name, date, seats, category, isPast = false) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
    this.isPast = isPast;
}

// Task 5.2: Add checkAvailability() to prototype structure
CommunityEvent.prototype.checkAvailability = function() {
    return this.seats > 0 && !this.isPast;
};

// Task 6.1: Master Database Core Storage Arrays
const masterEventsDatabase = [];

// Task 4: Functional Core Modules and Tracking Engines
function addEvent(name, date, seats, category, isPast = false) {
    masterEventsDatabase.push(new CommunityEvent(name, date, seats, category, isPast));
}

// Task 4: Closure engine tracking total registrations for a category independently
function createMetricsTracker() {
    const trackingStore = { Social: 0, Market: 0, Music: 0 };
    return function(categoryName) {
        if (categoryName in trackingStore) {
            trackingStore[categoryName]++;
            return trackingStore[categoryName];
        }
        return 0;
    };
}
const incrementCategoryCount = createMetricsTracker();

// Task 4 & Task 10: Higher-Order filtering passing fallback validation loops
function filterPortalCollection(queryCriterion, targetField, databaseReference, matchingCallback) {
    // Task 10: Spread operator cloning dataset collection array before operations execution
    const duplicatedClone = [...databaseReference];
    return duplicatedClone.filter(item => matchingCallback(item, queryCriterion, targetField));
}

// Task 7: DOM Manipulation core orchestration pipeline mapping view metrics
function synchronisePortalViews() {
    // Task 7.1: Access DOM elements using querySelector() API rules
    const cardsContainer = document.querySelector("#portalCardsWrapper");
    const listContainer = document.querySelector("#traditionalRosterContainer");
    const selectionDropdown = document.querySelector("#targetEventSelector");

    if (!cardsContainer || !listContainer || !selectionDropdown) return;

    // Preserve selection states before wiping view elements
    const cachedSelection = selectionDropdown.value;

    cardsContainer.innerHTML = "";
    listContainer.innerHTML = "";
    selectionDropdown.innerHTML = '<option value="">Select Event Target</option>';

    // Console logging task constraints mapping Object Metadata fields
    console.log("[System Sync] Evaluation of active data objects state values:");

    masterEventsDatabase.forEach((evt) => {
        // Task 3: Filter logic hiding full or past events from active viewer access
        if (evt.isPast || evt.seats <= 0) {
            return;
        }

        // Task 5.3: List object keys and values using Object.entries() in debug channels
        Object.entries(evt).forEach(([key, val]) => {
            console.log(` -> Event: [${evt.name}] Properties mapping [${key}]: ${val}`);
        });

        // Task 10: Destructuring configuration to extract individual model parameters
        const { name, date, seats, category } = evt;

        // Task 2.2 & 7.2: Use template literals inside createElement constructs
        const cardNode = document.createElement("div");
        cardNode.className = "event-card-item";
        cardNode.style.cssText = "border: 1px solid #ddd; padding: 15px; border-radius: 6px; width: 220px; background-color: #ffffff; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);";
        cardNode.innerHTML = `
            <h4 style="margin: 0 0 10px 0; color: #333;">${name}</h4>
            <p style="margin: 5px 0; font-size: 0.9em; color: #666;">Date: ${date}</p>
            <p style="margin: 5px 0; font-size: 0.85em; color: #444;">Category: <b>${category}</b></p>
            <p style="margin: 10px 0 0 0; font-size: 0.9em; font-weight: bold; color: #27ae60;">Inventory: ${seats} left</p>
            <button onclick="executeDirectCancellation('${name}')" style="margin-top: 10px; font-size: 0.8em; background-color: #e74c3c; color: white; border: none; padding: 3px 8px; border-radius: 3px; cursor: pointer;">Cancel Space</button>
        `;
        cardsContainer.appendChild(cardNode);

        // Populate lists layout elements
        const listNode = document.createElement("li");
        listNode.innerHTML = `<strong>${name}</strong> - Scheduled on: <em>${date}</em> [${category}]`;
        listContainer.appendChild(listNode);

        // Populate dropdown options
        const optionNode = document.createElement("option");
        optionNode.value = name;
        optionNode.innerText = name;
        selectionDropdown.appendChild(optionNode);
    });

    selectionDropdown.value = cachedSelection;
}

// Task 7.3: Direct cancellation workflow module
window.executeDirectCancellation = function(eventNameTarget) {
    const match = masterEventsDatabase.find(e => e.name === eventNameTarget);
    if (match) {
        // Task 2.3: Increment seat values back to pool
        match.seats++;
        console.log(`[Task 7 Update] Registration cancelled for ${eventNameTarget}. Inventory incremented.`);
        synchronisePortalViews();
    }
};

// Task 9: Asynchronous JSON fetch pipeline with state engine loaders
async function loadPortalRemoteDataAsync() {
    console.log("[Task 13 Log] Bootstrapping remote dataset stream connections.");
    const spinner = document.getElementById("asyncSpinner");
    if (spinner) spinner.style.display = "block";

    try {
        // Simulating data streams by fetching placeholder payloads
        const response = await fetch("https://typicode.com");
        if (!response.ok) throw new Error("HTTP structural communication error dropped.");
        await response.json();

        // Populate database records cleanly
        addEvent("Community Picnic", "June 15, 2026", 20, "Social", false);
        addEvent("Farmers Market", "Every Saturday", 45, "Market", false);
        addEvent("Rock Concert", "July 12, 2026", 80, "Music", false);
        addEvent("Jazz Performance", "August 05, 2026", 0, "Music", false); // Full Event
        addEvent("Historic Gala", "April 02, 2026", 15, "Social", true);   // Past Event

        console.log("[Task 13 Log] Array payload hydration complete. Processing view syncs.");
        synchronisePortalViews();

    } catch (err) {
        console.error("[Task 13 Log Exception] Asynchronous loading operation broke down: ", err.message);
    } finally {
        if (spinner) spinner.style.display = "none";
    }
}

// Task 1: Initialize baseline system setup variables mapping browser triggers
console.log("Welcome to the Community Portal");
window.addEventListener("load", () => {
    alert("Welcome to the Community Portal! Page is fully loaded.");
    loadPortalRemoteDataAsync();

    // Task 8.3: Keydown listener capturing quick searches
    const searchField = document.getElementById("searchQuery");
    if (searchField) {
        searchField.addEventListener("keydown", (e) => {
            console.log(`[Task 13 Debug] Keydown caught on input stream. Character value: ${e.key}`);
            setTimeout(() => {
                const queryVal = searchField.value.trim().toLowerCase();
                const cards = document.querySelectorAll(".event-card-item");
                
                cards.forEach(card => {
                    const headerText = card.querySelector("h4").innerText.toLowerCase();
                    card.style.display = headerText.includes(queryVal) ? "block" : "none";
                });
            }, 10);
        });
    }

    // Task 8.2: Category filter change listener mapping custom validation callbacks
    const filterSelect = document.getElementById("categoryFilter");
    if (filterSelect) {
        filterSelect.addEventListener("change", (e) => {
            const chosenCategory = e.target.value;
            console.log(`[Task 8] Active filter selection modified to value profile: ${chosenCategory}`);
            
            if (chosenCategory === "All") {
                synchronisePortalViews();
            } else {
                const results = filterPortalCollection(chosenCategory, "category", masterEventsDatabase, (item, crit, field) => {
                    return item[field] === crit;
                });
                
                // Clear out views and append matching subset elements exclusively
                const cardsContainer = document.querySelector("#portalCardsWrapper");
                if (cardsContainer) {
                    cardsContainer.innerHTML = "";
                    results.forEach(evt => {
                        const cardNode = document.createElement("div");
                        cardNode.className = "event-card-item";
                        cardNode.style.cssText = "border: 1px solid #ddd; padding: 15px; border-radius: 6px; width: 220px; background-color: #ffffff; text-align: center;";
                        cardNode.innerHTML = `<h4>${evt.name}</h4><p>Category: ${evt.category}</p><p>Inventory: ${evt.seats}</p>`;
                        cardsContainer.appendChild(cardNode);
                    });
                }
            }
        });
    }
});

// Task 14: Native jQuery document ready listener linking component manipulation animations
$(document).ready(function() {
    // Task 14.1: Programmatic binding using click identifiers
    $("#registerBtn").click(function() {
        console.log("[Task 13 Log] Form execution hook caught inside native jQuery container element.");
        processFormSubmissionFlow();
    });

    // Task 14.2: Execution of interactive animation routines matching card item targets
    let cardsVisibilityState = true;
    $("#toggleCardsBtn").click(function() {
        if (cardsVisibilityState) {
            $(".event-card-item").fadeOut("slow");
            cardsVisibilityState = false;
        } else {
            $(".event-card-item").fadeIn("slow");
            cardsVisibilityState = true;
        }
    });
});

// Task 11: Core form orchestration, processing data extraction and validations
function processFormSubmissionFlow() {
    const form = document.getElementById("portalRegistrationForm");
    if (!form) return;

    // Task 11.1: Capture fields map using internal elements arrays
    const formElements = form.elements;
    const nameInput = formElements["applicantName"].value.trim();
    const emailInput = formElements["applicantEmail"].value.trim();
    const selectedEventName = formElements["targetEventSelector"].value;

    // Reset UI error blocks
    document.getElementById("errApplicantName").innerText = "";
    document.getElementById("errApplicantEmail").innerText = "";
    document.getElementById("errTargetEvent").innerText = "";
    document.getElementById("msg").innerHTML = "";

    // Task 3.3: Wrap functional verification checks inside standard Try/Catch validation layers
    try {
        let submissionFlag = true;

        if (nameInput === "") {
            document.getElementById("errApplicantName").innerText = "Applicant name string field is required.";
            submissionFlag = false;
        }
        if (emailInput === "") {
            document.getElementById("errApplicantEmail").innerText = "Email string endpoint registration parameter is required.";
            submissionFlag = false;
        } else if (!emailInput.includes("@") || !emailInput.includes(".")) {
            document.getElementById("errApplicantEmail").innerText = "Invalid structural format processing email criteria.";
            submissionFlag = false;
        }
        if (selectedEventName === "") {
            document.getElementById("errTargetEvent").innerText = "Please choose an active target event record item.";
            submissionFlag = false;
        }

        if (!submissionFlag) {
            throw new Error("Validation failure mapping parameters constraint configurations.");
        }

        const match = masterEventsDatabase.find(e => e.name === selectedEventName);
        if (!match || !match.checkAvailability()) {
            throw new Error("Target selection has sold out or is invalid.");
        }

        // Task 2.3: Manage seat inventory changes using standard decrement operations
        match.seats--;

        // Task 4: Execute closure function update loops and sync stat counters
        const currentCategoryTotal = incrementCategoryCount(match.category);
        const statTarget = document.getElementById(`stat-${match.category}`);
        if (statTarget) {
            statTarget.innerText = currentCategoryTotal;
        }

        // Task 12: Fire AJAX background data transmission pipelines simulating servers delays
        const postStatusContainer = document.getElementById("asyncPostStatus");
        postStatusContainer.innerText = "Transmitting reservation registration payload securely...";

        const dataPayload = { user: nameInput, email: emailInput, registrationTarget: selectedEventName };
        console.log("[Task 13 Log] Active request packet configuration compiled payload values:", JSON.stringify(dataPayload));

        // Task 13: Variable state tracking debugger point injection hook
        debugger;

        setTimeout(() => {
            fetch("https://typicode.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataPayload)
            })
            .then(res => {
                if (!res.ok) throw new Error("Server transmission error signal dropped.");
                return res.json();
            })
            .then(data => {
                postStatusContainer.innerText = "";
                document.getElementById("msg").style.color = "green";
                document.getElementById("msg").innerHTML = `Registration confirmed for ${selectedEventName}. Transaction ID: ${data.id}`;
                synchronisePortalViews();
            })
            .catch(err => {
                postStatusContainer.innerText = "";
                document.getElementById("msg").style.color = "red";
                document.getElementById("msg").innerHTML = `AJAX Pipeline Error: ${err.message}`;
            });
        }, 1200);

    } catch (error) {
        console.warn(`[Registration Error] Handling operation tracking exception: ${error.message}`);
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerHTML = error.message;
    }
}

// Fallback legacy global event helper hooks
window.checkPhone = function() {
    let p = document.getElementById("phone").value;
    document.getElementById("pmsg").innerHTML = (p.length == 10) ? "Valid" : "Invalid";
};

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
