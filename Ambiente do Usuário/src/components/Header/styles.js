import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #590000;
    display: flex;

    a{
        text-decoration: none;
    }
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    .icone{
     
    }

    object{
        width: 100px;
        margin: 0 30px;
    }

    @media screen and (max-width: 580px){
        object{
            margin-left: 10px;
        }
    }

    @media screen and (max-width: 390px){
        width: 80%;
    }
`

export const Content = styled.div`
    margin-left: 15%;
    width: 40%;
    display: flex;
    flex-direction: column;

    min-width: 150px;
    
    

    span, strong{
        color: #D8D8D6;
        font-size: 30px;

        transition: all 0.5s;
    }

    .name{
        font-weight: bold;
    }

    @media screen and (max-width: 1024px){
        
        span, strong{
            font-size: 25px;
        }
    }

    @media screen and (max-width: 800px){
        
        span, strong{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 580px){
        
        span, strong{
            margin-left: -43%;
        }
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    img{
        width: 60px;
        height: 50px;
        margin: 0 30px;
        
        cursor: pointer;

        transition: all 0.2s;

        &:hover{
            width: 70px;
            height: 60px;
            margin-right: 20px;
        }
    }

    button{
        background: none;
        border: none;
        margin: 0;
        padding: 0;
    }

    h1{
        color: #D8D8D6;
        margin: 0 10px;

        cursor: pointer;

        transition: all 0.5s;

         &:hover{
           opacity: 0.5;
         }
    }

    @media screen and (max-width: 1024px){
        
        h1{
            font-size: 25px;
        }
    }

    @media screen and (max-width: 800px){
        
        h1{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 580px){
        
        h1{
            margin-left: 10%;
        }

        img{
            margin: 0px 10px;
        }
    }

    @media screen and (max-width: 390px){
        width: 20%;
        flex-direction: column-reverse;
        
        img{
            width: 40px;
            height: 30px;
            margin-top: 15px;
            margin-bottom: 10px;
        }



        h1{

        }
    }

`

