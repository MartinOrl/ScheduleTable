import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
    margin-left: auto;
    width: max-content;
    &>div:last-of-type{
        border-bottom: none;
    }
`

export const MasterContainer = styled.div`
    margin-left: auto;
    &>h2{
        font-size: 32px;
        color: #fff
    }
`

export const Week = styled.div`
    display: flex;
    color: #fff;
    padding: 24px 0 48px;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.2);
    background: ${props => props.match ? 'linear-gradient(-150deg,rgba(255,255,255,.03) 30%,rgba(255,255,255,0) 80%)' : 'rgba(0,0,0,0)'};
    &>h1{
        margin: 0 32px 0 24px;
        width: 96px;
        font-size: 24px;
    }
    &>div{
        display: flex;
    }
`