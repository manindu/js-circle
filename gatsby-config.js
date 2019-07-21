const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `JS Circle`,
    siteUrl: `https://jscircle.com`,
    author: `Manindu Wijewickrama`,
    keywords: ['javascript', 'react', 'node.js', 'vue'],
    description: `Learn modern web development. JavaScript, React, Node.js, Vue.js and lot more.`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${ __dirname }/src/`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144270088-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Manindu Wijewickrama',
        short_name: 'Manindu',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FFF',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        // icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            }
          }
        ]
      }
    }
  ],
}
