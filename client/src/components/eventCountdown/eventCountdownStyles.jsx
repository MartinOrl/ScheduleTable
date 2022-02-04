import styled from "styled-components";

export const Timer = styled.span`
    font-size: 16px;
   
    opacity: 0.6;
`

export const ComponentContainer = styled.div`
    &>p{
        font-size: 24px;
        font-weight: 500;
        opacity: 0.4;
        margin: 24px 0 16px;
    }
    &>div{
        padding: 8px 16px 16px;
        box-sizing: border-box;
        border: 1px solid #333;
        border-radius: 8px;
        background: #0a0a0a;
        transition: 250ms ease-in-out;
        color: #fff;
        width: 280px;
        position: relative;
        z-index: 8;
        cursor: pointer;
       
        h1{
            margin: 4px 0 12px;
            font-size: 20px;
        }
        p{
            margin: 0;
            font-size: 16px;
            opacity: 0.5;

        }
        &>div{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
    }
    &:hover{
        &>div{
            border: 1px solid #5a5a5a;
        }
    }
    @media screen and (max-width: 768px){
        &>div{
            width: 100%;
            padding-bottom: 32px;
        }
    }
`

export const MasterContainer = styled.div`
    color: #fff;
    padding: 0 0 0 96px;

    &>div{
        &>h2{
            font-size: 32px;
        }
        min-height: 240px;
    }

    @media screen and (max-width: 768px){
        padding: 0 0 0 24px;
    }
`