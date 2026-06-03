// Task 09: Async JS, Promises, Async/Await

// Simulated Fetch engine hitting a mock JSON endpoint using Promises
function mockFetchEndpoint() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve([
                    { name: "Community Picnic", date: "June 15, 2026" },
                    { name: "Farmers Market", date: "Every Saturday" }
                ]);
            } else {
                reject("Network response payload error.");
            }
        }, 1200);
    });
}

// Rewrite using async/await and show loading spinner tracking execution state
async function loadPortalEventsAsync() {
    const spinner = document.getElementById("loadingSpinner");
    const ul = document.getElementById("asyncEventList");
    
    if (!ul || !spinner) return;
    
    ul.innerHTML = "";
    spinner.style.display = "block"; // Display spinner view component

    try {
        // Await the asynchronous engine interface
        const data = await mockFetchEndpoint();
        
        data.forEach(evt => {
            const li = document.createElement("li");
            li.innerHTML = `${evt.name} — <em>${evt.date}</em>`;
            ul.appendChild(li);
        });
    } catch (err) {
        // Fallback block error mechanism logging
        console.error("Async Error Context: ", err);
        ul.innerHTML = `<li style="color:red;">Failed to retrieve records: ${err}</li>`;
    } finally {
        spinner.style.display = "none"; // Hide spinner tracking execution finish
    }
}

// Initial demonstration module using classic .then() and .catch() methods
function demonstrateThenCatchPipeline() {
    mockFetchEndpoint()
        .then(res => console.log("Demonstrating .then() response context: ", res))
        .catch(err => console.log("Demonstrating .catch() error hook context: ", err));
}

window.addEventListener("load", () => {
    demonstrateThenCatchPipeline();
    loadPortalEventsAsync();
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
