// Task 6: Arrays and Methods

const centralArray = [];

// .push() operation
centralArray.push({ name: "Community Picnic", category: "Social", label: "Picnic Outing" });
centralArray.push({ name: "Farmers Market", category: "Market", label: "Weekly Market" });
centralArray.push({ name: "Rock Concert", category: "Music", label: "Rock Concert Extravaganza" });
centralArray.push({ name: "Jazz Festival", category: "Music", label: "Smooth Jazz Night" });

function renderMusicCards() {
    const container = document.getElementById("musicCardsContainer");
    if (!container) return;

    // .filter() operation
    const musicItems = centralArray.filter(item => item.category === "Music");

    // .map() operation
    const cardsHTML = musicItems.map(item => {
        return `
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background: #fff; width: 200px; text-align: center; box-shadow: 1px 1px 4px rgba(0,0,0,0.1);">
                <h3>${item.name}</h3>
                <p style="color: #555; font-style: italic;">Description: ${item.label}</p>
            </div>
        `;
    });

    container.innerHTML = cardsHTML.join("");
}

window.addEventListener("load", () => {
    renderMusicCards();
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
