import React from "react";
import * as S from './styles';


export const Header = () => {
    return (
        <S.Content>
            <S.Description><S.StyledIcon /><strong>Frete grátis</strong>em compras acima de<strong>R$ 199</strong></S.Description>
        </S.Content>
    )
}