export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6217fd95fed6c911faf59cd8',
                  title: 'Sanity Studio',
                  name: 'sanityio-v-2-studio',
                  apiId: '2c95e942-9a94-45b4-8346-f7798d81d8e8'
                },
                {
                  buildHookId: '6217fd95f4241d1ca45bb6f6',
                  title: 'Landing pages Website',
                  name: 'sanityio-v-2',
                  apiId: 'c076a048-e8fa-4d6b-9677-6dc897bbd1c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NickRDeBoer/sanityio-v2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanityio-v-2.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
