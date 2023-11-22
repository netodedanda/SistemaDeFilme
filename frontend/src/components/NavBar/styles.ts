import styled from "styled-components";
//react-bootstrap
import { Navbar } from "react-bootstrap";

export const StyledNavBar = styled(Navbar)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 120px;

    background-color: #313131;

    box-shadow: 0px 0px 10px #fff;
`

export const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: #000;
    text-shadow: 0px 0px 10px #fff;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 25px;
        margin-left: 0;
    }
`;

export const StyledImage = styled.img`
    height: 100px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: 80px;
    }
    
`