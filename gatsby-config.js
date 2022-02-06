const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Elvis Iraguha",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
      __key: "images",
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Elvis Iraguha",
        short_name: "eiraguha",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          databaseURL: "",
          apiKey: "AIzaSyB_jJUREdcaqNFhhYzlXZyeDhOIuhQQo58",
          authDomain: "elvisiraguha.firebaseapp.com",
          projectId: "elvisiraguha",
          storageBucket: "elvisiraguha.appspot.com",
          messagingSenderId: "540036592487",
          appId: "1:540036592487:web:283186373c7de8dd0bb5c2",
        },
      },
    },
  ],
};
