document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
});

document.getElementById("yes-btn").addEventListener("click", function() {
    window.location.href = "scorpion_page.html?confirmed=true";
});

document.getElementById("no-btn").addEventListener("click", function() {
    alert("Você não é um escorpião.");
});
