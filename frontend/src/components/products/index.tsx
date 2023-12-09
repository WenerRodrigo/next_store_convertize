import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import { Stars } from "../stars";

const conjunto = require('../../assets/conjunto_2.jpg');
const social = require('../../assets/conjunto_3.avif');

interface IProduct {
  id: number;
  name: string;
  image: string;
  sale_price: number;
  unit_price: number;
  descont_percentage: number;
  get_absolute_url: string;
  rating: number;
}

export const Products = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonVisibilityTop, setButtonVisibilityTop] = useState<{ [key: number]: boolean }>({});
  const [buttonVisibilityBottom, setButtonVisibilityBottom] = useState<{ [key: number]: boolean }>({});
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const maxCardsToShow = 4;

  const fetchApi = async () => {
    setIsLoading(true);
    api.get('/keyword').then(response => {
      const data = response.data.results.map((product: IProduct) => ({
        ...product,
        rating: 0,
      }));
      setData(data.slice(0, maxCardsToShow));
    }).catch(error => {
      console.error(error);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchApi();
  }, [])

  const handleRatingChange = (productId: number, newRating: number) => {
    setData(prevData =>
      prevData.map(product =>
        product.id === productId ? { ...product, rating: newRating } : product
      )
    );
  }

  const calculateInstallment = (totalAmount: number, installmentCount: number) => {
    const installmentValue = totalAmount / installmentCount;
    return installmentValue.toFixed(2);
  }

  const handleCardClick = (productId: number) => {
    setSelectedCard((prevSelectedCard) =>
      prevSelectedCard === productId ? null : productId
    );
  };

  const handleMouseEnterTop = (productId: number) => {
    setButtonVisibilityTop((prevVisibility) => ({
      ...prevVisibility,
      [productId]: true,
    }));
  };

  const handleMouseLeaveTop = (productId: number) => {
    setButtonVisibilityTop((prevVisibility) => ({
      ...prevVisibility,
      [productId]: false,
    }));
  };

  const handleMouseEnterBottom = (productId: number) => {
    setButtonVisibilityBottom((prevVisibility) => ({
      ...prevVisibility,
      [productId]: true,
    }));
  };

  const handleMouseLeaveBottom = (productId: number) => {
    setButtonVisibilityBottom((prevVisibility) => ({
      ...prevVisibility,
      [productId]: false,
    }));
  };

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <S.Wrapper>
      <S.TitleProducts>Mais comprados do mês
        <S.TitleStyle></S.TitleStyle>
      </S.TitleProducts>

      <S.Card>
        {data?.map((item) => {
          const installmentCount = 6;
          const installmentValue = calculateInstallment(item.sale_price, installmentCount);

          return (
            <S.CardContent
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={selectedCard === item.id ? "selected" : ""}
              onMouseEnter={() => handleMouseEnterTop(item.id)}
              onMouseLeave={() => handleMouseLeaveTop(item.id)}
            >
              <S.Discount>{item.descont_percentage}%</S.Discount>
              <S.ImagemCard src={social} />
              <S.DescriptionProduct>Conjunto Social Style Masculino NextStore</S.DescriptionProduct>
              <S.ContentStar>
                <Stars
                  productId={item.id}
                  rating={item.rating}
                  onRatingChange={handleRatingChange}
                />
              </S.ContentStar>
              <S.CurrentPrice>R$: {item.unit_price}</S.CurrentPrice>
              <S.Installments><strong>{installmentCount}x</strong> de <strong>R$ {installmentValue}</strong> sem juros</S.Installments>
              <S.Price>R$ {item.sale_price}</S.Price>
              <S.Button style={{ display: buttonVisibilityTop[item.id] || (selectedCard === item.id && buttonVisibilityTop[item.id]) ? 'block' : 'none' }}>
                Comprar
              </S.Button>
            </S.CardContent>
          );
        })}
      </S.Card>

      <S.TitleProducts>Produtos mais visitados
        <S.TitleStyle></S.TitleStyle>
      </S.TitleProducts>

      <S.Card>
        {data?.map((item) => {
          const installmentCount = 6;
          const installmentValue = calculateInstallment(item.sale_price, installmentCount);

          return (
            <S.CardContent
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={selectedCard === item.id ? "selected" : ""}
              onMouseEnter={() => handleMouseEnterBottom(item.id)}
              onMouseLeave={() => handleMouseLeaveBottom(item.id)}
            >
              <S.Discount>{item.descont_percentage}%</S.Discount>
              <S.ImagemCard src={conjunto} />
              <S.DescriptionProduct>Conjunto Social Style Masculino NextStore</S.DescriptionProduct>
              <S.ContentStar>
                <Stars
                  productId={item.id}
                  rating={item.rating}
                  onRatingChange={handleRatingChange}
                />
              </S.ContentStar>
              <S.CurrentPrice>R$: {item.unit_price}</S.CurrentPrice>
              <S.Installments><strong>{installmentCount}x</strong> de <strong>R$ {installmentValue}</strong> sem juros</S.Installments>
              <S.Price>R$ {item.sale_price}</S.Price>
              <S.Button style={{ display: buttonVisibilityBottom[item.id] || (selectedCard === item.id && buttonVisibilityBottom[item.id]) ? 'block' : 'none' }}>
                Comprar
              </S.Button>
            </S.CardContent>
          );
        })}
      </S.Card>
    </S.Wrapper>
  )
}
