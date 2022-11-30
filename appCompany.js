const { algoliasearch, instantsearch } = window;
//import searchRouting from "./search-routingCompany.js";

const searchClient = algoliasearch(
  "A1CQMMK9AR",
  "491073e96d8c166d48a8555ae90add32"
);

const search = instantsearch({
  indexName: "seo_companies",
  searchClient,
  //routing: searchRouting,
});

const filterButtonTemplate = (url) => {
  return `
<div class="filter">
 <a href="#" class="filter-inner w-inline-block">
  <div class="filter-content">
      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>
  </div>
 </a>
</div>
`;
};

const clearFilter = () => {
  const resetLabel = (hasRefinements) => {
    return "Filter löschen";
  };
  return resetLabel;
};

// Creation of the refinementListDropdown widget
/*const refinementListDropdown = createDropdown(
  instantsearch.widgets.refinementList,
  { closeOnChange: true }
);*/

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Ort, Unternehmensname",
  }),
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      text(data) {
        let count = "";

        if (data.hasManyResults) {
          count += `${data.nbHits} Ergebnisse`;
        } else if (data.hasOneResult) {
          count += `1 Ergebnis`;
        } else {
          count += `kein Ergebnis`;
        }

        return `<span>${count} gefunden</span>`;
      },
    },
  }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: `
      <div role="listitem" class="collection-item job-collection-item w-dyn-item">
      <a
        href="{{companySlug}}"
        target="_blank"
        class="job-item-mobile-link"
      ></a>
      <div class="job-item-inner">
        <div class="job-item-data">
          <div class="job-item-company-logo">
            <a
              href="{{companySlug}}"
              class="job-item-company-link w-inline-block"
              ><img
                src="{{companyLogo.url}}"
                loading="lazy"
                alt=""
                class="image-6"
            /></a>
            <div class="job-item-company-logo-inner"></div>
          </div>
          <div class="job-item-main-data">
            <div class="job-item-title-box">
              <a href="{{companySlug}}" class="job-item-title">{{#helpers.highlight}}{ "attribute": "companyName" }{{/helpers.highlight}}</a
              >
            </div>
            <div class="job-item-company-box">
              <div class="job-item-company-name">
                <div class="text-block-7">{{companyName}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="job-item-list-wrapper">
          <ul role="list" class="job-item-list">
            <li class="top-skill">
              <div class="top-skill-text">{{companyJobBenefit1}}</div>
            </li>
            <li class="top-skill">
              <div class="top-skill-text">{{companyJobBenefit2}}</div>
            </li>
            <li class="top-skill">
              <div class="top-skill-text">{{companyJobBenefit3}}</div>
            </li>
          </ul>
        </div>
        <div class="job-items-tags-container">
          <div class="job-tags">
            <div class="job-tag">
              <img
                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/6319fb51d70669aa91c9da03_location-gray.svg"
                loading="lazy"
                alt=""
                class="image-7"
              />
              <div><div class="text-block-8">{{#helpers.highlight}}{ "attribute": "headOffice" }{{/helpers.highlight}}</div></div>
            </div>
            <div class="job-tag">
              <img
                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/6319fe4f2a57943cf612e0e5_person-gray.svg"
                loading="lazy"
                alt=""
                class="image-7"
              />
              <div class="div-block-7">
                <div class="text-block-8">{{companyIndustry}}</div>
              </div>
            </div>
            <div class="job-tag">
              <img
                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/6319fe4f2a57943cf612e0e5_person-gray.svg"
                loading="lazy"
                alt=""
                class="image-7"
              />
              <div class="div-block-7">
                <div class="text-block-8">{{companyEmployees}}</div>
              </div>
            </div>
          </div>
          <div class="apply-button-wrapper">
            <a href="{{companySlug}}" class="apply-button">Zum Unternehmen</a>
          </div>
        </div>
      </div>
    </div>    
`,
    },
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 10,
  }),
  instantsearch.widgets.panel({
    // templates: { header: "Gehalt" },
  })(instantsearch.widgets.refinementList)({
    container: "#companyIndustry",
    attribute: "companyIndustry",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#companyEmployees",
    attribute: "companyEmployees",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#companySEOtools",
    attribute: "companySEOtools",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.pagination({
    container: "#pagination",
    scrollTo: ".job-list-container",
  }),
  instantsearch.widgets.clearRefinements({
    container: "#clear-refinements",
    templates: {
      resetLabel: clearFilter(),
    },
  }),
]);

search.start();
