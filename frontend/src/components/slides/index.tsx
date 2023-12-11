import React, { useState } from 'react';
import * as S from './styles';

const imagem = require('../../assets/tecido_1.jpg');
const imagem1 = require('../../assets/tecido_2.jpg');
const imagem2 = require('../../assets/tecido_3.avif');

export const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleRadioChange = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <S.ContentSlider>
      <S.ContentSlides style={{ marginLeft: `-${currentSlide * 800}px` }}>
        <S.Input
          type="radio"
          id="radio1"
          name="slider"
          checked={currentSlide === 0}
          onChange={() => handleRadioChange(0)}
        />
        <S.Input
          type="radio"
          id="radio2"
          name="slider"
          checked={currentSlide === 1}
          onChange={() => handleRadioChange(1)}
        />
        <S.Input
          type="radio"
          id="radio3"
          name="slider"
          checked={currentSlide === 2}
          onChange={() => handleRadioChange(2)}
        />

        <S.ContentImg>
          <S.Imagem src={imagem} alt="Imagem Promoção" />
          <S.PoloTextOverlay>
            Camisas Polo
          </S.PoloTextOverlay>
          <S.DiscountTextOverlay>ATÉ 30% OFF</S.DiscountTextOverlay>
        </S.ContentImg>

        <S.ContentImg>
          <S.Imagem src={imagem1} alt="Imagem Promoção" />
        </S.ContentImg>

        <S.ContentImg>
          <S.Imagem src={imagem2} alt="Imagem Promoção" />
        </S.ContentImg>
      </S.ContentSlides>

      <S.Navigation>
        <S.LabelNavigation htmlFor="radio1" id="radio1"></S.LabelNavigation>
        <S.LabelNavigation htmlFor="radio2" id="radio2"></S.LabelNavigation>
        <S.LabelNavigation htmlFor="radio3" id="radio3"></S.LabelNavigation>
      </S.Navigation>
    </S.ContentSlider>
  );
};
