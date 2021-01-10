export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd341dfb5c449d47a0513ec',
                  title: 'Sanity Studio',
                  name: 'wmnl-studio',
                  apiId: 'd3c30fdd-54a0-4b8c-9d8e-0e106e9032b9'
                },
                {
                  buildHookId: '5fd341dfb477a7d1205bd211',
                  title: 'Landing pages Website',
                  name: 'wmnl',
                  apiId: '99c6967c-75b7-4304-99d7-bb19ac485189'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jayne-mast/wmnl',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://womensmarchnederland.nl', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    }
  ]
};
