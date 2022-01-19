import React, { useState } from 'react'

import { MasterContainer, ComponentContainer, PageLink, CollapseToggle, NavigationLinks, NavSlider, Settings, NavHead, StyledSettings, StyledHome, Background } from './navigationStyles'


import { useEffect } from 'react';
import { ToggleModal } from '../../redux/modalReducer/modalActions';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';



const Navigation = ({toggleModal}) => {
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
                            <h2>Schedule</h2>
                        </PageLink>

                    </div>
        
                    <Settings>
                        <span></span>
                        <PageLink type={'settings'} collapsed={collapsed} active={active === "settings" ? 1 : 0} onClick={() => {setActive("settings"); setCollapsed(true); navigate("/settings")}} >
                            <StyledSettings active={active === "settings" ? 1 : 0}  />
                            <h2>Settings</h2>
                        </PageLink>
                    </Settings>
                </NavigationLinks>
                
            </ComponentContainer>

        </MasterContainer>

    )
}

const mapDispatch = dispatch => ({
    toggleModal: data => dispatch(ToggleModal(data))
})

export default connect(null,mapDispatch)(Navigation)
