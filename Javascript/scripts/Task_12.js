// Task 12: AJAX & Fetch API

window.addEventListener("load", () => {
    const form = document.getElementById("asyncRegistrationForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const eventType = document.getElementById("regEvent").value;

        const statusDiv = document.getElementById("loadingStatus");
        const messageOutput = document.getElementById("msg");

        statusDiv.innerText = "Connecting to registration server...";
        messageOutput.innerHTML = "";

        const payload = {
            username: name,
            useremail: email,
            chosenEvent: eventType
        };

        // Use setTimeout() to simulate a delayed server response infrastructure
        setTimeout(() => {
            // Use fetch() to POST user data to a mock API endpoint
            fetch("https://typicode.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP network communication error occurred.");
                }
                return response.json();
            })
            .then(data => {
                statusDiv.innerText = "";
                messageOutput.style.color = "green";
                messageOutput.innerHTML = "Registration data posted successfully. Server Response ID: " + data.id;
            })
            .catch(error => {
                statusDiv.innerText = "";
                messageOutput.style.color = "red";
                messageOutput.innerHTML = "Submission failure: " + error.message;
            });
        }, 1500);
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
