import React, { useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { Trash } from "react-bootstrap-icons";

type FilmeFormData = {
    titulo: string;
    ator: string;
    faixa_etaria: number;
    genero: string;
}

interface DeleteFilmeProps {
    id: number;
    titulo: string;
}


const DeletFilm: React.FC<DeleteFilmeProps> = ({ id, titulo }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evitar o comportamento padrão do formulário

        setIsLoading(true);

        try {
            // Ajuste o endpoint conforme necessário
            await axios.delete(`http://localhost:5151/api/filme/delete/${id}`);
            console.log("Filme deletado com sucesso!");

            // Pode adicionar a lógica para mostrar uma mensagem de sucesso aqui, se desejar

            setIsLoading(false);
            handleCloseModal();
        } catch (error) {
            console.error("Erro ao deletar filme:", error);
            setIsLoading(false);
        }
    };
    

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
      
    return (
        <>
            <S.OpenModalButton onClick={handleOpenModal}> Excluir </S.OpenModalButton>

            <S.ModalAddFilm show={showModal} onHide={handleCloseModal} size="lg">
                <S.ModalAddFilm.Header closeButton>
                    <S.ModalAddFilm.Title> Excluir Filme </S.ModalAddFilm.Title>
                </S.ModalAddFilm.Header>

                <S.ModalAddFilm.Body>
                    <S.FormAddFilm onSubmit={() => onSubmit}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <h1 style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '22pt' }}>Tem Certeza que quer <span style={{ color: "#990D0D", textDecoration: 'underline' }}> Excluir? </span></h1>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '16pt' }}> Filme - <span style={{ color: "#990D0D" }}> {titulo} </span> </h3>
                        </div>

                        <S.ContainerButton>
                            <S.ButtonAddFilm
                                type="submit"
                            >
                                {isLoading ? <S.SpinnerAddFilm animation="border" size="sm" /> : <Trash/> }
                            </S.ButtonAddFilm>
                        </S.ContainerButton>
                    </S.FormAddFilm>
                </S.ModalAddFilm.Body>
            </S.ModalAddFilm>
        </>
    )
}

export default DeletFilm;
