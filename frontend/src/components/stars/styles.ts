import styled from "styled-components";

interface StarProps {
    filled: boolean;
    onClick: () => void;
}

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStar = styled.span<StarProps>`
  color: ${(props) => (props.filled ? "gold" : "bleck")};
  cursor: pointer;
`;
