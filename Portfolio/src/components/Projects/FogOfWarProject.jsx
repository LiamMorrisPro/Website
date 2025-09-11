import './ProjectStyle.css'
import ClickIcon from "../ClickIcon";

export default function FogOfWarProject({onBack}){



    return (
    <>
        <div className="articleContainer">
            <div className="backButton">
                <ClickIcon iconPath="./icons/X.png" onSelect={() => onBack()}></ClickIcon>
            </div>

            <div className="title">
                <h1>Fog of War</h1>

                <div className="subTitle">
                    <h3 style={{ backgroundColor:'rgb(190, 205, 255)', color: 'rgb(86, 77, 247)'}}>Godot</h3>
                    <h3 style={{ backgroundColor:'rgb(191, 252, 188)', color: 'rgb(49, 155, 74)'}}>GLSL</h3>
                </div>
            </div>

            <div className= "articleBody">
                <div style ={{display: 'grid', gridTemplateColumns: '0.5fr 1fr', width: '100%'}}>
                    <div className='textBox'>
                        <h2>About Fog of War</h2>
                        <p> I found fog of war an interesting topic to dive into. It creates a sense of mystery around every corner and keeps you on your toes, 
                            which works especially well in multiplayer games.
                        </p>
                        <p>Developing my own fog of war system in Godot was something i spent a couple weeks on, as I came to various solutions each with
                             upsides and downsides.</p>                        
                    </div>

                    <div className='textBox'>
                        <h2>Grid Based vs. Collision Based</h2>
                        <p>I came up with two implementations, both of which serve different use cases.</p>
                        <div style ={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                            <div style = {{padding: '1rem',}}>
                                <p>The first was the grid based system as you would see in real time strategy games and MOBAs.</p>
                                <img className='boxImage' src = "./projectRes/fogofwarRes/fog1.PNG"></img>
                                <p>It scales increadibly well, allowing for hundreds or even thousands of vision generating units at any one time,
                                     however in practice it's not very accurate, sometimes letting the player see around corners they otherwise shouldn't, and 
                                      it's very blocky and most games using this need to pair it with
                                    a variety of post processing effects to smooth it out.
                                </p>
                            </div>
                            <div style = {{padding: '1rem',}}>
                                <p>The Second was a more accurate and higher fidelity technique you may see occasionally in roguelikes and top down shooters.</p>
                                <img className='boxImage' src = "./projectRes/fogofwarRes/Fog2.PNG"></img>
                                <p>While this does create a much higher fidelity of effect, it scales much less well, 
                                    allowing for less vision generating units at any one time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style ={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
                    <div className='textBox'>
                        <h2>Grid Based - How It Works - Algorithms</h2>
                        <p>The grid based system, as i've made it, is based on two algorithms.</p>

                        <div style ={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
                            <p>
                                The midpoint circle algorithm - lets you calculate all the points on a grid in a circle around a coordinate.
                            </p> 
                            <img className='boxImage' src='./projectRes/fogofwarRes/MidpointCircle.PNG'></img>                           
                        </div>
                        <div style ={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
                            <p>
                                And Bresenhams line algorithm - lets you find all points on grid in a line from one coordinate to another.
                            </p>
                            <img className='boxImage' src='./projectRes/fogofwarRes/Bresenhams line.PNG'></img>                           
                        </div>


                        <p>Together these can be used to calculate every point within a units vision radius, and because bresenhams algorithm builds a line one 
                            point at a time, we can fake some collision data and create a convincing line of sight effect.
                        </p>

                    </div>
                    <div className='textBox'>
                        <h2>Collision Based - How It Works</h2>
                        <p>This is a much simpler approach. The collision based system uses many raycasts sent out form the player. Each raycasts end point is then used to generate a mesh in real-time.</p>
                        <p>The mesh is then used as a mask for a dark semi-transparent texture over the viewport, which gives us a sense of vision!</p>
                        <img className='boxImage' src='./projectRes/fogofwarRes/collisionbasedFog (2).PNG'></img>        
                        <p>The weakness of the collision based system is it's reliance on collision data. You cannot pass the raycast calculations to the GPU (I had a tough time anyway), 
                            so you cannot calculate vision in parallel, so every additional unit calculating vision will increase the performance cost.
                        </p>

                    </div>
                </div>
                <div className='textBox'>
                    <h2>Grid Based - How It Works - Obstacles</h2>
                    <p>The fog effect is calculated as a 2D texture that encompases the playable area, each square on the grid being represented by a pixel on the texture.
                        To fake some collision with our line alogorithm we can create a seperate texture containing our areas that should occlude player vision. 
                        The vision is calculated so it can go from black to red, but not from red to black.
                        To do so I came up with a solution Involving creating a orthographic camera of the size of my texture, and capturing a discrete mesh underneath my obastacles. 
                        This allowed me to recalculate the occluded area by re-capturing the texture whenever i needed to. 
                    </p>
                    <div style ={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: '100%'}}>
                        <img className='boxImage'  src='./projectRes/fogofwarRes/orthoCam.PNG'></img>
                        <img className='boxImage'  src='./projectRes/fogofwarRes/boxOccluder.PNG'></img>
                        <img className='boxImage'  src='./projectRes/fogofwarRes/Occlusionmap.PNG'></img>
                    </div>
                    
                </div>
                <div className='textBox'>
                    <h2>Grid Based - How It Works - Compute Shader</h2>
                    <div style ={{display: 'grid', gridTemplateColumns: '1fr 0.5fr', width: '100%'}}>
                        <div>
                            <p>Moving all of this logic to the GPU is what really let's this technique shine, as it allows all units to calculate their vision at the same time. 
                                To go into a bit of detail on how the GPU is structured, a GPU has worker groups which contain a cluster of invocations that do the work.

                            </p>
                            <p>How i seperated the task between worker groups and invocations is by having one worker group handle one unit, and have 8 invocations within that group each calculate one octant
                                 of the circle of vision</p>
                            <p>This isn't actually the most efficient method, you could allocate each line of vision to an invocation on its own by defining
                                 a larger worker group and maybe even dynamically allocating the work across all invocations. 
                                 I just thought having one invocation for each octant felt like a clean solution.</p>
                        </div>
                        <div>
                            <img className='boxImage'  src='./projectRes/fogofwarRes/fogWorkGroup.png'></img>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </>

);

}

