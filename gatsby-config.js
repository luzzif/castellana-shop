module.exports = {
    siteMetadata: {
        title: "Gatsby default starter",
        description: "Default starter",
        author: "Federico Luzzi"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-styled-components"
    ]
};
