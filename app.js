const ids = ["likesDone", "commentsDone"];
const fill = document.getElementById("meterFill");
const label = document.getElementById("meterLabel");
function render() {
  let done = 0;
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.checked = localStorage.getItem("clean-insta-" + id) === "true";
    if (input.checked) done++;
  });
  fill.style.width = (done / ids.length * 100) + "%";
  label.textContent = done + " de 2 concluídas";
}
ids.forEach(id => document.getElementById(id).addEventListener("change", event => {
  localStorage.setItem("clean-insta-" + id, String(event.target.checked));
  render();
}));
document.getElementById("reset").addEventListener("click", () => {
  ids.forEach(id => localStorage.removeItem("clean-insta-" + id));
  render();
});
render();