document.getElementById("username").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("password").focus();
    }
});

document.getElementById("password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verifyLoginInfo();
    }
});

document.querySelector(".boxl").addEventListener("click", verifyLoginInfo);

function verifyLoginInfo() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === username && password === password) {
        window.location.href = "pages/groupspage.html";
    }
}