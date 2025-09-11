import React, { useState } from 'react'
import ClickIcon from "./ClickIcon"

import HomePanel from './Panels/HomePanel';
import ProjectsPanel from './Panels/ProjectsPanel';
import GalleryPanel from './Panels/GalleryPanel';
import AboutPanel from './Panels/AboutPanel';


export default function DesktopGrid(){
    const [activePanel, setActivePanel] = useState(null);
    const [activeProject, setActiveProject] = useState(null);

    const handlePanelSelect = (panelName) => {
        setActivePanel(panelName);
        if(panelName === 'projects'){
            setActiveProject(null);
        }
    }



    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: '13vh 1fr',
        height: '98vh',
        margin: '0'
    };

    const sidebarStyle= {
        flex: 1,
        backgroundColor: 'none',
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateRows: 'repeat(auto-fit, minmax(13vh, 13vh))',
        gridAutoColumns: 'minmax(13vh, 13vh)',
        gap: '0rem',
        padding: '0rem',
    };
    

    const mainStyle = {
        flex: 1,
        backgroundColor:'var(--color-primary)',
        borderRadius: '1vh',
        overflow: 'auto',
        
    };

    // You can use a switch or simple if-else chain here
    const renderContent = () => {
        switch (activePanel) {
        case 'home':
            return <ProjectsPanel activeProject={activeProject} setActiveProject={setActiveProject}/>;     
        case 'projects':
            return <ProjectsPanel activeProject={activeProject} setActiveProject={setActiveProject}/>;
        case 'gallery':
            return <GalleryPanel/>;
        case 'about':
            return <AboutPanel/>;
        default:
            return <ProjectsPanel activeProject={activeProject} setActiveProject={setActiveProject}/>;
        }
    };

    return (
        <>
        <div style={containerStyle}>
            {/* Left side grid */}
            <div style={sidebarStyle}>
            <ClickIcon iconPath="./icon.PNG" onSelect={() => setActivePanel('home')}></ClickIcon>
            <ClickIcon iconPath="./icons/folder-w.png" onSelect={() => handlePanelSelect('projects')}></ClickIcon>
            <ClickIcon iconPath="./icons/gallery-w.png" onSelect={() => handlePanelSelect('gallery')}></ClickIcon>
            <ClickIcon iconPath="./icons/id-card-w.png" onSelect={() => handlePanelSelect('about')}></ClickIcon>
            {/* Add more grid items as needed */}
            </div>
            <div style={mainStyle}>
                {renderContent()}
            </div>
        </div>      
        </>

    );
}