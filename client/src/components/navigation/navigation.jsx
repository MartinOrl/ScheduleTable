import React, { useState } from 'react'

import { MasterContainer, ComponentContainer, PageLink, CollapseToggle, NavigationLinks, NavSlider, Settings, NavHead, StyledSettings, StyledHome, Background } from './navigationStyles'


import { useEffect } from 'react';
import { ToggleModal } from '../../redux/modalReducer/modalActions';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { SelectLanguage } from '../../redux/langReducer/langSelectors';



const Navigation = ({toggleModal, lang}) => {
    const [active, setActive] = useState('dashboard')
    const [collapsed, setCollapsed] = useState(true)
    const [position, setPosition] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        switch(active){
            case 'dashboard':
                setPosition(0);
                break;
            case 'settings': 
                setPosition(-1);
                break;
            default:
                break;
        }
    }, [active])

    let location = useLocation().pathname
    
    useEffect(() => {
        
        switch(location){
            case '/':
                setActive("dashboard");
                break;
            case '/settings':
                setActive("settings");
                break;
            default:
                break;
        }
        
    }, [])


    const langVar = {
        "schedule": {
            en: "Schedule",
            sk: "Rozvrh",
            ge: "Zeitplan",
            ru: "расписание",
            ua: "розклад"
        },
        "settings": {
            en: "Settings",
            sk: "Nastavenia",
            ge: "Einstellungen",
            ru: "настройки",
            ua: "налаштування"
        }
    }


    return (
        <MasterContainer  >
            <Background collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
            <ComponentContainer collapsed={collapsed}>
                
                <NavHead collapsed={collapsed}>
                    <h2>STU</h2>
                    <CollapseToggle collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </CollapseToggle>
                </NavHead>
                <NavigationLinks >
                    <NavSlider position={position} />
                    <div>
                        <PageLink collapsed={collapsed} active={active === "dashboard" ? 1 : 0} onClick={() => {setActive("dashboard"); setCollapsed(true); navigate("/")}} >
                            <StyledHome active={active === "dashboard" ? 1 : 0} />
                            <h2>{langVar.schedule[lang]}</h2>
                        </PageLink>
            

                    </div>
        
                    <Settings>
                        <span></span>
                        <PageLink type={'settings'} collapsed={collapsed} active={active === "settings" ? 1 : 0} onClick={() => {setActive("settings"); setCollapsed(true); navigate("/settings")}} >
                            <StyledSettings active={active === "settings" ? 1 : 0}  />
                            <h2>{langVar.settings[lang]}</h2>
                        </PageLink>
                    </Settings>
                </NavigationLinks>
                
            </ComponentContainer>

        </MasterContainer>

    )
}

const mapState = createStructuredSelector({
    lang: SelectLanguage
})

const mapDispatch = dispatch => ({
    toggleModal: data => dispatch(ToggleModal(data))
})

export default connect(mapState,mapDispatch)(Navigation)
