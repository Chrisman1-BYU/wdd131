document.addEventListener("DOMContentLoaded", () => {
    console.log("Site plan loaded successfully");

    const form = document.querySelector("form");

    form.addEventListener("submit", () => {
        alert("Thank you! Your review has been submitted.");
    });
});