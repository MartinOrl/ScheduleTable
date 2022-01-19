import React, { useState } from 'react'

import { MasterContainer, ComponentContainer, PageLink, CollapseToggle, NavigationLinks, NavSlider, Settings, NavHead, StyledSettings, StyledHome, Background } from './navigationStyles'


import { useEffect } from 'react';



const Navigation = () => {
    const [active, setActive] = useState('dashboard')
    const [collapsed, setCollapsed] = useState(false)
    const [position, setPosition] = useState(0)

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
                        <PageLink collapsed={collapsed} active={active === "dashboard" ? 1 : 0} onClick={() => {setActive("dashboard"); setCollapsed(true)}} >
                            <StyledHome active={active === "dashboard" ? 1 : 0} />
                            <h2>Schedule</h2>
                        </PageLink>

                    </div>
        
                    <Settings>
                        <span></span>
                        <PageLink type={'settings'} collapsed={collapsed} active={active === "settings" ? 1 : 0} onClick={() => {setActive("settings"); setCollapsed(true)}} >
                            <StyledSettings active={active === "settings" ? 1 : 0} />
                            <h2>Settings</h2>
                        </PageLink>
                    </Settings>
                </NavigationLinks>
                
            </ComponentContainer>

        </MasterContainer>

    )
}

export default Navigation
