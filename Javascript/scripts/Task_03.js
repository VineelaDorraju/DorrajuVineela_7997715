// Task 3: Conditionals, Loops, and Error Handling

// Mock array data containing statuses and available inventory
const eventsArray = [
    { name: "Community Picnic", date: "June 15, 2026", seats: 15, isPast: false },
    { name: "Farmers Market", date: "Every Saturday", seats: 50, isPast: false },
    { name: "Music Festival", date: "July 20, 2026", seats: 0, isPast: false }, // Full event
    { name: "Charity Auction", date: "May 10, 2026", seats: 10, isPast: true }  // Past event
];

// Loop through the event list and display using forEach(), filtering out invalid items
window.addEventListener("load", () => {
    const eventListContainer = document.getElementById("dynamicEventList");
    eventListContainer.innerHTML = "";

    eventsArray.forEach(evt => {
        // Use if-else to hide past or full events
        if (evt.isPast || evt.seats <= 0) {
            console.log(`Hidden event (Past/Full): ${evt.name}`);
        } else {
            const li = document.createElement("li");
            li.innerHTML = `${evt.name} — <em>${evt.date}</em> (Seats: <span id="seats-${evt.name.replace(/\s+/g, '')}">${evt.seats}</span>)`;
            eventListContainer.appendChild(li);
        }
    });
});

// Wrap registration logic in try-catch to handle errors gracefully
function showMessage(event) {
    event.preventDefault();
    const selectedEventName = document.getElementById("regEvent").value;
    const feedbackOutput = document.getElementById("msg");

    try {
        // Find the matched object inside our source array
        const targetEvent = eventsArray.find(e => e.name === selectedEventName);

        if (!targetEvent) {
            throw new Error("Please select a valid upcoming event.");
        }
        if (targetEvent.isPast) {
            throw new Error("Registration closed. This event has already passed.");
        }
        if (targetEvent.seats <= 0) {
            throw new Error("Registration failed. No available seats remaining!");
        }

        // Processing success path
        targetEvent.seats--;
        const elementId = `seats-${targetEvent.name.replace(/\s+/g, '')}`;
        const targetSpan = document.getElementById(elementId);
        if (targetSpan) {
            targetSpan.innerText = targetEvent.seats;
        }

        feedbackOutput.style.color = "green";
        feedbackOutput.innerHTML = `Registration submitted successfully for ${targetEvent.name}!`;

    } catch (error) {
        // Catch block execution handling the thrown validation issues
        feedbackOutput.style.color = "red";
        feedbackOutput.innerHTML = `Error: ${error.message}`;
    }
}

// Retained Portal Functions
function checkPhone() {
    let p = document.getElementById("phone").value;
    document.getElementById("pmsg").innerHTML = (p.length == 10) ? "✓ Valid" : "✗ Invalid";
}

function showFee(val) {
    document.getElementById("fee").innerHTML = val ? "Fee: ₹" + val : "";
}

function count() {
    let t = document.getElementById("fb").value;
    document.getElementById("count").innerText = t.length;
}

function submitForm() {
    document.getElementById("emsg").innerHTML = "Submitted successfully!";
}
