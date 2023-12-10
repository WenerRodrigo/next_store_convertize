import React from 'react';
import * as S from './styles';
import { Cart } from '../cart';

const logo = require('../../assets/mascara-africana.png');


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

            <S.Title>NEXT <S.Imagem src={logo} alt='Imagem Logo' /> STORE</S.Title>

            <S.Login>Minha conta</S.Login>   
            <Cart />
        </S.Content>
    )
}