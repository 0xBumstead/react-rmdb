import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const Text = styled.div`
    margin-left: 20px;
    font-size: var(--fontM);
    font-weight: 600;
`

export const StyledInput = styled.input`
    background: transparent;
    height: 20px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 150px;

    :focus {
        outline: none;
    }

    ::-webkit-slider-runnable-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #B6B6B6;
        border-radius: 25px;
        border: 1px solid #8A8A8A;
    }

    ::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #828282;
        border: 1px solid #8A8A8A;
        height: 24px;
        width: 15px;
        border-radius: 6px;
        background: #DADADA;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5px;
    }

    :focus::-webkit-slider-runnable-track {
        background: #B6B6B6;
    }

    ::-moz-range-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #B6B6B6;
        border-radius: 25px;
        border: 1px solid #8A8A8A;
    }

    ::-moz-range-thumb {
        box-shadow: 1px 1px 1px #828282;
        border: 1px solid #8A8A8A;
        height: 24px;
        width: 35px;
        border-radius: 6px;
        background: #DADADA;
        cursor: pointer;
    }

    ::-ms-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    ::-ms-fill-lower {
        background: #B6B6B6;
        border: 1px solid #8A8A8A;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000;
    }

    ::-ms-fill-upper {
        background: #B6B6B6;
        border: 1px solid #8A8A8A;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000;
    }

    ::-ms-thumb {
        margin-top: 1px;
        box-shadow: 1px 1px 1px #828282;
        border: 1px solid #8A8A8A;
        height: 24px;
        width: 35px;
        border-radius: 6px;
        background: #DADADA;
        cursor: pointer;
    }

    :focus::-ms-fill-lower {
        background: #B6B6B6;
    }

    :focus::-ms-fill-upper {
        background: #B6B6B6;
    }
`

export const StyledButton = styled.button`
    background: var(--darkGrey);
    width: 150px;
    height: 40px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontL);
    margin: 0 auto;
    transition: all 0.5s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`