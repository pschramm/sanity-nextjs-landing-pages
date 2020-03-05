export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e6132cc56eec03198155d57',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5y4297fh',
                  apiId: '533a7872-3cf4-4b1f-9b52-1c2cfb3ecae2'
                },
                {
                  buildHookId: '5e6132ccc7fb0c031ddaa271',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bx8kaxg5',
                  apiId: 'f5bd4065-553c-4c64-b7de-185d81c48550'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pschramm/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bx8kaxg5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
