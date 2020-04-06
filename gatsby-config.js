require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: "Castellana food service shop",
        siteUrl: "https://shop.castellanaservice.com/",
        telephone: "+390992016978",
        address: {
            streetAddress: "Contrada Curezze",
            addressLocality: "Carosino",
            addressRegion: "Taranto",
            addressCountry: "Italy",
            postalCode: "74021"
        },
        description:
            "Castellana s.r.l. porta a casa vostra l'eccellenza del territorio e della tradizione, a portata di click.",
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
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography"
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-styled-components"
    ]
};
