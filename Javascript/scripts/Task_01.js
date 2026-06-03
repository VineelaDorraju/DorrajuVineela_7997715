// Task 1: JavaScript Basics & Setup
console.log("Welcome to the Community Portal");

window.addEventListener("load", () => {
    alert("Welcome to the Community Portal! Page is fully loaded.");
});

// Event Portal Functional Modules
function showMessage(event) {
    event.preventDefault();
    document.getElementById("msg").innerHTML = "Registration submitted successfully!";
}

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
