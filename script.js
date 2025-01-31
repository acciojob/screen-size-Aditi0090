//your JS code here. If required.
function updateSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById("sizeText").textContent = `Width: ${width} and Height: ${height}`;
}

window.addEventListener("resize", updateSize);
updateSize();
