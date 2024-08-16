import styled from "styled-components";

const Titulo = styled.h1`
    color: ${props => props.corDoTitulo || "white"};
    font-size:  ${props => props.tamanhoTitulo || "32px"};
    text-align:n center ;
`;

export default Titulo;
