
    document.querySelectorAll(".circle").forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        const degrees = (percent / 100) * 360;
        circle.style.background = `conic-gradient(#76ABAE ${degrees}deg, #31363F ${degrees}deg)`;
    });
    if (navigator.userAgent.match(/Mobile|Android|iPhone|iPad/i)) {
        document.body.style.zoom = "80%"; // Scale down for mobile browsers
    }
if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "desktop-only-message.html";
}


