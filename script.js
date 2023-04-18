function openSidebar() {
    document.getElementById("main-container").style.gridTemplateColumns = "30rem auto";
    document.getElementById("sidebar").style.width = "auto";
    document.getElementById("sidebar").style.paddingLeft = "2.5rem";
}
function closeSidebar() {
    document.getElementById("main-container").style.gridTemplateColumns = "0 auto";
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.paddingLeft = "0";
}