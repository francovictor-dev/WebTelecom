import styled from 'styled-components';
import iconeUsuario from '../../assets/IconeUsuario.png';
import cadiadoCinza from '../../assets/CadiadoCinza.png';

export const Container = styled.div`
    width:100%;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        width: 480px;
        height: 530px;

        display: inline-block;
        justify-content: center;

        object{
            width: 55%;
            padding-left: 24%;
            padding-bottom: 7%;
        }

        input{
            width: 92%;
            border-radius: 10px;
            border: none;
            background-color: #D8D8D6;
            color: #959595;
            padding: 15px;
            padding-top: 17px;
            padding-left: 25px;

            margin: 15px 0;

            font-size: 28px;

            background-image: url(${iconeUsuario});
            background-size: 43px 43px;
            background-repeat: no-repeat;
            background-position: 96% 10px;

            &::placeholder{
                color: #BBBBBB;
            }

           
        }

        input:nth-of-type(2){
            background-image: url(${cadiadoCinza});
            background-size: 35px 43px;
            background-position: 95% 10px;
        }

        input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        .notification{
            text-align: center;
        }

        label{
            color: #D12626;
            font-size: 24px;
            
        }

        input[type="button"]{
            width: 100%;
            background-color: #D12626;
            color: white;
            background-image: none;

            transition: all 0.5s;

            cursor: pointer;

            &:hover{
                opacity: 0.7;
            }

            &:active{
                background-color: #590000;
            }
        }
        
        @media screen and (max-width: 340px){
            margin-top: 100px;
            padding-bottom: 0px;
            margin-bottom: 0px;
        }
    }
    
`