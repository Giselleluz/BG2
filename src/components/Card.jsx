import styled from "styled-components";

const Card = styled.div`
    width: 350px;
    height: 300px;
    background-color: ${props => props.corDoTitulo || "Lightgray"};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Card;