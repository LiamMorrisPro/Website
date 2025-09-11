import './ProjectStyle.css'
import ClickIcon from "../ClickIcon";

export default function VoxelTerrainProject({onBack}){


    
    return (
    <>
        <div className="articleContainer">
            <div className="backButton">
                <ClickIcon iconPath="./icons/X.png" onSelect={() => onBack()}></ClickIcon>
            </div>
            <div className="title">
                <h1>Voxel terrain</h1>

                <div className="subTitle">
                    <h3 style={{ backgroundColor:'rgb(221, 159, 255)', color: 'rgb(138, 48, 217)'}}>Unreal Engine</h3>
                    <h3 style={{ backgroundColor:'rgb(188, 252, 200)', color: 'rgb(49, 155, 68)'}}>C++</h3>
                </div>
            </div>     
            <div className='articleBody'>
                <div style ={{display: 'grid', gridTemplateColumns: '1fr 0.90fr', width: '100%'}}>
                    <div className='textBox'>
                        <h2>About Voxel Terrain</h2>
                        <p>I can very comfortably say I've played a lot of minecraft in my life. 
                            I needed some practing coding in C++ in Unreal Engine, so I thoght it'd be the perfect chance to explore the concept.
                        </p>
                        <p>
                            Some basic information first: Voxel stand for volumetric pixel, essentialy a pixel within a 3D space. These are a very useful way 
                            to create terrain through randomly generated noise.
                        </p>
                        <div >
                            <img className='boxImage'src="./projectRes/voxelterrainRes/perlin_greyscale.png" alt="" style={{display: 'inline-block', float: 'left', width:"50%", margin:'1rem'}}/>
                            <div className='textBox'>
                                <p>For some simple surface terrain, such as hills and valleys we can use this noise as a heightmap. Each pixel representing a coordinate in our world.</p>
                                <p>We can find the height of each coordinate by setting the value of white as 1 and black as -1, and using that we get a sense of height and depth.</p>
                                <p>You can combine and layer this very simple method using 3d noise, color maps and more, as rules to create more complex and varied terrain. </p>
                            </div>
                        </div>
                        <p>There are some very good resources out there with much more information. This video by 
                            <a href='https://www.youtube.com/watch?v=CSa5O6knuwI&t=168s' target='_blank'> Henrik Kniberg </a>
                             goes into some pretty good detail. I think he worked on Minecraft so he definetly knows a thing or two.</p>
                        <p>A final note is that all of the terrain data is not stored, but is instead generated deterministically. So it will always be the same no matter how many times it's generated.
                        <p>The only information we need to store is the information of modifications the player has made. So voxels/blocks added or removed from the terrain.</p>
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div className='textBox' style={{marginBottom: 0}}>
                            <div>
                                <h2>Chunks</h2>
                                <p>My implementation wont be going too in-depth, just doing a voxel heightmap to start.</p>
                                <p>The really cruicial aspect of this system is that it be fast. If the player is moving around you'll need to constantly 
                                    generate meshes for new terrain as they go.</p>
                                <p>Generating a mesh for each voxel individually is not very efficient, so instead we create chunks of certain dimensions. 
                                    That way when the player moves around we only generate meshes once every 32 blocks they move for instance, rather than every block that they move.</p>
                                <p>This will also come in handy for modifying the terrain, as we will need to re-mesh the terrain each time, instead we can just 
                                    re-mesh the chunk with the modification.
                                </p>
                            </div>

                        </div>
                        <div className='textBox'>
                            <div>
                                <h2>Efficiency</h2>
                                <p>The player will only be able to see the sides of blocks that are next to an empty space. So to not waste resources rendering 
                                    the sides the player won't see, we will only generate the quad of a side facing empty space.
                                </p>
                                <img className='boxImage' src='./projectRes/voxelterrainRes/blockDemo.PNG'></img>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='textBox'>
                    <h2>Greedy Meshing</h2>
                    <p>This is a optimization that I have done, but it's a pretty technical explanation, so i'll go over the basics and if'd you'd like to find more 
                        there's an in depth talk you can find 
                        <a href='https://www.youtube.com/watch?v=4xs66m1Of4A' target='_blank'> Here </a>
                        that goes further into the theory.
                    </p>
                    <p>One of the more costly operations in voxel terrain generation is the generation of meshes and collision data. We can further optimize by using a greedy meshing algorithm, 
                        combining certain faces thus requiring less operations.</p>
                    <img className='boxImage' src='./projectRes/voxelterrainRes/greedyMeshex.PNG' style={{width: '30%', float: 'left', margin: '1rem'}}></img>
                    <p>For instance combining two blocks into one surface we can reduce the number of triangles we need to construct from 4 to 2, but this only get's more efficient 
                        the larger of a flat surface there is. If it were 3 blocks the number of operations would be reduced from 6 to 2.
                    </p>
                    <p>In the best case scenario, a flat rectangle grid of blocks, it always reduces the number of operations to 2. 
                        This means this method is basically a required optimization (in my opinion anyways) especially if you also need to generate collision data along side the mesh data. though it does come with some additional challenges.</p>
                    <p>Applying textures to surfaces was easy before, you always knew what type of block a quad was attached to and so you only needed to apply the appropriate texture to the quad's UV,
                         but it will require a little more work on your end if you are using greedy meshing.</p>
                </div>
            </div>       
        </div>
    </>

);

}
