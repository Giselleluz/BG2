import styled from "styled-components";

const Descricao = styled.p`
    color: ${props => props.corDoDescricao || "white"};
    font-size:  ${props => props.tamanhoDescricao || "16px"};
`;

export default Descricao;