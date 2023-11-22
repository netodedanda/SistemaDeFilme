import styled from "styled-components";
//react bootstrap
import { Form, FloatingLabel, Spinner, Modal } from 'react-bootstrap';

export const OpenModalButton = styled.button`
    border: none;
    background-color: #060664;
    color: #fff;
    font-weight: bold;

    width: 120px;
    height: 40px;

    border-radius: 8px;

    transition: opacity ease-in .2s;

    &:hover {
        opacity: .5;
    }
`

export const ModalAddFilm = styled(Modal)`

`

export const FormAddFilm = styled(Form)`

`

export const FloatingLabelAddFilm = styled(FloatingLabel)`
    margin-bottom: 20px;
`

export const ContainerButton = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const ButtonAddFilm = styled.button`
    background-color: #060664;

    border: none;
    border-radius: 10px;

    width: 110px;
    height: 40px;

    margin-top: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-weight: bold;

    font-size: 12pt;

    transition: opacity ease-in .2s;

    &:hover {
        opacity: .5;
    }

    cursor: pointer;
`

export const SpinnerAddFilm = styled(Spinner)`
    margin-left: 10px;
`