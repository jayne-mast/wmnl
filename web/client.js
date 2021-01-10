const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: '07kwe6u7',
  dataset: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  token:
    'sknozEcRxCwtmRlxz5kUwT83twmevwdRodrtkdXG60rOsKqml9au47fj1YC1UVBHYG5mgdAloA5ROJlr5z9TabvkWFpYu2GIjyE66wGm0mwcA9qprPFUmyNp0xjXe1AJb7L3orcMmjb7gu794EwKUl8vLGTyI89TGCXiKFHt334QvjYSCrEM', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = client;
