import styled from "styled-components"
// Image
import Theatre from "../../images/theatre.jpg"

export const Wrapper = styled.div`
    background-image: url(${Theatre});
    background-size: 100%, cover;
    background-position: center;
    max-width: var(--maxWidth);
    margin: -25px auto 0 auto;
    padding: 0 20px;

    h1 {
        color: var(--lightGrey);

        @media screen and (max-width: 768px) {
            font-size: var(--fontL);
        }
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`