var e;(e=jQuery)(".job-collection-list").on("mouseleave",".job-collection-item",(function(){e(this).find(".apply-button-wrapper").hide()})),e(".job-collection-list").on("mouseenter",".job-collection-item",(function(){e(this).find(".apply-button-wrapper").show().css("display","flex")})),e(".mobile-filter-button").click((function(){e(".filters").toggle(),e(".filters").is(":visible")?(e(".job-list-container").hide(),e(".section-newsletter").hide(),e(".footer-dark").hide(),e(".mobile-filter-button").text("Filter anwenden")):(e(".job-list-container").show(),e(".section-newsletter").show(),e(".footer-dark").show(),e(".mobile-filter-button").text("Filter anzeigen"))}));
//# sourceMappingURL=index.04d4e877.js.map