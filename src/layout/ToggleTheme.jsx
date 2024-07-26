import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
export default function ToggleTheme() {
  const mode = useRef(null);
  useEffect(() => {
    if (
      !localStorage.getItem("color-theme") ||
      localStorage.getItem("color-theme") === "dark"
    )
      mode.current.checked = true;
  }, []);

  const darkMode = () => {
    if (!localStorage.getItem("color-theme")) {
      localStorage.setItem("color-theme", "dark");
    }
    getThemePreference();
  };
  const getThemePreference = () => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let status = null;
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        status = true;
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        status = false;
      }
    }
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = status;
    });
  };
  darkMode();
  return (
    <>
      <label className="switch ms-2">
        <input type="checkbox" ref={mode} onClick={getThemePreference} />
        <span className="slider"></span>
      </label>
    </>
  );
}
