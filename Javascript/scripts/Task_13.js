// Task 13: Debugging and Testing

window.addEventListener("load", () => {
    const form = document.getElementById("debuggedRegistrationForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Log form submission steps inside Chrome Dev Tools Console
        console.log("[Debug Step 1] Form submission intercepted. Initializing state analysis.");

        const nameValue = document.getElementById("devName").value;
        const emailValue = document.getElementById("devEmail").value;

        console.log(`[Debug Step 2] Captured input references. Name: ${nameValue}, Email: ${emailValue}`);

        // JavaScript debugger invocation statement to create an active breakpoint
        debugger; 

        const requestPayload = { name: nameValue, email: emailValue };
        console.log("[Debug Step 3] Check fetch request payload structure:", JSON.stringify(requestPayload));

        fetch("https://typicode.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestPayload)
        })
        .then(res => {
            console.log("[Debug Step 4] Received HTTP status signal code:", res.status);
            return res.json();
        })
        .then(data => {
            console.log("[Debug Step 5] Data processing confirmed via Network tab serialization:", data);
            document.getElementById("msg").innerHTML = "Debug submission tracking verified.";
        })
        .catch(err => {
            console.error("[Debug Exception Block Error Alert] Request tracking dropped:", err);
        });
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
