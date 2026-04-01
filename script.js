const codeInput = document.getElementById("code");
const preview = document.getElementById("preview");

codeInput.addEventListener("input", () => {
  preview.textContent = codeInput.value;
});

function downloadImage() {
  alert("Download feature coming soon 🚀");
}
