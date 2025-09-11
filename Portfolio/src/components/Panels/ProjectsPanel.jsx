import React, { useState } from 'react'
import ProjectIcon from '../ProjectIcon';

import FogOfWarProject from '../Projects/FogOfWarProject';
import Ready4PickupProject from '../Projects/Ready4PickupProject';
import NecropolisProject from '../Projects/NecropolisProject';
import VoxelTerrainProject from '../Projects/VoxelTerrainProject';

export default function ProjectsPanel({ activeProject, setActiveProject}){
    

    const mainPageStyle = {
        overflow: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '5rem',
        padding: '2rem',        
        width: '100%',
        
    }



    const renderContent = () => {
        switch (activeProject) {
        case 'fogofwar':
            return <FogOfWarProject onBack={() => setActiveProject('null')}/>;
        case 'ready4pickup':
            return <Ready4PickupProject onBack={() => setActiveProject('null')}/>;
        case 'necropolis':
            return <NecropolisProject onBack={() => setActiveProject('null')}/>;
        case 'voxelterrain':
            return <VoxelTerrainProject onBack={() => setActiveProject('null')}/>;
        default:
            return (
                <>
                    <div style={mainPageStyle}>
                        <ProjectIcon    ProjectTitle="Fog Of War - Feature Showcase" 
                                        iconPath="./projectRes/fogofwarRes/fogCover.PNG" 
                                        onSelect={() => setActiveProject('fogofwar')}/>

                        <ProjectIcon    ProjectTitle="Ready4Pickup - Game Jam" 
                                        iconPath="./projectRes/ready4pickupRes/Ready4PickupCover.png" 
                                        onSelect={() => setActiveProject('ready4pickup')}/>

                        <ProjectIcon    ProjectTitle="Voxel Terrain - Feature Showcase" 
                                        iconPath="./projectRes/voxelterrainRes/VoxCover.PNG" 
                                        onSelect={() => setActiveProject('voxelterrain')}/>  
                                                                              
                        <ProjectIcon    ProjectTitle="Necropolis - Game Jam" 
                                        iconPath="./projectRes/necropolisRes/NecropolisCover.PNG" 
                                        onSelect={() => setActiveProject('necropolis')}/>


                    </div>

                </>
            );

        }
    };



    return (
        <>
            <div>
                {renderContent()}
            </div>
        </>

    );
}