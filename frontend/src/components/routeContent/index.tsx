import React from "react";
import * as S from './styles';



export const RouteContent = () => {
    return (
        <S.Content>
            <S.NavLink to="/">Camisetas</S.NavLink>
            <S.NavLink to="/">Camisa Polo</S.NavLink>
            <S.NavLink to="/">Shorts</S.NavLink>
            <S.NavLink to="/">Bonés</S.NavLink>
            <S.NavLink to="/">Outlet</S.NavLink>
        </S.Content>
    )
}