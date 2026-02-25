// JavaScript for Unit 2 Project Site
$(document).ready(function() {
    var home = $('#home');
    home.addClass('test');
});

// Accordion behavior with smooth open/close height animation
const panels = document.querySelectorAll(".panel");
const toggles = document.querySelectorAll(".panel-toggle");

function closePanel(panel) {
  const content = panel.querySelector(".panel-content");
  const button = panel.querySelector(".panel-toggle");

  panel.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");
  content.style.maxHeight = "0px";
}

function openPanel(panel) {
  const content = panel.querySelector(".panel-content");
  const button = panel.querySelector(".panel-toggle");

  panel.classList.add("is-open");
  button.setAttribute("aria-expanded", "true");

  // Set exact height for smooth transition
  content.style.maxHeight = content.scrollHeight + "px";
}

function togglePanel(panel) {
  const isOpen = panel.classList.contains("is-open");

  // Close all first (accordion style)
  panels.forEach(closePanel);

  // Open selected if it was closed
  if (!isOpen) openPanel(panel);
}

// Click handling
toggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.closest(".panel");
    togglePanel(panel);
  });

  // Keyboard handling (Space/Enter)
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const panel = btn.closest(".panel");
      togglePanel(panel);
    }
  });
});

// Open first panel by default on load
window.addEventListener("load", () => {
  const first = panels[0];
  panels.forEach(closePanel);
  openPanel(first);
});

// Recalculate heights on resize (keeps open panel correct)
window.addEventListener("resize", () => {
  const open = document.querySelector(".panel.is-open");
  if (!open) return;
  const content = open.querySelector(".panel-content");
  content.style.maxHeight = content.scrollHeight + "px";
});
