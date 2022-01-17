import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--medGrey);
    color: var(--white);
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span {
        font-size: var(--fontM);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 768px) {
            font-size: var(--fontS);
        }
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`;