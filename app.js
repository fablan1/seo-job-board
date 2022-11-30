const { algoliasearch, instantsearch } = window;
import searchRouting from "./search-routing.js";

const searchClient = algoliasearch(
  "A1CQMMK9AR",
  "491073e96d8c166d48a8555ae90add32"
);

const search = instantsearch({
  indexName: "seo_jobs",
  searchClient,
  routing: searchRouting,
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

const showMore = (name) => {
  const showMoreT = (data) => {
    if (data.isShowingMore) {
      return `Weniger ${name}`;
    }
    return `Mehr ${name}`;
    /* return `<span
      >${data.isShowingMore ? "Show fsdfasd" : "Show asdf"}</span
    >`;*/
  };
  return showMoreT;
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
    placeholder: "Ort, Stellenbezeichnung",
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
        href="{{slug}}"
        target="_blank"
        class="job-item-mobile-link"
      ></a>
      <div class="job-item-inner">
        <div class="job-item-data">
          <div class="job-item-company-logo">
            <a
              href="{{slug}}"
              class="job-item-company-link w-inline-block"
              ><img
                src="{{companyLogoURL.url}}"
                loading="lazy"
                alt=""
                class="image-6"
            /></a>
            <div class="job-item-company-logo-inner"></div>
          </div>
          <div class="job-item-main-data">
            <div class="job-item-title-box">
              <a href="{{slug}}" class="job-item-title">{{#helpers.highlight}}{ "attribute": "jobTitle" }{{/helpers.highlight}}</a
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
              <div class="top-skill-text">{{topSkill1}}</div>
            </li>
            <li class="top-skill">
              <div class="top-skill-text">{{topSkill2}}</div>
            </li>
            <li class="top-skill">
              <div class="top-skill-text">{{topSkill3}}</div>
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
              <div><div class="text-block-8">{{#helpers.highlight}}{ "attribute": "location" }{{/helpers.highlight}}</div></div>
            </div>
            <div class="job-tag">
              <img
                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/6319fe4f2a57943cf612e0e5_person-gray.svg"
                loading="lazy"
                alt=""
                class="image-7"
              />
              <div class="div-block-7">
                <div class="text-block-8">{{salary}}</div>
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
                <div class="text-block-8">{{remoteWork}}</div>
              </div>
            </div>
          </div>
          <div class="apply-button-wrapper">
            <a href="{{slug}}" class="apply-button">Bewerben</a>
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
    container: "#salary",
    attribute: "salary",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#remoteWork",
    attribute: "remoteWork",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#englishLevel",
    attribute: "englishLevel",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#seoDepartment",
    attribute: "seoDepartment",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  /* Agentur, Inhouse, Beratung?
  instantsearch.widgets.refinementList({
    container: "#xxx,
    attribute: "xxx",
    templates: {
      item: filterButtonTemplate(),
    },
  }),*/
  instantsearch.widgets.refinementList({
    container: "#jobExperience",
    attribute: "jobExperience",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#companySize",
    attribute: "companySize",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#jobLimit",
    attribute: "jobLimit",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#seoTools",
    attribute: "seoTools",
    showMore: true,
    limit: 6,
    showMoreLimit: 20,
    templates: {
      item: filterButtonTemplate(),
      showMoreText: showMore("Tools"),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#skills",
    attribute: "skills",
    showMore: true,
    limit: 6,
    showMoreLimit: 20,
    templates: {
      item: filterButtonTemplate(),
      showMoreText: showMore("Skills"),
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
