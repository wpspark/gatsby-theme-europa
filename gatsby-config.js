let token = process.argv[process.argv.length-1]
require("dotenv").config({
  path: `env/.env.${token}`,
})

module.exports = { 
  siteMetadata: {
    title: `WpSpark`,
    description : `WpSpark specializes in WordPress creates awesome themes and plugins. Choose the perfect WordPress Themes and Plugins from our vast collection.`,
    author : `@wpspark`,
    disqusShortname: process.env.disqusShortname,
    wordpressBaseUrl: `${process.env.protocol}://${process.env.baseUrl}`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-image`,
    `gatsby-plugin-sharp`, 
    {
      resolve: `@theanamhossain/gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.baseUrl,
        auth: {},
        protocol: process.env.protocol,
        hostingWPCOM: false,
        useACF: false,
        perPage: 100,
        includedRoutes: [
          "**/site_metadata",
          "**/posts",
          "**/categories",
          "**/taxonomies",
          "**/users",
          "**/spark",
          "**/userdata"
        ],
        verboseOutput: false,
        // concurrentRequests: 1,
        // use a custom normalizer which is applied after the built-in ones.
        // normalizer: function({ entities }) {
        //   return entities
        // },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
