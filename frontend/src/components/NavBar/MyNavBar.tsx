import React from 'react';
//styles
import * as S from './styles';
//img
import img1 from './img/img-1.png'

const MyNavBar: React.FC = () => {
  return (
    <S.StyledNavBar expand="lg">
      <S.StyledImage src={img1} />
      <S.Title>Site de Filmes</S.Title>
    </S.StyledNavBar>
  );
};

export default MyNavBar;
