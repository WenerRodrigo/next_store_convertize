import React from "react";
import * as S from './styles';
import { Products } from "../products";
import { Register } from "../register";

const whats = require('../../assets/whatsapp.png');
const instragram = require('../../assets/instagram.png');
const facebook = require('../../assets/facebook.png');
const youtube = require('../../assets/youtube.png');
const linkedin = require('../../assets/linkedin.png');

export const MainContent = () => {
    return (
        <>
            <Products />
            <Register />
            <S.Content>
                <S.Container>
                    <S.Title>Atendimento</S.Title>
                    <span>
                        <img src={whats} alt="WhatsApp" width={25} />
                        <S.Contato>16 90101.0101</S.Contato>
                        <S.ContentDescription>
                            <S.Description>Seg à Sex das 08:00 as 18:00</S.Description>
                            <S.Description>Email: contato@nextstore.com.br</S.Description>
                        </S.ContentDescription>
                    </span>
                </S.Container>

                <S.Container>
                    <S.Title>Institucional</S.Title>
                    <S.ContentDescription>
                        <S.Description>Quem somos</S.Description>
                        <S.Description>Nossas Lojas</S.Description>
                        <S.Description>Trabalhe conosco</S.Description>
                        <S.Description>Política de privacidade</S.Description>
                    </S.ContentDescription>
                </S.Container>

                <S.Container>
                    <S.Title>Ajuda</S.Title>
                    <S.ContentDescription>
                        <S.Description>Política de Entrega</S.Description>
                        <S.Description>Trocas e devoluçôes</S.Description>
                        <S.Description>Central de Atendimento</S.Description>
                    </S.ContentDescription>
                </S.Container>

                <S.Container>
                    <S.Title>Acompanhe nossas redes</S.Title>
                    <S.RedeSocial src={instragram} alt="Instagram" width={60} />
                    <S.RedeSocial src={facebook} alt="Facebook" width={60} />
                    <S.RedeSocial src={linkedin} alt="Linkedin" width={60} />
                    <S.RedeSocial src={youtube} alt="YouTube" width={60} />
                </S.Container>
            </S.Content>
        </>
    )
}