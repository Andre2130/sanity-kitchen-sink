export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '615736017e455f305ff33630',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8542n7bm',
                  apiId: '920d54d6-9b29-464b-b15c-235daee587a9'
                },
                {
                  buildHookId: '615736019873b8251749df1d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ss29bqm7',
                  apiId: '121005ac-b913-4903-9343-89b07a8ef703'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Andre2130/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ss29bqm7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
