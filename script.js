
    document.querySelectorAll(".circle").forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        const degrees = (percent / 100) * 360;
        circle.style.background = `conic-gradient(#76ABAE ${degrees}deg, #31363F ${degrees}deg)`;
    });

