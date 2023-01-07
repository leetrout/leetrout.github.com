import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("themeswitcher", () => ({
  label: "☀🠺🌙",
  toggle() {
    console.log("themeswitcher toggle away from", localStorage.theme);
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      this.label = "☀🠺🌙";
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      this.label = "🌙🠺☀";
      localStorage.theme = "dark";
    }
  },
}));

Alpine.start();
