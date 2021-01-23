const withCSS = require('@zeit/next-css');
const client = require('./client');

const isProduction = process.env.NODE_ENV === 'production';
const query = `
{
  "routes": *[_type in ["route", "blogPost"]] {
    ...,
    disallowRobot,
    includeInSitemap,
    publishAt,
    slug,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }},
}
`;
const reduceRoutes = (obj, route) => {
  const { page = {}, slug = {} } = route;

  if (route._type === 'route') {
    const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`;
    const { _createdAt, _updatedAt } = page;
    const { includeInSitemap, disallowRobot } = route;

    obj[path] = {
      query: {
        slug: slug.current,
      },
      includeInSitemap,
      disallowRobot,
      _createdAt,
      _updatedAt,
      page: '/LandingPage',
    };
  }

  if (route._type === 'blogPost') {
    const path = `/magazine/${route['slug']['current']}`;
    const { _createdAt, _updatedAt } = route;

    obj[path] = {
      query: {
        slug: slug.current,
      },
      includeInSitemap: true,
      disallowRobot: false,
      _createdAt,
      _updatedAt,
      page: '/BlogPost',
    };
  }

  return obj;
};

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
  },
  exportPathMap: function () {
    return client.fetch(query).then((res) => {
      const { routes = [] } = res;
      const nextRoutes = {
        // Routes imported from sanity
        ...routes.filter(({ slug }) => slug && slug.current).reduce(reduceRoutes, {}),
      };
      console.log(nextRoutes);
      return nextRoutes;
    });
  },
});
