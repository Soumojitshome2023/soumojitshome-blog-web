import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Soumojit Shome",
  description: "SoumojitShomeBlog",
  head: [['link', { rel: 'icon', href: '/assets/icons/mypic.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Posts', link: '/posts/' }
    ],

    sidebar: [
      {
        text: 'Blogs',
        collapsed: true,
        items: [
          { text: 'Blog 1', link: '/blogs/blog1/' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },

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
    }

  }
})
