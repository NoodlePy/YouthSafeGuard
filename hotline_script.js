const delay = ms => new Promise(res => setTimeout(res, ms));

async function showNumPopup() {
    console.log("code clicked")
    var popup = document.getElementById("numPopup1");
    popup.classList.toggle("show");
    await delay(1000);
    popup.classList.toggle("show");
    navigator.clipboard.writeText("911");
    console.log("fuc")
}
async function showNumPopup2() {
    console.log("code clicked")
    var popup = document.getElementById("numPopup2");
    popup.classList.toggle("show");
    await delay(1000);
    popup.classList.toggle("show");
    navigator.clipboard.writeText("112");
    console.log("fuc")
}
async function showNumPopup3() {
    console.log("code clicked")
    var popup = document.getElementById("numPopup3");
    popup.classList.toggle("show");
    await delay(1000);
    popup.classList.toggle("show");
    navigator.clipboard.writeText("8004224453");
    console.log("fuc")
}