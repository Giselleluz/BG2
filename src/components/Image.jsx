import styled from "styled-components";

const Image = styled.img`
    width: ${props => props.largura || '300px'};
    height: ${props => props.altura || '200px'};
`;

export default Image;