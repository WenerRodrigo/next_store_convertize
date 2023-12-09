import styled from 'styled-components';

export const ContentSlider = styled.div`
    margin: 25px auto;
    width: 100%;
    height: 400px;
    overflow: hidden;

    // @media (max-width: 800px) {
    //     width: 100%;
    //   }
`;

export const ContentSlides = styled.div`
    width: 300%;
    height: 400px;
    display: flex;
    transition: margin-left 0.3s ease;
  `;

export const Input = styled.input`
    display: none;
`;

export const ContentImg = styled.div`
    flex: 0 0 33.33%;
    height: 100%;
`;

export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1.3
`;


export const TextOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 65px;
    font-weight: 400;
    text-align: center;
    z-index: 2;
`;

export const PoloTextOverlay = styled(TextOverlay)`
    top: 50%;
    font-size: 30px;
    font-family: 'Bebas Neue', sans-serif;
`;

export const DiscountTextOverlay = styled(TextOverlay)`
    top: 57%;
    font-family: 'Bebas Neue', sans-serif;
`;

export const Navigation = styled.div`
    position: absolute;
    width: 100%;
    margin-top: -40px;
    display: flex;
    justify-content: center;
`;

export const LabelNavigation = styled.label`
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fff;
    transition: all 0.3s ease;

    &:not(:last-child) {
      margin-right: 40px;
    }

    &:hover {
      background: #000;
    }
`;

export const AutoBtn = styled.div<{ checked?: boolean }>`
    background: ${(props) => (props.checked ? '#fff' : 'transparent')};
`;
