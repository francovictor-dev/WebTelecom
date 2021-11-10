import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1{
        padding: 30px 0;
        color: #939393;
        font-weight: 500;
        text-align: center;
    }

    span{
        margin: 0 10px;
    }

    label{
        font-size: 24px;
        color: #939393;
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

    select{
        background-color: white;
    }

    input::placeholder{
        color: #D8D8D6;
    }

    input[type=button]{
        width: 100%;
        background-color: #D12626;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        padding: 15px;
        margin: 10px 0;

        transition: all 0.5s;

        &:hover{
            opacity: 0.7;
        }

        &:active{
            background-color: #590000;
        }

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    #separador{
        width: 70%;
        height: 0px;
        border: 1px solid #D8D8D6;
        border-radius: 5px;
        margin: 70px 0 10px 0 ;
    }
    
`

export const Opcoes = styled.div`
    width: 70%;
    margin: 20px 0px;
    display: flex;
    justify-content: space-around;
    

    input[type='button']{
        background-color: white;
        color: #939393;

        &:hover{
            background-color: #D8D8D6;
        }
    }
`

export const Create = styled.div`
    width: 70%;
    height: 350px;

    margin-top: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;

    #notification{
        color: #D12626;
    }

    .div1, .div2{
        width: 100%;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .div1{
        flex-wrap: wrap;
    }

    @media screen and (max-width: 780px){
        height: 450px;
    }
`

export const Update = styled.div`
    width: 70%;
    /*800*/
    height: 500px;
    /*520*/
    
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    
 
    label{
        font-size: 24px;
        color: #939393;
    }

    h1{
        padding: 30px 0;
        color: #939393;
        font-weight: 500;
        text-align: center;
    }

    div{
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        padding: 30px 0px;
       
        justify-content: center;
        
       
        div:nth-of-type(2){
            /*
            border: 2px solid #D8D8D6;
            border-top: none;
            border-bottom: none;
            */
        }
    }

    .div1{
        border-bottom: 2px solid #D8D8D6;
        
    }

    .div2{
        div:nth-of-type(2){
            border: none;
        }

        input{
           
        }

        .label{
            
        }
    }

    input[type=button]{
        
        background-color: #D12626;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        padding: 15px;
        margin: 10px 0;

        transition: all 0.5s;

        &:hover{
            opacity: 0.7;
        }

        &:active{
            background-color: #590000;
        }

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    @media screen and (max-width: 1024px){
        
        label, select, input{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 800px){
        margin-top: 0;
        height: 400px;
        label, select, input{
            font-size: 18px;
        }
    }

    @media screen and (max-width: 420px){
        
        label{
            
        }
        .div1{
            
            div:nth-of-type(2), div:nth-of-type(3){
                label{
                    margin-left: 20%;
                }
            }
        }
        
    }
`

export const Excluir = styled.div`
    width: 70%;
    /*800*/
    height: 500px;
    /*520*/
    
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    
 
    label{
        font-size: 24px;
        color: #939393;
    }

    h1{
        padding: 30px 0;
        color: #939393;
        font-weight: 500;
        text-align: center;
    }

    div{
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        padding: 30px 0px;
       
        justify-content: center;
        
       
        div:nth-of-type(2){
            /*
            border: 2px solid #D8D8D6;
            border-top: none;
            border-bottom: none;
            */
        }
    }

    .div1{
        border-bottom: 2px solid #D8D8D6;
        
    }

    .div2{
        div:nth-of-type(2){
            border: none;
        }

        input{
           
        }

        .label{
            
        }
    }

    input[type=checkbox]{     
        zoom: 1.5;
    }

    input[type=button]{
        
        background-color: #D12626;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        padding: 15px;
        margin: 10px 0;

        transition: all 0.5s;

        &:hover{
            opacity: 0.7;
        }

        &:active{
            background-color: #590000;
        }

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    @media screen and (max-width: 1024px){
        
        label, select, input{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 800px){
        margin-top: 0;
        height: 400px;
        label, select, input{
            font-size: 18px;
        }
    }

    @media screen and (max-width: 420px){
        
        label{
            
        }
        .div1{
            
            div:nth-of-type(2), div:nth-of-type(3){
                label{
                    margin-left: 20%;
                }
            }
        }
        
    }
`


