// Task 2: Syntax, Data Types, and Operators

const eventName = "Community Picnic";
const eventDate = "June 15, 2026";
let availableSeats = 50;

window.addEventListener("load", () => {
    const infoMessage = `Event: ${eventName} is scheduled on ${eventDate}.`;
    console.log(infoMessage);
    
    document.getElementById("eventBannerInfo").innerText = infoMessage;
    document.getElementById("seatDisplay").innerText = availableSeats;
});

function showMessage(event) {
    event.preventDefault();
    
    if (availableSeats > 0) {
        availableSeats--; 
        document.getElementById("seatDisplay").innerText = availableSeats;
        document.getElementById("msg").innerHTML = `Registration submitted successfully! Your seat is reserved.`;
    } else {
        document.getElementById("msg").innerHTML = `Registration failed. No seats available!`;
    }
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
