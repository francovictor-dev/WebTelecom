import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    
`

export const Content = styled.div`
    width: 65%;
    /*800*/
    height: 85%;
    /*520*/
    
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    
    label{
        font-size: 24px;
        color: #939393;
        padding: 10px 0;
    }

    span{
        font-size: 24px;
        color: #D12626;
        padding: 10px 0 0 0;
    }

    input, select{
        padding: 15px;
        font-size: 24px;
        border: 2px solid #D8D8D6;
        border-radius: 8px;
        margin: 10px 0;
        
        color: #939393;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    input::placeholder{
        color: #D8D8D6;
    }
 
    input[type=button]{
        margin-top: 30px;
        background-color: #D12626;
        border: none;
        color: white;
        font-weight: bold;
        cursor: pointer;

        transition: all 0.5s;

        &:hover{
            opacity: 0.7;
        }

        &:active{
            background-color: #590000;
        }
    }
    
    @media screen and (max-width: 420px){
        align-items: center;
        input{
            width: 100%;
        }

        input[type=password]{
            width: 85%;
        }
    }
`

