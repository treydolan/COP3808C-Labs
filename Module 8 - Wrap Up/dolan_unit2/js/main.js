$(function () {
  const $panels = $(".panel");
  const $toggles = $(".panel-toggle");

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

    const h = $content[0].scrollHeight;
    $content.css("max-height", h + "px");
  }

  function togglePanel($panel) {
    if (!$panel || !$panel.length) return;

    const isOpen = $panel.hasClass("is-open");
    $panels.each(function () { closePanel($(this)); });
    if (!isOpen) openPanel($panel);
  }

  $toggles.on("click", function () {
    const $panel = $(this).closest(".panel");
    togglePanel($panel);
  });

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

  $(window).on("resize", function () {
    const $open = $(".panel.is-open").first();
    if (!$open.length) return;
    const $content = $open.find(".panel-content").first();
    $content.css("max-height", $content[0].scrollHeight + "px");
  });

  $(".navigation a").on("click", function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href"); // "#services"
    const $targetPanel = $(targetId).closest(".panel");
    if (!$targetPanel.length) return;

    togglePanel($targetPanel);

    const $content = $targetPanel.find(".panel-content").first();

    const doScroll = () => {
      $targetPanel[0].scrollIntoView({ behavior: "smooth", block: "start" });
    };

    $content.one("transitionend webkitTransitionEnd", doScroll);

    setTimeout(doScroll, 750);
  });

  // -------- Back to Top --------
  const $toTop = $(".toTop");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $toTop.addClass("visible");
    } else {
      $toTop.removeClass("visible");
    }
  });

  $toTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

});
