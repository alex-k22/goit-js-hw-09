!function(){var t,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");d.disabled=!0;e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){e.disabled=!1,clearInterval(t),e.disabled=!1,d.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.fe3a5b3c.js.map
