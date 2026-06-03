// Task 14: jQuery and JS Frameworks

// Framework Move Benefit: Moving to component-driven frameworks like React or Vue introduces a declarative virtual DOM that updates elements automatically when underlying data state configurations change, removing the need to write fragile manual DOM query selectors or imperative modification steps.

$(document).ready(function() {
    // Use $('#registerBtn').click(...) to handle click events efficiently
    $("#registerBtn").click(function() {
        $("#msg").text("Registration handled successfully via native jQuery engine selectors.");
    });

    // Use .fadeIn() and .fadeOut() animation utilities for managing event cards view states
    let visibleStateFlag = true;
    $("#toggleCardsBtn").click(function() {
        if (visibleStateFlag) {
            $(".event-card-item").fadeOut("slow");
            visibleStateFlag = false;
        } else {
            $(".event-card-item").fadeIn("slow");
            visibleStateFlag = true;
        }
    });
});

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
