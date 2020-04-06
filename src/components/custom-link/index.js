import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const commonStyle = css`
    text-decoration: ${(props) => (props.underlined ? "underlined" : "none")};
    cursor: pointer;
    color: ${(props) => (props.primary ? "#f2812d" : "inherit")};
    :visited {
        color: ${(props) => (props.primary ? "#f2812d" : "inherit")};
    }
`;

export const CustomLink = ({
    underlined,
    primary,
    external,
    children,
    ...rest
}) => {
    const Component = external
        ? styled.a`
              ${commonStyle}
          `
        : styled(Link)`
              ${commonStyle}
          `;
    return (
        <Component underlined={underlined} primary={primary} {...rest}>
            {children}
        </Component>
    );
};

CustomLink.propTypes = {
    external: PropTypes.bool,
    underlined: PropTypes.bool,
    primary: PropTypes.bool,
};
