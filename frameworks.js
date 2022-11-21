let general = document.getElementById("elements");
let selected = document.getElementById("selected");
let li = document.getElementsByTagName("li");
[...general.children].forEach(l => l.addEventListener("click", () => move(l)))
function move(li) {
    if (general.contains(li)) {
        li.remove()
        selected.appendChild(li);
    }
    else { general.appendChild(li); }
}