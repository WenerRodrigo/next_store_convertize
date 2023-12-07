import React from 'react';
import { BsHandbag } from "react-icons/bs";
import * as S from './styles';



export const ContentHeader = () => {
    return (
        <S.Content>
            <S.InputContent>
                <S.Input
                    type="text"
                    placeholder='O que você procura ?'
                />
                <S.IoMdSearchIcon />
            </S.InputContent>

            <S.Title>NEXT STORE</S.Title>

            <S.Login>Minha conta</S.Login>

            {/* talvez envolver com uma div para ter os numeros aqui */}
            <S.Icon><BsHandbag /></S.Icon>
        </S.Content>
    )
}