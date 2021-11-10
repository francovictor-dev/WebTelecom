import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    span{
        font-size: 24px;
        color: #D12626;
        padding-top: 30px;
 
    }

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

    select{
        color: #939393;
        background-color: white;
    }

    @media screen and (max-width: 1024px){
      
        label, select, input {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 800px){
        
        label, select, input{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 420px){
        
        label, select, input{
            font-size: 12px;
        }
    }
`

export const Query = styled.div`
     width: 70%;
    /*800*/
    height: 20%;
    /*520*/
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px;
        
    }

    @media screen and (max-width: 800px){
        height: auto;
        flex-wrap: wrap;

        div{
            margin: 0;  
            align-items: center;
        }

        input, select{
            width: 100%;
        }

        input[type="text"]{
            width: 90%;
        }
    }
    
`

export const Content = styled.div`
    width: 80%;
    height: 350px;
    min-height: 200px;
    /*800*/
    margin-top: 50px;
    margin-bottom: 20px;
    border: 1px solid #D8D8D6;
    border-radius: 10px;
    
    overflow-y:scroll; 
    overflow-x: hidden;
`

export const ItemConsulta = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid #D8D8D6;

    display:flex;
    
    
    justify-content: space-around;
    align-items: center;

    &:hover{
        background-color: #F5F5F5;
    }

    .barra{
        border: 1px solid #D8D8D6;
        height: 30px;
       
    }

    .label{
        
        overflow: hidden;
        text-overflow: clip;
    }

    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 800px){
        height: 60px;
    }
    
`

export const MostrarDados = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px 0px 20px 0px;

    .botoes{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        input[type="button"]{
            margin: 20px 30px;
        }
    }

    

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`