import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ description, lang, meta, keywords, title, link }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        telephone
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={site.siteMetadata.title}
            link={link}
            meta={[
                {
                    name: "description",
                    content: metaDescription
                },
                {
                    property: "og:title",
                    content: title
                },
                {
                    property: "og:description",
                    content: metaDescription
                },
                {
                    property: "og:type",
                    content: "website"
                },
                {
                    name: "twitter:card",
                    content: "summary"
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.author
                },
                {
                    name: "twitter:title",
                    content: title
                },
                {
                    name: "twitter:description",
                    content: metaDescription
                },
                {
                    name: "theme-color",
                    content: "#f2812d"
                }
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: "keywords",
                              content: keywords.join(", ")
                          }
                        : []
                )
                .concat(meta)}
        />
    );
};

Seo.defaultProps = {
    lang: "en",
    meta: [],
    keywords: [],
    link: []
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    link: PropTypes.array
};
