import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 85vh;
  
    display: flex;
    justify-content: center;
   
`

export const Content = styled.div`
    width: 70%;
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

    input, select{
        
        padding: 15px;
        font-size: 24px;
        border: 2px solid #D8D8D6;
        border-radius: 8px;
        margin: 10px 0;
        
        color: #939393;

        transition: all 0.5s;

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
        margin-bottom: 30px;
        background-color: #D12626;
        border: none;
        color: white;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

        &:active{
            background-color: #590000;
        }
    }
    
    .notification{
        text-align: center;
       
        label{
            color: #D12626;
            font-size: 24px;
        }
    }

        

    @media screen and (max-width: 1024px){
        
        label, select, input{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 800px){
        align-items: center;
        label, select, input{
            font-size: 18px;
            
        }
        input{
            width: 85%;
        }
    }

`

export const Bloco = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    flex-wrap: wrap;

    @media screen and (max-width: 800px){
        justify-content: space-around;
    }
`
export const Unidade = styled.div`
    width: 100%;
    max-width: 240px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    select{
        color: #939393;
        background-color: white;
    }

    .date{
        color: #939393;
        height: 27px;  
    }


    @media screen and (max-width: 1024px){
        
        &:nth-of-type(2){
            width: 240px;
        }

    }

    @media screen and (max-width: 800px){
        align-items: center;
        select{
            width: 100%;
        }
    }

`