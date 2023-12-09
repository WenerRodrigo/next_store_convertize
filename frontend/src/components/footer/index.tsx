import React from 'react';
import * as S from './styles';

const imgFooter = require('../../assets/footer.png');
const cartoes = require('../../assets/cartoes.png');
const certificado = require('../../assets/certificado.webp');

export const Footer = () => {
    return (
        <>
            <S.BoxRodape>
                <S.ContentRodape>
                    <S.SubTitleFooter>
                        <S.DescriptionText>© NEXTSTORE 2023. Todos os direitos reservados.</S.DescriptionText>
                        <S.CnpjFooter>CNPJ: 00.000.000/000000</S.CnpjFooter>
                    </S.SubTitleFooter>

                    <S.ContainerImage>
                        <S.TitleCard>Meios de pagamento</S.TitleCard>
                        <S.ImagePagamento src={cartoes} alt="Meios de pagamentos" />
                    </S.ContainerImage>

                    <S.ContainerCertificado>
                        <S.TitleCard>Segurança</S.TitleCard>
                        <S.ImageCertifacado src={certificado} alt="Licenças" />
                    </S.ContainerCertificado>

                </S.ContentRodape>
            </S.BoxRodape>
            <S.ContentFooter>
                <S.ImagemFooter src={imgFooter} alt="Logo Footer" />
                <S.Footer>
                    <S.DescriptionFooter>Powered by</S.DescriptionFooter>
                    <S.Description>NextStore</S.Description>
                </S.Footer>
            </S.ContentFooter>
        </>
    )
}