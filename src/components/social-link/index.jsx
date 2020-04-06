import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "reflexbox";
import { CustomLink } from "../custom-link";
import { RootFlex } from "./styled";

// TODO: put proper links
const socialInfo = {
    facebook: {
        icon: faFacebook,
        url: "https://www.facebook.com/castellanafoodservice",
        name: "Facebook"
    },
    instagram: {
        icon: faInstagram,
        url: "https://www.instagram.com/castellanaforniture/",
        name: "Instagram"
    },
    linkedin: {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/castellana-forniture-49179a19b/",
        name: "Linkedin"
    }
};

export const SocialLink = ({ type, noText }) => {
    const socialSpecificInfo = socialInfo[type];
    return (
        <CustomLink
            href={socialSpecificInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            external
        >
            <RootFlex
                type={type}
                mx={2}
                alignItems="center"
                justifyContent="center"
                noText={noText}
            >
                <Box px={!noText && 2}>
                    <FontAwesomeIcon icon={socialSpecificInfo.icon} />
                </Box>
                {!noText && <Box px={2}>{socialSpecificInfo.name}</Box>}
            </RootFlex>
        </CustomLink>
    );
};

SocialLink.propTypes = {
    type: PropTypes.oneOf(["facebook", "instagram", "linkedin"]).isRequired,
    noText: PropTypes.bool
};
