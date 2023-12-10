import React, { useState } from "react";
import * as S from './styles';


type CartMenuProps = {
    onClose: () => void;
}


export const CartMenu: React.FC<CartMenuProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const closeMenu = () => {
        setIsVisible(false);
        onClose();
    }

    return isVisible ? (
        <S.ContentCartMenu>
            <S.IconClose onClick={closeMenu}><span className="material-symbols-outlined">
                close
            </span></S.IconClose>
            <S.TotalCart>Total R$: 00,00</S.TotalCart>
            <S.Button>Finalizar compra</S.Button>
        </S.ContentCartMenu>
    ) : null;
}