import styled from "styled-components"
// Image
import Theatre from "../../images/theatre.jpg"

export const Wrapper = styled.div`
    background-image: url(${Theatre});
    background-size: 100%, cover;
    background-position: center;
    position: absolute;
    top: 75px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 320px;
    padding: 20px;
    color: var(--lightGrey);

    input {
        background: var(--darkGrey);
        color: var(--white);
        width: 100%;
        height: 30px;
        border: 1px solid var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
    }

    .error {
        color: red;
    }
`
