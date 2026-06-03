// Task 08: Event Handling

const interactiveEvents = [
    { name: "Community Picnic", category: "Social", date: "June 15, 2026" },
    { name: "Farmers Market", category: "Market", date: "Every Saturday" }
];

function populateControlView(list) {
    const ul = document.getElementById("interactiveEventList");
    if (!ul) return;
    ul.innerHTML = "";

    list.forEach(evt => {
        const li = document.createElement("li");
        li.style.margin = "10px 0";
        // Use onclick for "Register" buttons
        li.innerHTML = `
            ${evt.name} [${evt.category}] — <em>${evt.date}</em>
            <button onclick="triggerQuickAlert('${evt.name}')" style="margin-left:10px; cursor:pointer;">Register</button>
        `;
        ul.appendChild(li);
    });
}

window.addEventListener("load", () => {
    populateControlView(interactiveEvents);
});

window.triggerQuickAlert = function(name) {
    alert(`Quick registration triggered for: ${name}`);
};

// Use onchange to filter events by category
window.handleCategoryFilter = function(category) {
    if (category === "All") {
        populateControlView(interactiveEvents);
    } else {
        const filtered = interactiveEvents.filter(e => e.category === category);
        populateControlView(filtered);
    }
};

// Use keydown to allow quick search by name
window.handleNameSearch = function(event) {
    if (event.key === "Enter") {
        const query = event.target.value.toLowerCase().trim();
        const filtered = interactiveEvents.filter(e => e.name.toLowerCase().includes(query));
        populateControlView(filtered);
    }
};

function showMessage(event) {
    event.preventDefault();
    document.getElementById("msg").innerHTML = "Registration submitted successfully!";
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
