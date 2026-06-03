// Task 11: Working with Forms

window.addEventListener("load", () => {
    const formElement = document.getElementById("portalRegistrationForm");
    if (!formElement) return;

    formElement.addEventListener("submit", function(event) {
        // Prevent default submission browser page reloads
        event.preventDefault();

        // Access target objects using internal form.elements array
        const elementsMap = formElement.elements;
        const nameVal = elementsMap["userName"].value.trim();
        const emailVal = elementsMap["userEmail"].value.trim();
        const eventVal = elementsMap["selectedEvent"].value;

        // Reset display targets
        document.getElementById("errName").innerText = "";
        document.getElementById("errEmail").innerText = "";
        document.getElementById("errEvent").innerText = "";
        document.getElementById("msg").innerHTML = "";

        let statusFlag = true;

        // Custom explicit inline constraint validation processing
        if (nameVal === "") {
            document.getElementById("errName").innerText = "Name input is a required field.";
            statusFlag = false;
        }

        if (emailVal === "") {
            document.getElementById("errEmail").innerText = "Email configuration input is required.";
            statusFlag = false;
        } else if (!emailVal.includes("@") || !emailVal.includes(".")) {
            document.getElementById("errEmail").innerText = "Please provide a structurally valid email string.";
            statusFlag = false;
        }

        if (eventVal === "") {
            document.getElementById("errEvent").innerText = "Selection of an upcoming event item is required.";
            statusFlag = false;
        }

        if (statusFlag) {
            document.getElementById("msg").style.color = "green";
            document.getElementById("msg").innerHTML = "Registration processed successfully based on constraints.";
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
