const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  "A1CQMMK9AR",
  "491073e96d8c166d48a8555ae90add32"
);

const search = instantsearch({
  indexName: "seo-jobs",
  searchClient,
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

// Creation of the refinementListDropdown widget
/*const refinementListDropdown = createDropdown(
  instantsearch.widgets.refinementList,
  { closeOnChange: true }
);*/

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
  }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: `
      <div role="listitem" class="collection-item job-collection-item w-dyn-item">
      <a
        href="https://www.google.de"
        target="_blank"
        class="job-item-mobile-link"
      ></a>
      <div class="job-item-inner">
        <div class="job-item-data">
          <div class="job-item-company-logo">
            <a
              href="http://www.company.de"
              class="job-item-company-link w-inline-block"
              ><img
                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/6319dd6c28152085e7e151b2_fragcolor.png"
                loading="lazy"
                alt=""
                class="image-6"
            /></a>
            <div class="job-item-company-logo-inner"></div>
          </div>
          <div class="job-item-main-data">
            <div class="job-item-title-box">
              <a href="https://www.google.de" class="job-item-title">{{#helpers.highlight}}{ "attribute": "Job-Title" }{{/helpers.highlight}}</a
              >
            </div>
            <div class="job-item-company-box">
              <div class="job-item-company-name">
                <div class="text-block-7">{{Company-Name}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="job-item-list-wrapper">
          <ul role="list" class="job-item-list">
            <li class="top-skill">
              <div class="top-skill-text">{{Top-Skill_1}}</div>
            </li>
            <li class="top-skill">
              <div class="top-skill-text">{{Top-Skill_2}}</div>
            </li>
            <li class="top-skill">
              <div class="top-skill-text">{{Top-Skill_3}}</div>
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
              <div><div class="text-block-8">{{#helpers.highlight}}{ "attribute": "Location" }{{/helpers.highlight}}</div></div>
            </div>
            <div class="job-tag">
              <img
                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/6319fe4f2a57943cf612e0e5_person-gray.svg"
                loading="lazy"
                alt=""
                class="image-7"
              />
              <div class="div-block-7">
                <div class="text-block-8">{{Gehaltsangabe}}</div>
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
                <div class="text-block-8">{{Remote Work}}</div>
              </div>
            </div>
          </div>
          <div class="apply-button-wrapper">
            <a href="#" class="apply-button">Bewerben</a>
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
    container: "#salary-list",
    attribute: "Gehaltsangabe",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#remote-list",
    attribute: "Remote Work",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#english-level-list",
    attribute: "Englisch-Level",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#remote-list",
    attribute: "Remote Work",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#employment-list",
    attribute: "Job-Bereich",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#experience-list",
    attribute: "Berufserfahrung",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#company-size-list",
    attribute: "Unternehmensgröße",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#devision-list",
    attribute: "SEO-Bereich",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#tools-list",
    attribute: "Tools",
    templates: {
      item: filterButtonTemplate(),
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#skills-list",
    attribute: "Skills",
    showMore: true,
    limit: 6,
    showMoreLimit: 20,
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
  }),
]);

search.start();
