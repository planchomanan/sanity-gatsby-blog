export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d52fcb2d093482fc3500afb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-diin26gj',
                  apiId: '7806a5a9-d09a-4238-8b24-c2e00a063fd6'
                },
                {
                  buildHookId: '5d52fcb26ebfef3c6223422a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jz7vqz6r',
                  apiId: '27a4e6be-d6be-4aae-b1f9-e46701169262'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/planchomanan/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jz7vqz6r.netlify.com', category: 'apps'}
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
