// jQuery
$(function () {
  const $panels = $(".panel");
  const $toggles = $(".panel-toggle");

  // Width Indication
  const $width = $("#width");
  function updateWidth() {
    $width.text(window.innerWidth + "px");
  }

  // Run on load
  updateWidth();

  // Run on resize
  $(window).on("resize", function () {
    updateWidth();
  });

  // -------- Accordion --------
  function closePanel($panel) {
    const $content = $panel.find(".panel-content").first();
    const $btn = $panel.find(".panel-toggle").first();

    $panel.removeClass("is-open");
    $btn.attr("aria-expanded", "false");
    $content.css("max-height", "0px");
  }

  function openPanel($panel) {
    const $content = $panel.find(".panel-content").first();
    const $btn = $panel.find(".panel-toggle").first();

    $panel.addClass("is-open");
    $btn.attr("aria-expanded", "true");

    // Set exact height for smooth transition
    const h = $content[0].scrollHeight;
    $content.css("max-height", h + "px");
  }

  function togglePanel($panel) {
    if (!$panel || !$panel.length) return;

    const isOpen = $panel.hasClass("is-open");
    $panels.each(function () { closePanel($(this)); });
    if (!isOpen) openPanel($panel);
  }

  // Click
  $toggles.on("click", function () {
    const $panel = $(this).closest(".panel");
    togglePanel($panel);
  });

  // Keyboard (Enter/Space)
  $toggles.on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const $panel = $(this).closest(".panel");
      togglePanel($panel);
    }
  });

  //Open first panel on load
  $panels.each(function () { closePanel($(this)); });
  openPanel($panels.first());

  // Open all panels during testing
  // $panels.each(function () {
  //   openPanel($(this));
  // });

  // Keep open panel height correct on resize
  $(window).on("resize", function () {
    const $open = $(".panel.is-open").first();
    if (!$open.length) return;
    const $content = $open.find(".panel-content").first();
    $content.css("max-height", $content[0].scrollHeight + "px");
  });

 // -------- Navigation -> Open Accordion Panel (transition-safe scroll) --------
$(".navigation a").on("click", function (e) {
  e.preventDefault();

  const targetId = $(this).attr("href"); // "#services"
  const $targetPanel = $(targetId).closest(".panel");
  if (!$targetPanel.length) return;

  // open it (your existing logic)
  togglePanel($targetPanel);

  const $content = $targetPanel.find(".panel-content").first();

  const doScroll = () => {
    // scroll-margin-top in CSS will handle the offset nicely
    $targetPanel[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Wait for the accordion animation to finish, then scroll
  $content.one("transitionend webkitTransitionEnd", doScroll);

  // Fallback in case transitionend doesn’t fire (mobile weirdness)
  setTimeout(doScroll, 750);
});

  // -------- Responsive Image Swap --------
  const BREAKPOINT = 640; // match your CSS breakpoint
  const DESKTOP_DIR = "assets/images/desktop/";
  const MOBILE_DIR = "assets/images/mobile/";

  function swapImages() {
    const useMobile = window.innerWidth <= BREAKPOINT;
    const dir = useMobile ? MOBILE_DIR : DESKTOP_DIR;

    $(".resp-img").each(function () {
      const $img = $(this);
      const base = $img.data("base"); // from data-base="..."
      if (!base) return;

      const nextSrc = dir + base;

      // avoid pointless re-sets
      if ($img.attr("src") !== nextSrc) {
        $img.attr("src", nextSrc);
      }
    });
  }

  // simple throttle so resize doesn't spam
  function throttle(fn, wait) {
    let timer = null;
    return function () {
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, wait);
    };
  }

  swapImages();
  $(window).on("resize", throttle(swapImages, 150));
});
