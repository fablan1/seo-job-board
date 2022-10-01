(function ($) {
  //Activate Later. Shows Apply Button BEGIN
  //Set Buttons inital to Display None in Weblfow
  /*$(".job-collection-list").on(
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
  );*/

  // Shows Apply Button. END

  //Export this to a separate File
  let cssIDs = new Map([
    ["Verhandlungssicher", "v541e"],
    ["Muttersprache", "nbeca"],
    ["gut", "k616c"],
    ["nicht-notwendig", "la81e"],
    ["Sistrix", "m2083"],
    ["GSC", "z1a21"],
    ["Google-Analytics", "p5dad"],
    ["ahrefs", "w7dd1"],
    ["Ryte", "jc76c"],
    ["Botify", "uab10"],
    ["In-House", "ad401"],
    ["Agentur", "e45a1"],
    ["Consulting", "t1025"],
    ["Senior-Level", "h7932"],
    ["Mid-Level", "rd209"],
    ["Junior-Level", "w0a5a"],
    ["Trainee", "a5ff5"],
    ["Weltweit", "h3b49"],
    ["Vor-Ort", "r231d"],
    ["Deutschland", "kb3ec"],
    ["Teilweise", "f9dc4"],
    ["Home-Office", "b1873"],
    ["30-40-Tsd.", "mae46"],
    ["40-50 Tsd.", "n618f"],
    ["50-60 Tsd.", "t64ea"],
    ["60-70-Tsd.", "ga1d1"],
    ["70-80-Tsd.", "laa40"],
    [">-80-Tsd.", "nd5a3"],
    ["keine-Angabe", "c43bd"],
    ["Start-Up", "t2963"],
    ["Mittel", "ebad4"],
    ["Konzern", "w04f8"],
    ["Groß", "o15a5"],
    ["Klein", "gb3ec"],
    ["Keyword-Recherche", "ye7e0"],
    ["Logfile-Analyse", "o6ce5"],
    ["SQL", "z9563"],
    ["BigQuery", "y52b3"],
    ["OnPage", "me798"],
    ["OffPage", "me394"],
    ["Technical", "b31ef"],
    ["International", "ec09d"],
    ["Allrounder", "o68d1"],
    ["seobility", "eeb6d"],
    ["sistrix", "f2e1c"],
    ["jira", "pb923"],
    ["Screaming-Frog", "j9a2e"],
    ["Semrush", "yf108"],
    ["Google-Trends", "cd5cc"],
    ["Linkresearchtools", "rfd33"],
    ["Xovi", "x6a5d"],
    ["HTML", "vbadd"],
    ["CSS", "je679"],
    ["JS", "i8a45"],
    ["Python", "reea4"],
    ["Content Marketing", "hfa34"],
    ["Strategieentwicklung", "h3ec9"],
    ["Datenanalyse", "r82f7"],
    ["Adobe Analytics", "p34cc"],
    ["Index-Management", "dceda"],
    ["Google-Tag-Manager", "m7298"],
    ["Vollzeit", "x5035"],
    ["Teilzeit", "u3e7e"],
    ["befristet", "o5069"],
    ["unbefristet", "h4b19"],
    ["Teamführung", "r206f"],
    ["Budget-Verantwortung", "xb0a7"],
    ["Wettbewerbsanalyse", "zb98d"],
    ["SEO-Audits", "t75a9"],
    ["Webtrekk", "eeccf"],
  ]);
  // Create IDs for Categories
  // Add IDs to Group-Filter
  // Create Category Holder
  // Push Category Holder Items to partent Elements
  // Add Active Seleted Element to Filter
  let allDataAttributes = $(".category-holder");
  allDataAttributes.each(function (index) {
    let allCSSIDs = "";
    //console.log($(this).children().data());
    let dataAttributes = $(this).children().data();
    for (const key in dataAttributes) {
      //console.log(`${key}: ${dataAttributes[key]}`);

      let dataAttrArr = dataAttributes[key].split(",");
      //console.log(dataAttrArr);
      for (i = 0; i < dataAttrArr.length; i++) {
        let cssID = cssIDs.get(dataAttrArr[i]);
        if (typeof cssID !== "undefined") {
          allCSSIDs += `${cssID} `;
        }
      }
    }
    console.log(allCSSIDs);
    $(this).children().closest("div.mix").addClass(allCSSIDs);
    //.closest( "ul", listItemII )
    //console.log(index + ": " + $(this).children().data());
  });
  //console.log(allDataAttributes);

  /****Prepate for mixitup MultiFilter****/
  function prepareForMixitup($) {
    // Add mixitup Multifilter to Page

    // Add <form> to Layout.
    $(".filter-group").wrap("<form></form>");
    // Add type=reset to Reset Button
    $(".filter-reset-button").replaceWith(
      $(
        '<button class="filter-reset-button" type="reset"> Clear Filter</button>'
      )
    );
    //Add Style to Button
    $(".reset-button").attr("type", "reset");
    $(".reset-button").css({
      border: "1px",
      "border-width": "1px",
      "border-style": "solid",
      background: "white",
    });

    /*
border: 1px solid #e5e8ed;
background: white;
color: #031b43;
height: 30px;
border-radius: 4px;
font-size: 12px;
width: 50%;
font-family: 'Source Sans Pro', sans-serif;
line-height: 17px;
font-weight: 600;*/
  }

  prepareForMixitup($);

  $(".mobile-filter-button").click(function () {
    $(".filters").toggle();
    if ($(".filters").is(":visible")) {
      $(".job-list-container").hide();
      $(".mobile-filter-button").text("Filter anwenden");
    } else {
      $(".job-list-container").show();
      $(".mobile-filter-button").text("Filter anzeigen");
    }
  });
})(jQuery);
