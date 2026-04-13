const appData = {
    resources: [
        { title: "Math Study Tips", level: "Basic" },
        { title: "Science Guide", level: "Intermediate" }, 
        { title: "Exam Strategy", level: "Advanced" }
    ]
};

function displayResources() {
    const container = document.getElementById("resourceContainer");
    if (!container) return;

    appData.resources.forEach(item => {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>Level: ${item.level}</p>
        `;

        container.appendChild(card);
    });
}

function handleForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name === "" || message === "") {
            alert("Please fill all fields");
            return;
        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userMessage", message);

        alert(`Thank you ${name}, your message has been saved!`);
    });
}

displayResources();
handleForm();