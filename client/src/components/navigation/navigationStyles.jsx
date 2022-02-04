import styled, { css } from 'styled-components'
import {ReactComponent as SettingsLogo} from '../../assets/settings.svg'
import {ReactComponent as HomeLogo} from '../../assets/home.svg'

export const MasterContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    @media screen and (max-width: 768px){
        position: fixed;
        width: 100vw;
        z-index: 34;
        top: unset;
        bottom: 0;
        left: 0;
        height: 74px;
        min-height: 74px;
    }

`

export const ComponentContainer = styled.div`
    background: #f1f1f1;
    width: ${props => props.collapsed ? '74px' : '280px'};
    overflow-x: hidden;
    transition: 250ms ease-in-out;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 200;
    padding-bottom: 16px;
    box-sizing: border-box;
    @media screen and (max-width: 768px){
        height: 58px;
        width: 100%;
        top: unset;
        left: 0;
        bottom: 0;
        min-height: unset;
        padding-bottom: 0;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.65);
    z-index: ${props => props.collapsed ? -5 : 18};
    transition: 250ms ease-in-out;
    opacity: ${props => props.collapsed ? 0 : 1};
    @media screen and (max-width: 768px){
        display: none;
    }

`

export const NavHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    box-sizing: border-box;
    width: 100%;
    h2{
        color: #000;
        font-size: 24px;
        margin: 0;
        max-width: ${props => props.collapsed ? '0' : '96px' };
        overflow-x: hidden;
        transition: 250ms ease-in-out;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavSlider = styled.span`
    height: 60px;
    width: 4px;
    border-radius: 8px;
    background: #151515;
    display: block;
    position: absolute;
    left: 0px;
    top: ${props => props.position >= 0 ?  props.position*56 + "px" : '92.6%'};
    transition: 250ms ease-in-out;
    @media screen and (max-width: 768px){
        top: 0;
        width: 72px;
        height: 4px;
        left: ${props => props.position >= 0 ? "31.85%" : "50%"};
    }
`

export const NavigationLinks = styled.div`
    position: relative;
    flex-grow: 2;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media screen and (max-width: 768px){
        justify-content: center;
        flex-direction: row;
    }

`


export const PageLink = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 0 16px 24px;
    transition: 300ms ease-in-out;
    width: 280px;
    background: ${props => props.active ? '#fafafa' : 'transparent'};
    cursor: pointer;

    h2{
        font-weight: 600;
        margin: 0;
        font-size: 20px;
        max-width: ${props => props.collapsed ? '0' : '144px' };
        overflow-x: hidden;
        transition: 250ms ease-in-out;
        color: ${props => props.active ? '#000' : '#a7a7a7'};
    }
    svg{
        width: 26px;
        height: 26px;
        margin-right: 16px;
    }

    @media screen and (max-width: 768px){
        width: 48px;
        h2{
            display: none;
        }
    }
`

export const StyledSettings = styled(SettingsLogo)`
    path{
        fill: ${props => props.active? '#000' : '#a7a7a7'};
        transition: 250ms ease-in-out;
    }
`

export const StyledHome = styled(HomeLogo)`
    path{
        stroke: ${props => props.active ? '#000' : '#a7a7a7'};
        transition: 250ms ease-in-out;
    }
`


export const Settings = styled.div`
    &>span{
        width: 80%;
        background: #ccc;
        border-radius: 8px;
        height: 2px;
        display: block;
        margin: 0 auto 16px;
        @media screen and (max-width: 768px){
            display: none;
        }
    }
    
`

export const CollapseToggle = styled.div`
    width: 24px;
    height: 24px;
    
    cursor: pointer;
    overflow: hidden;
    position: relative;
    margin-right: ${props => props.collapsed ? '0' : '8px'};
    transition: 250ms ease-in-out;
    &>span{
        background: #000;
        height: 3px;
        width: 100%;
        display: block;
        left: 0;
        border-radius: 24px;
        overflow: hidden;
        position: absolute;
        transform-origin: center;
        transition: 250ms ease-in-out;
    }
    &>span:nth-of-type(1){
        top: ${props => !props.collapsed ? '10px' : '0px'};
        transform: ${props => !props.collapsed ? 'rotate(45deg)' : ''};
    }
    &>span:nth-of-type(2){
        top: ${props => !props.collapsed ? '10px' : '8px'};
        transform: ${props => !props.collapsed ? 'rotate(-45deg)' : ''};
    }
    &>span:nth-of-type(3){
        top: ${props => !props.collapsed ? '48px' : '16px'}
    }

`
