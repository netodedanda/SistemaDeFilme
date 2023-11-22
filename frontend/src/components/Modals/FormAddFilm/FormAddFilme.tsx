import React, { useEffect, useState } from "react";
import * as S from "./styles";
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import axios from "axios";

type FilmeFormData = {
    titulo: string;
    ator: string;
    faixa_etaria: number;
    genero: string;
}

const schema = yup.object().shape({
    titulo: yup.string().required("Campo Obrigatório"),
    ator: yup.string().required("Campo Obrigatório"),
    faixa_etaria: yup.number().required("Campo Obrigatório"),
    genero: yup.string().required("Campo Obrigatório"),
})

const FormAddFilme: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const [form, setForm] = useState<FilmeFormData>({
        titulo: "",
        ator: "",
        faixa_etaria: 10,
        genero: "",
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            titulo: "",
            ator: "",
            faixa_etaria: 10,
            genero: "",
        },
    })

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const onSubmit = async (data: FilmeFormData) => {
        setIsLoading(true);
        try {
          await axios.post("http://localhost:5151/api/filme/create", data);
          console.log("Filme adicionado com sucesso!");
      
          setShowSuccessMessage(true);
          setIsLoading(false);
      
          setForm({
            titulo: "",
            ator: "",
            faixa_etaria: 10,
            genero: "",
          });
      
          handleCloseModal(); // Mova o fechamento do modal aqui
        } catch (error) {
          console.error("Erro ao adicionar filme:", error);
          setIsLoading(false);
        }
    };
      
      
    return (
        <>
            <S.OpenModalButton onClick={handleOpenModal}> + Adicionar Filme </S.OpenModalButton>

            <S.ModalAddFilm show={showModal} onHide={handleCloseModal} size="lg">
                <S.ModalAddFilm.Header closeButton>
                    <S.ModalAddFilm.Title>Adicionar um Novo Filme</S.ModalAddFilm.Title>
                </S.ModalAddFilm.Header>

                <S.ModalAddFilm.Body>
                    <S.FormAddFilm onSubmit={handleSubmit(onSubmit)}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <h1 style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '22pt' }}>Cadastre o Filme</h1>
                        </div>

                        <S.FloatingLabelAddFilm controlId="floatingInputTitulo" label="Título">
                            <S.FormAddFilm.Control
                                type="text"
                                placeholder="Título"
                                {...register("titulo")}
                                onChange={(e) => setValue("titulo", e.target.value)}
                                isInvalid={!!errors.titulo}
                            />
                            {errors.titulo && (
                                <S.FormAddFilm.Control.Feedback type="invalid">
                                    {errors.titulo.message}
                                </S.FormAddFilm.Control.Feedback>
                            )}
                        </S.FloatingLabelAddFilm>

                        <S.FloatingLabelAddFilm controlId="floatingInputAtor" label="Ator">
                            <S.FormAddFilm.Control
                                type="text"
                                placeholder="Ator"
                                {...register("ator")}
                                onChange={(e) => setValue("ator", e.target.value)}
                                isInvalid={!!errors.ator}
                            />
                            {errors.ator && (
                                <S.FormAddFilm.Control.Feedback type="invalid">
                                    {errors.ator.message}
                                </S.FormAddFilm.Control.Feedback>
                            )}
                        </S.FloatingLabelAddFilm>

                        <S.FloatingLabelAddFilm controlId="floatingInputFaixaEtaria" label="Faixa Etária">
                            <S.FormAddFilm.Control
                                type="text"
                                placeholder="Faixa Etária"
                                {...register("faixa_etaria")}
                                onChange={(e) => setValue("faixa_etaria", parseInt(e.target.value, 10))}
                                isInvalid={!!errors.faixa_etaria}
                            />
                            {errors.faixa_etaria && (
                                <S.FormAddFilm.Control.Feedback type="invalid">
                                    {errors.faixa_etaria.message}
                                </S.FormAddFilm.Control.Feedback>
                            )}
                        </S.FloatingLabelAddFilm>

                        <S.FloatingLabelAddFilm controlId="floatingInputGenero" label="Gênero">
                            <S.FormAddFilm.Control
                                type="text"
                                placeholder="Gênero"
                                {...register("genero")}
                                onChange={(e) => setValue("genero", e.target.value)}
                                isInvalid={!!errors.genero}
                            />
                            {errors.genero && (
                                <S.FormAddFilm.Control.Feedback type="invalid">
                                    {errors.genero.message}
                                </S.FormAddFilm.Control.Feedback>
                            )}
                        </S.FloatingLabelAddFilm>

                        <S.ContainerButton>
                            <S.ButtonAddFilm
                                type="submit"
                            >
                                {isLoading ? <S.SpinnerAddFilm animation="border" size="sm" /> : "Confirmar"}
                            </S.ButtonAddFilm>
                        </S.ContainerButton>
                    </S.FormAddFilm>
                </S.ModalAddFilm.Body>
            </S.ModalAddFilm>
        </>
    )
}

export default FormAddFilme;
