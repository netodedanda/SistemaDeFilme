import styled from "styled-components";
//react-bootstrap
import { Card, Form, FloatingLabel } from "react-bootstrap";

export const FormSearch = styled(Form)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    width: 100%;
`

export const FloatingLabelStyled = styled(FloatingLabel)`
    
`

export const ContainerSearch = styled.div`
    position: relative;
    width: 700px;
    margin-right: 20px;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 18px;
    }
`

export const ContainerAddFilm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const CardStyled = styled(Card)`
    width: 370px;
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 4px #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    cursor: pointer;
`;

export const Title = styled(Card.Title)`
    font-size: 20pt;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
`;

export const ContainerInfos = styled.div`

`

export const Ator = styled.p`
    text-align: center;
    font-size: 14pt;
`

export const FaixaEtaria = styled.p`
    text-align: center;
    font-size: 14pt;
`

export const Genero = styled.p`
    text-align: center;
    font-size: 14pt;
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin-bottom: 10px;
`

export const ButtonDelete = styled.button`
    
`