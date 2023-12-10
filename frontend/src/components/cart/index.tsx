import React, { useState } from "react";
import * as S from './styles';
import { BsHandbag } from "react-icons/bs";
import { CartMenu } from "../cartMenu";



export const Cart = () => {
    const [isMenuOpen, setISMenuOpen] = useState(false);

    const toogleMenu = () => {
        setISMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setISMenuOpen(false);
    }

    return (
        <S.ContentCart onClick={toogleMenu}>
            <S.Icon><BsHandbag /></S.Icon>
            <S.ItensCart>10</S.ItensCart>
            {isMenuOpen && <CartMenu onClose={closeMenu} />}
        </S.ContentCart>
    )
}