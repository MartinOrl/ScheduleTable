import styled from 'styled-components'

export const Componentcontainer = styled.div`

    color: #fff;
    width: ${props => props.width*120 + "px"};
    margin-right: 16px;
    user-select: none;
    div{
        padding: 8px 16px 16px;
        box-sizing: border-box;
        border: 1px solid #333;
        border-radius: 8px;
        color: ${props => props.active ? '#000' : '#fff'};
        background: ${props => props.active ? '#fefefe' : '#0a0a0a'};
        transition: 250ms ease-in-out;
        cursor: pointer;
       
        h1{
            margin: 4px 0 12px;
            font-size: 20px;
        }
        p{
            margin: 0;
            font-size: 16px;
            opacity: ${props => props.active ? '0.75' : '0.5'};

        }
    }
    &>p{
        opacity: 0.3;
        margin: 0 0 8px 8px;
    }
    &:hover{
        div{
            border: 1px solid #5a5a5a;
        }
    }
    
`