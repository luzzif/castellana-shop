import React from "react";
import { Seo } from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

const Home = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Seo title={site.siteMetadata.title} />
        </>
    );
};

export default Home;
