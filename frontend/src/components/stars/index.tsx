import React from "react";
import * as S from "./styles";

interface StarRatingProps {
    productId: number;
    rating: number;
    onRatingChange: (productId: number, newRating: number) => void;
}


interface StarProps {
    filled: boolean;
    onClick: () => void;
}


export const Stars: React.FC<StarRatingProps> = ({ onRatingChange, productId, rating }) => {
    const maxRating = 5;

    const handleStarClick = (clickedRating: number) => {
        onRatingChange(productId, clickedRating);
    }

    return (
        <S.StarContainer>
            {[...Array(maxRating)].map((_, index) => (
                <S.StyledStar
                    key={index}
                    filled={index < rating}
                    onClick={() => handleStarClick(index + 1)}
                >
                    ★
                </S.StyledStar>
            ))}
        </S.StarContainer>
    )
}