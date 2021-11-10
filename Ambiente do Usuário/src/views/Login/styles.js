import styled from 'styled-components';
import imagemFundo from '../../assets/Fundo.png';

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    min-height: 520px;
    
    background-image: url(${imagemFundo});
   
    background-size: cover;
    
    @media screen and (max-width: 1024px){
        background-image: none;
        background-color: #EEE;
    }
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100vh;
    
    @media screen and (max-width: 1024px){
        display: none;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px){
        width: 100%;
    }
`