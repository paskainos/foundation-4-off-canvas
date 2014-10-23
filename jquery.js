  // add off-canvas-nav toggle
  // bind click event to all internal page anchors
  $(".menu-link").bind("click", function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      $("#off-canvas-nav").toggleClass("active");
      $("#canvas-wrapper").toggleClass("active");
  });
