var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},t=n.parcelRequire94c2;null==t&&((t=function(n){if(n in e)return e[n].exports;if(n in i){var t=i[n];delete i[n];var s={id:n,exports:{}};return e[n]=s,t.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(n,e){i[n]=e},n.parcelRequire94c2=t);var s=t("7CQsT");const{algoliasearch:l,instantsearch:a}=window,o=a({indexName:"seo_jobs",searchClient:l("A1CQMMK9AR","491073e96d8c166d48a8555ae90add32"),routing:s.default}),c=n=>e=>e.isShowingMore?`Weniger ${n}`:`Mehr ${n}`;o.addWidgets([a.widgets.searchBox({container:"#searchbox",placeholder:"Ort, Stellenbezeichnung"}),a.widgets.stats({container:"#stats",templates:{text(n){let e="";return n.hasManyResults?e+=`${n.nbHits} Ergebnisse`:n.hasOneResult?e+="1 Ergebnis":e+="kein Ergebnis",`<span>${e} gefunden</span>`}}}),a.widgets.hits({container:"#hits",templates:{item:'\n      <div role="listitem" class="collection-item job-collection-item w-dyn-item">\n      <a\n        href="{{slug}}"\n        target="_blank"\n        class="job-item-mobile-link"\n      ></a>\n      <div class="job-item-inner">\n        <div class="job-item-data">\n          <div class="job-item-company-logo">\n            <a\n              href="{{slug}}"\n              class="job-item-company-link w-inline-block"\n              ><img\n                src="{{companyLogoURL.url}}"\n                loading="lazy"\n                alt=""\n                class="image-6"\n            /></a>\n            <div class="job-item-company-logo-inner"></div>\n          </div>\n          <div class="job-item-main-data">\n            <div class="job-item-title-box">\n              <a href="{{slug}}" class="job-item-title">{{#helpers.highlight}}{ "attribute": "jobTitle" }{{/helpers.highlight}}</a\n              >\n            </div>\n            <div class="job-item-company-box">\n              <div class="job-item-company-name">\n                <div class="text-block-7">{{companyName}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="job-item-list-wrapper">\n          <ul role="list" class="job-item-list">\n            <li class="top-skill">\n              <div class="top-skill-text">{{topSkill1}}</div>\n            </li>\n            <li class="top-skill">\n              <div class="top-skill-text">{{topSkill2}}</div>\n            </li>\n            <li class="top-skill">\n              <div class="top-skill-text">{{topSkill3}}</div>\n            </li>\n          </ul>\n        </div>\n        <div class="job-items-tags-container">\n          <div class="job-tags">\n            <div class="job-tag">\n              <img\n                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/6319fb51d70669aa91c9da03_location-gray.svg"\n                loading="lazy"\n                alt=""\n                class="image-7"\n              />\n              <div><div class="text-block-8">{{#helpers.highlight}}{ "attribute": "location" }{{/helpers.highlight}}</div></div>\n            </div>\n            <div class="job-tag">\n              <img\n                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/63528b6591c1165e0e739dc6_salary.svg"\n                loading="lazy"\n                alt=""\n                class="image-7"\n              />\n              <div class="div-block-7">\n                <div class="text-block-8">{{salary}}</div>\n              </div>\n            </div>\n            <div class="job-tag">\n              <img\n                src="https://uploads-ssl.webflow.com/631107a8174c7590965ee1ef/635286b453e8c524906d8603_svg-world.svg"\n                loading="lazy"\n                alt=""\n                class="image-7"\n              />\n              <div class="div-block-7">\n                <div class="text-block-8">{{remoteWork}}</div>\n              </div>\n            </div>\n          </div>\n          <div class="apply-button-wrapper">\n            <a href="{{slug}}" class="apply-button">Bewerben</a>\n          </div>\n        </div>\n      </div>\n    </div>    \n'}}),a.widgets.configure({hitsPerPage:10}),a.widgets.panel({})(a.widgets.refinementList)({container:"#salary",attribute:"salary",templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n'}}),a.widgets.refinementList({container:"#remoteWork",attribute:"remoteWork",templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n'}}),a.widgets.refinementList({container:"#englishLevel",attribute:"englishLevel",templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n'}}),a.widgets.refinementList({container:"#seoDepartment",attribute:"seoDepartment",templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n'}}),a.widgets.refinementList({container:"#jobExperience",attribute:"jobExperience",templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n'}}),a.widgets.refinementList({container:"#companySize",attribute:"companySize",templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n'}}),a.widgets.refinementList({container:"#jobLimit",attribute:"jobLimit",templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n'}}),a.widgets.refinementList({container:"#seoTools",attribute:"seoTools",showMore:!0,limit:6,showMoreLimit:20,templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n',showMoreText:c("Tools")}}),a.widgets.refinementList({container:"#skills",attribute:"skills",showMore:!0,limit:6,showMoreLimit:20,templates:{item:'\n<div class="filter">\n <a href="#" class="filter-inner w-inline-block">\n  <div class="filter-content">\n      <div class="text-block-6">{{label}} <span class="filter-count">{{count}}</span></div>\n  </div>\n </a>\n</div>\n',showMoreText:c("Skills")}}),a.widgets.pagination({container:"#pagination",scrollTo:".job-list-container"}),a.widgets.clearRefinements({container:"#clear-refinements",templates:{resetLabel:n=>"Filter löschen"}})]),o.start();
//# sourceMappingURL=index.a9449cf3.js.map