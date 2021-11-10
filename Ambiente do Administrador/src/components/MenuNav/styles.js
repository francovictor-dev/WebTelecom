import styled from 'styled-components';


export const Container = styled.div`
    transition: all 0.5s;
    position: ${props => props.actived ? 'unset' : 'absolute'};
    width: ${props => props.actived ? '260px' : '0'};
    img{
        position: absolute;
        left: 15px;
        top: ${props => props.actived ? '124px' : '24px'};
        width: 50px;
        height: 50px;
      
        background-color: #D8D8D6;
        border-radius: 5px;
        
        cursor: pointer;

        z-index: 1;
    }

    @media screen and (max-width: 800px){
        position: absolute;
        
        img{
            top: 24px;
        }
        
    }

`

export const Content = styled.div`
    width: 260px;
    height: 85vh;
    margin-top: 0%;
    box-shadow: 0px 15px 26px 0px rgb(0,0,0,0.7); 
    
    transition: all 0.5s ease;
    
    position: relative;
    left: ${props => props.actived ? '0px' : '-270px'};
    
    a{
        text-decoration: none;
    }

    div{
        
        padding: 35px 0 35px 20px;
        border-bottom: 1px solid #939393;
        cursor: pointer;  
        background-color: white;
    }

    .ButtonHide, .ItemMenu{
        color: #939393;
        font-size: 23px;
    }

    .ButtonHide{
        display: flex;
        background-color: #D8D8D6;
        align-items: center;
        /*padding: 25px 0  25px 20px;*/

        span{
            margin-left: 60px;
        }

    }

    .ItemMenu{
       
        transition: all 0.5s;
        &:hover{
            background-color: #D12626;
            color: white;
        }
    }
    
    .ItemBranco{
        height: 16vh;
        border: none;
    }

    
`