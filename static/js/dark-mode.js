window.onload = function () {
    var toggle = document.getElementById("dark-mode-toggle");
    var theme = document.getElementById("theme");
    
    if (!localStorage.getItem("dark-mode-storage")) {
        var hr = (new Date()).getHours();
        if (window.matchMedia('(prefers-color-scheme: dark)').matches || (hr < 7 || hr > 18)) {
            setTheme(localStorage.getItem("dark-mode-storage") || "dark");
        } else {
            setTheme(localStorage.getItem("dark-mode-storage") || "light");
        }
    } else {
        setTheme(localStorage.getItem("dark-mode-storage"))
    }

    toggle.addEventListener("click", () => {
        if (toggle.className === "fas fa-moon") {
            setTheme("dark");
        } else if (toggle.className === "fas fa-sun") {
            setTheme("light");
        }
    });

    function setTheme(mode) {
        if (mode === "dark") {
            theme.className = "darkTheme";
            toggle.className = "fas fa-sun";
        } else if (mode === "light") {
            theme.className = "lightTheme";
            toggle.className = "fas fa-moon";
        }
        localStorage.setItem("dark-mode-storage", mode);
    }
}