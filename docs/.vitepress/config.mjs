import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Soumojit Shome",
  description: "SoumojitShomeBlog",
  head: [['link', { rel: 'icon', href: '/mypic.png' }]],
  themeConfig: {
    logo: '/mypic.png',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Certificates', link: '/certificates/' }
    ],

    sidebar: [
      {
        text: 'Blogs',
        collapsed: false,
        items: [
          {
            text: 'Random',
            collapsed: true,
            items: [
              { text: 'Random Day', link: '/blogs/random/RandomDay/' },
              { text: 'College Pics', link: '/blogs/random/CollegePics/' },
            ]
          },
          {
            text: '1st Sem',
            collapsed: true,
            items: [
              { text: 'First Day', link: '/blogs/1stsem/FirstDayAot/' },
              { text: 'Cognizant Technology Solutions Seminar', link: '/blogs/1stsem/CognizantTechnologySolutionsSeminar/' },
            ]
          },
          {
            text: '2nd Sem',
            collapsed: true,
            items: [
              { text: 'Holi', link: '/blogs/2ndsem/Holi/' },
              { text: 'TCS Seminar', link: '/blogs/2ndsem/TCSSeminar/' },
              { text: 'ARCADIA', link: '/blogs/2ndsem/ARCADIA/' },
              { text: 'My Birthday', link: '/blogs/2ndsem/MyBirthday/' },
              { text: 'GCCD Kolkata', link: '/blogs/2ndsem/GCCDKolkata/' },
              { text: '1st Year Done', link: '/blogs/2ndsem/1stYearDone/' },
            ]
          },
          {
            text: '3rd Sem',
            collapsed: true,
            items: [
              { text: 'Teachers Day', link: '/blogs/3rdsem/teachersday/' },
              { text: 'Jagadhatri Puja', link: '/blogs/3rdsem/jagadhatripuja/' },
              { text: '3rd Sem Lab Last Day', link: '/blogs/3rdsem/3rd-sem-lab-last-day/' },
            ]
          },
          {
            text: '4th Sem',
            collapsed: true,
            items: [
              { text: 'Coming soon' },
            ]
          },
        ]
      },

      {
        text: 'Projects',
        collapsed: false,
        items: [
          { text: 'Social Media Web', link: '/projects/socialmediaweb/' },
          { text: 'My Docs Anywhere', link: '/projects/mydocswebapp/' },
          { text: 'ToDo WebApp', link: '/projects/todowebapp/' },
          { text: 'CertifyHub', link: '/projects/certifyhub/' },

        ]
      },
      {
        text: 'Posts',
        collapsed: false,
        items: [
          { text: 'College Campus Night View', link: '/posts/NighttimeCollegeCampus/' },
          { text: 'College Campus View', link: '/posts/CollegeCampusDay/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Soumojitshome2023' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/soumojit-shome' },
      { icon: 'youtube', link: 'https://www.youtube.com/@soumojitshome' }
    ],

    footer: {
      copyright: 'Copyright © 2023 Soumojit Shome'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }

  }
})
