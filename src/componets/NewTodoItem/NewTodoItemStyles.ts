import styled from 'styled-components/macro';

export const Form = styled.form`
    width: 40rem;
    margin: 2rem auto;
`;

export const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #f7f5ef;
    border: none;
    border-bottom: 2px solid #494844;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0.5rem;
`;

export const Button = styled.button`
    font: inherit;
    background-color: #ebb002;
    border: 1px solid #ebb002;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover, 
    &:active {
        background-color: #ebc002;
        border-color: #ebc002;
    }
`;
