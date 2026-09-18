
const correctPassword = "12345";

function checkPassword() {
const password = document.getElementById("password").value;
const overlay = document.getElementById("passwordOverlay");
const error = document.getElementById("error");

if (password === correctPassword) {
overlay.style.display = "none";
} else {
error.style.display = "block";
}
}

// Press Enter to unlock
document.getElementById("password").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
checkPassword();
}
});
