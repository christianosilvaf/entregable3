const NuRe = document.querySelector("#NumberRes");
const output = document.querySelector(".NuRe-output");

output.textContent = NuRe.value;

NuRe.addEventListener("input", () => {
    output.textContent = Nure.value;
});