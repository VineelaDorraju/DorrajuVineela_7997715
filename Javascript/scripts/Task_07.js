// Task 07: DOM Manipulation

const eventsStore = [
    { id: 1, name: "Community Picnic", date: "June 15, 2026", registered: false },
    { id: 2, name: "Farmers Market", date: "Every Saturday", registered: false }
];

function renderDashboardCards() {
    // Access DOM elements using querySelector()
    const container = document.querySelector("#cardsDashboard");
    if (!container) return;
    
    container.innerHTML = "";

    eventsStore.forEach(evt => {
        // Create and append event cards using createElement()
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "6px";
        card.style.padding = "15px";
        card.style.width = "220px";
        card.style.background = "#fff";
        card.style.textAlign = "center";
        card.style.boxShadow = "2px 2px 6px rgba(0,0,0,0.05)";

        card.innerHTML = `
            <h3>${evt.name}</h3>
            <p>${evt.date}</p>
            <p>Status: <b>${evt.registered ? "Registered" : "Not Registered"}</b></p>
            <button id="btn-${evt.id}" style="padding: 6px 12px; cursor: pointer; background: ${evt.registered ? '#d9534f' : '#5cb85c'}; color: #fff; border: none; border-radius: 4px;">
                ${evt.registered ? "Cancel Registration" : "Register Now"}
            </button>
        `;

        container.appendChild(card);

        // Attach action dynamic modules updating configurations
        const actionBtn = card.querySelector(`#btn-${evt.id}`);
        actionBtn.addEventListener("click", () => {
            // Update UI when user registers or cancels
            evt.registered = !evt.registered;
            renderDashboardCards();
        });
    });
}

window.addEventListener("load", () => {
    renderDashboardCards();
});

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
