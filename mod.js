(function ($) {
  //Activate Later. Shows Apply Button BEGIN
  //Set Buttons inital to Display None in Weblfow
  $(".job-collection-list").on(
    "mouseleave",
    ".job-collection-item",
    function () {
      //console.log( $( this ).hide() );
      $(this).find(".apply-button-wrapper").hide();
    }
  );

  $(".job-collection-list").on(
    "mouseenter",
    ".job-collection-item",
    function () {
      //console.log( $( this ).hide() );
      $(this).find(".apply-button-wrapper").show().css("display", "flex");
    }
  );

  // Shows Apply Button. END

  $(".mobile-filter-button").click(function () {
    $(".filters").toggle();
    if ($(".filters").is(":visible")) {
      $(".job-list-container").hide();
      $(".section-newsletter").hide();
      $(".footer-dark").hide();
      $(".mobile-filter-button").text("Filter anwenden");
    } else {
      $(".job-list-container").show();
      $(".section-newsletter").show();
      $(".footer-dark").show();
      $(".mobile-filter-button").text("Filter anzeigen");
    }
  });
})(jQuery);
