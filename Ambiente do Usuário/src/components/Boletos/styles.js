import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
 

    label, input{
        font-size: 24px;
        color: #939393;
    }

    h1{
        color: #939393;
        margin: 30px 0 30px 0;
    }

    @media screen and (max-width: 800px){
        
        label, input{
            font-size: 16px;
        }

        input[type="button"]{
            max-width: 80px;
        }
    }

    @media screen and (max-width: 420px){
        
        label, input{
            font-size: 12px;
        }

        input[type="button"]{
            max-width: 40px;
            content: 'Boleto';
        }
    }
`

export const Content = styled.div`
    width: 90%;
    height: 100%;

    .inicioTabela{
        width: 100%;
        height: 100px;
        border: 3px solid #D8D8D6;
        background-color: #D8D8D6;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-bottom: none;

        label{
            
        }

        div{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        div:nth-of-type(1){
            label{
                max-width: 150px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .registro{
        width: 100%;
        height: 100px;
        border: 3px solid #D8D8D6;
        border-top: 2px;
        
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    
        div{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        div:nth-of-type(1){
            label{
                max-width: 150px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .separador{
        padding: 20px 0 20px 0;
        border: 1px solid #D8D8D6;
        border-radius: 5px;
    }

    input[type="button"]{
        width: 150px;
        height: 50px;
        background-color: #D12626;
        color: white;
        background-image: none;
        border-radius: 10px;
        border: none;
        font-weight: bold;

        white-space: nowrap;
        overflow: hidden;
           

        transition: all 0.5s;

        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

        &:active{
            background-color: #590000;
        }

        
    }


`