import React from "react";
import { Seo } from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { ComingSoon } from "../components/coming-soon";

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
        <Layout>
            <Seo
                title={site.siteMetadata.title}
                link={[
                    {
                        href:
                            "https://fonts.googleapis.com/css?family=Muli:500,700&display=swap",
                        rel: "stylesheet"
                    }
                ]}
            />
            <ComingSoon />
        </Layout>
    );
};

export default Home;
