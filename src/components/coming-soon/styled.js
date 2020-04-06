import styled, { keyframes } from "styled-components";
import { Flex } from "reflexbox";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackgroundImage = styled(Image)`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const RootFlex = styled(Flex)`
    background: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

export const LogoImage = styled.img`
    margin: 0;
`;

export const Slogan = styled.span`
    font-size: 1.5em;
    color: #fff;
`;

export const AbsoluteContainer = styled.div`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
`;

const wobble = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1.5em;
    animation: ${wobble} 1s ease infinite;
`;

export const HighlightedText = styled.span`
    font-weight: 700;
    color: #f2812d;
`;
