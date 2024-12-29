const handleTheme = (e) => {
  if (e.target.checked) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
  } else {
      localStorage.setItem("theme", "light");
      document.querySelector("html").setAttribute("data-theme", "light");
  }
};

const setTheme = (value) => {
  if (value === "dark") {
    document.querySelector("html").setAttribute("data-theme", "dark");
  }
  if (value === "light") {
    document.querySelector("html").setAttribute("data-theme", "light");
  }
};
export { handleTheme, setTheme };
