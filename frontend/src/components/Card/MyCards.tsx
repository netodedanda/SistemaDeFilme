import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search } from 'react-bootstrap-icons';
import * as S from './styles';
//components
import FormAddFilme from '../Modals/FormAddFilm/FormAddFilme';
import FormPutFilm from '../Modals/FormPutFilm/FormPutFilm';
import DeletFilm from '../Modals/DeleteFilm/DeleteFilm';

interface CardData {
    id: number;
    titulo: string;
    ator: string;
    faixa_etaria: number;
    genero: string;
}

const MyCards: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [search, setSearch] = useState<string>('');

    /**
     * Pode ser trocado por react-query
    */
    useEffect(() => {
        axios.get('http://localhost:5151/api/filmes')
            .then(response => setCards(response.data))
            .catch(error => console.error(error))
    }, [])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const filteredCards = cards.filter(card =>
        card.titulo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}
            >
                <h1 style={{ color: '#fff', fontSize: '22pt', fontWeight: 'bold' }}>Todos os Filmes</h1>
            </div>
        
            <S.FormSearch>
                
                
                <S.ContainerSearch>
                    <S.FloatingLabelStyled
                        controlId="floatingInput"
                        label="Pesquisar por nome do Filme..."
                        className="mb-3"
                    >
                        <S.FormSearch.Control
                            style={{ paddingRight: '30px' }}
                            type="text"
                            placeholder="Digite aqui"
                            onChange={handleSearch}
                        />
                    </S.FloatingLabelStyled>
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '15px', 
                            transform: 'translateY(-50%)',
                        }}
                    >
                        <Search width="15" height="15" color="black" />
                    </div>
                </S.ContainerSearch>

            </S.FormSearch>

            <S.ContainerAddFilm>
                <FormAddFilme /> 
            </S.ContainerAddFilm>

            <S.Container>
                {filteredCards.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <p style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Infelizmente nenhum filme foi encontrado. 😢​</p>
                   </div>
                ) : (
                    filteredCards.map(card => (
                    
                        <S.CardStyled key={card.id}>
                            <S.Title>Filme - {card.titulo}</S.Title>
                            <S.ContainerInfos>
                                <S.Ator> Ator(es): <span style={{ fontWeight: 'bold' }}>{card.ator}</span></S.Ator>
                                <S.FaixaEtaria>Faixa Etária: Maiores de <span style={{ fontWeight: 'bold' }}> {card.faixa_etaria} </span></S.FaixaEtaria>
                                <S.Genero>Genêro: <span style={{ fontWeight: 'bold' }}> {card.genero} </span></S.Genero>
                            </S.ContainerInfos>
    
                            <S.ContainerButtons>
                                <FormPutFilm id={card.id} titulo={card.titulo}/>
                                <DeletFilm id={card.id} titulo={card.titulo}/>
                            </S.ContainerButtons>
                            
                        </S.CardStyled>
                    ))
                )}
                
            </S.Container>
        </> 
    )
}

export default MyCards;