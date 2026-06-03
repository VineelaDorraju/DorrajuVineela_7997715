// Task 5: Objects and Prototypes

function CommunityEvent(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}

CommunityEvent.prototype.checkAvailability = function() {
    return this.seats > 0;
};

const internalEvents = [
    new CommunityEvent("Community Picnic", "June 15, 2026", 12),
    new CommunityEvent("Farmers Market", "Every Saturday", 0)
];

function updateUI() {
    const listElement = document.getElementById("allEventsList");
    if (!listElement) return;

    listElement.innerHTML = "";
    
    internalEvents.forEach(evt => {
        console.log(`--- Object Entries for ${evt.name} ---`);
        Object.entries(evt).forEach(([key, val]) => {
            console.log(`${key}: ${val}`);
        });

        const li = document.createElement("li");
        const status = evt.checkAvailability() ? `Available (${evt.seats} seats)` : "Sold Out";
        li.innerHTML = `${evt.name} — <em>${evt.date}</em> - <b>${status}</b>`;
        listElement.appendChild(li);
    });
}

window.addEventListener("load", () => {
    updateUI();
});

function showMessage(event) {
    event.preventDefault();
    const selectedName = document.getElementById("regEvent").value;
    const output = document.getElementById("msg");

    const match = internalEvents.find(e => e.name === selectedName);

    if (match && match.checkAvailability()) {
        match.seats--;
        output.style.color = "green";
        output.innerHTML = `Success! Registered for ${match.name}.`;
        updateUI();
    } else {
        output.style.color = "red";
        output.innerHTML = "Registration failed. Event is full.";
    }
}

function checkPhone() {
    let p = document.getElementById("phone").value;
    document.getElementById("pmsg").innerHTML = (p.length == 10) ? "✓ Valid" : "✗ Invalid";
}

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
