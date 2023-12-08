import React from "react";
import * as S from './styles';
import { ContentHeader } from "../contentHeader";
import { RouteContent } from "../routeContent";
import { Slides } from "../slides";


export const Header = () => {
    return (
        <>
            <S.Content>
                <S.Description><S.StyledIcon /><strong>Frete grátis</strong>em compras acima de<strong>R$ 199</strong></S.Description>
            </S.Content>
            <ContentHeader />
            <RouteContent />
            <Slides />
        </>
    )
}