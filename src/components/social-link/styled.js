import styled, { css } from "styled-components";
import { Flex } from "reflexbox";

export const RootFlex = styled(Flex)`
    padding: ${(props) => (props.noText ? "8px" : "8px 16px")};
    ${(props) =>
        props.noText &&
        css`
            width: 40px;
            height: 40px;
        `}
    border-radius: ${(props) => (props.noText ? "100%" : "16px")};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
    background: ${(props) => {
        if (props.type === "facebook") {
            return "#49659f";
        }
        if (props.type === "instagram") {
            return "#c13584";
        }
        if (props.type === "linkedin") {
            return "#0076b5";
        }
    }};
    transition: box-shadow ease 0.3s;
    border: none;
    :hover {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
`;
