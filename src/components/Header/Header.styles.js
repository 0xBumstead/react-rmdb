import styled from "styled-components"

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);

    a {
        color: var(--white);
        text-decoration: none;
    }
`

export const ReactMovie = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
`

export const StyleSelect = styled.select`
    background: var(--darkGrey);
    align-items: center;
    margin-left: 20px;
    height: 30px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontM);
    outline: none;
`

export const MovieDB = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 200px;
    font-size: var(--fontM);
    font-weight: 600;
`

export const Login = styled.div`
`

export const Logout = styled.div`
    cursor: pointer;
`

export const LogoImg = styled.img`
    width: 200px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`

export const TMDBLogoImg = styled.img`
    margin-right: 20px;
    width: 100px;

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`