/* global instantsearch */

const encodedCategories = {
  Cameras: "Cameras & Camcorders",
  Cars: "Car Electronics & GPS",
  Phones: "Cell Phones",
  TV: "TV & Home Theater",
};

const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;

  return {
    ...acc,
    [newKey]: newValue,
  };
}, {});

// Returns a slug from the category name.
// Spaces are replaced by "+" to make
// the URL easier to read and other
// characters are encoded.
function getCategorySlug(name) {
  const encodedName = decodedCategories[name] || name;

  return encodedName.split(" ").map(encodeURIComponent).join("+");
}

// Returns a name from the category slug.
// The "+" are replaced by spaces and other
// characters are decoded.
function getCategoryName(slug) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug.split("+").map(decodeURIComponent).join(" ");
}

const router = instantsearch.routers.history({
  windowTitle({ category, query }) {
    const queryTitle = query ? `Results for "${query}"` : "Search";

    if (category) {
      return `${category} – ${queryTitle}`;
    }

    return queryTitle;
  },

  createURL({ qsModule, routeState, location }) {
    const urlParts = location.href.match(/^(.*?)\/search/);
    const baseUrl = `${urlParts ? urlParts[1] : ""}/`;

    const categoryPath = routeState.category
      ? `${getCategorySlug(routeState.category)}/`
      : "";
    const queryParameters = {};

    if (routeState.query) {
      queryParameters.query = encodeURIComponent(routeState.query);
    }
    if (routeState.page !== 1) {
      queryParameters.page = routeState.page;
    }
    if (routeState.brands) {
      queryParameters.brands = routeState.brands.map(encodeURIComponent);
    }
    if (routeState.remote) {
      queryParameters.remote = routeState.remote.map(encodeURIComponent);
    }

    const queryString = qsModule.stringify(queryParameters, {
      addQueryPrefix: true,
      arrayFormat: "repeat",
    });

    return `${baseUrl}job-suche${categoryPath}${queryString}`;
  },

  parseURL({ qsModule, location }) {
    const pathnameMatches = location.pathname.match(/job-suche\/(.*?)\/?$/);
    const category = getCategoryName(
      (pathnameMatches && pathnameMatches[1]) || ""
    );
    const {
      query = "",
      page,
      brands = [],
      remote = [],
    } = qsModule.parse(location.search.slice(1));
    // `qs` does not return an array when there's a single value.
    const allBrands = Array.isArray(brands) ? brands : [brands].filter(Boolean);
    const allRemote = Array.isArray(remote) ? remote : [remote].filter(Boolean);

    return {
      query: decodeURIComponent(query),
      page,
      brands: allBrands.map(decodeURIComponent),
      category,
      remote: allRemote.map(decodeURIComponent),
    };
  },
});

const stateMapping = {
  stateToRoute(uiState) {
    //console.log(uiState);
    // refer to uiState docs for details: https://www.algolia.com/doc/api-reference/widgets/ui-state/js/
    return {
      query: uiState.seo_jobs.query,
      page: uiState.seo_jobs.page,
      brands:
        uiState.seo_jobs.refinementList &&
        uiState.seo_jobs.refinementList.brand,
      remote:
        uiState.seo_jobs.refinementList &&
        uiState.seo_jobs.refinementList.remoteWork,
      category: uiState.seo_jobs.menu && uiState.seo_jobs.menu.categories,
    };
  },

  routeToState(routeState) {
    // refer to uiState docs for details: https://www.algolia.com/doc/api-reference/widgets/ui-state/js/
    console.log(routeState);
    return {
      // eslint-disable-next-line camelcase
      seo_jobs: {
        query: routeState.query,
        page: routeState.page,
        menu: {
          categories: routeState.category,
        },
        refinementList: {
          brand: routeState.brands,
          remoteWork: routeState.remote,
        },
      },
    };
  },
};

const searchRouting = {
  router,
  stateMapping,
};

export default searchRouting;
