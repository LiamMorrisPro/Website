import './ProjectStyle.css'
import ClickIcon from "../ClickIcon";

export default function Ready4pickupProject({onBack}){




    return (
    <>
        <div className="articleContainer">
            <div className="backButton">
                <ClickIcon iconPath="./icons/X.png" onSelect={() => onBack()}></ClickIcon>
                
            </div>
            <div className="title">
                <h1>Ready4Pickup!</h1>

                <div className="subTitle">
                    <h3 style={{ backgroundColor:'rgb(190, 205, 255)', color: 'rgb(86, 77, 247)'}}>Godot</h3>
                    <h3 style={{ backgroundColor:'rgb(188, 252, 252)', color: 'rgb(49, 137, 155)'}}>GDScript</h3>
                </div>
            </div>

            <div className='articleBody'>
                <div style ={{display: 'grid', gridTemplateColumns: '1fr 0.6fr', width: '100%'}}>
                    <div className='textBox'>
                        <img className='boxImage' src='./projectRes/ready4pickupRes/Ready4PickupCover.png' style={{float:'right', width:'30%', marginTop: '0', imageRendering:'smooth'}}></img>
                        <h2>Game jam</h2>
                        <p>Ready4Pickup is a game I and my teamamtes completed as a part of the Godot Wild Jam, we even placed as the 3rd most popular entry out of over 200 entries. </p>
                        <p>I was fortunate enough to be given a chance at the role of team lead and main programmer, and the rest of my team, TappyOwO our artist, and Dixasterous our other programmer,
                            did fantastically in their roles.</p>
                        <p>The theme was controlled chaos so the game itself is a physics based platformer where you play as a delivery girl and you need to throw, kick and carry a box all the way to the mailbox at the end of the level.</p>
                    </div> 
                     <div className='textBox'>
                        <a href='https://strigzzz.itch.io/ready-4-pickup' target='_blank'>
                        <h1>Try it out on Itch.io</h1>
                        </a>
                    </div>       
                </div>
                <div style ={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
                    <div className='textBox'>
                        <h2>Leading A Team</h2>
                        <p>
                            This was my first gamedev project in collaboration with others, so it also being the first time I had the position of leading the team meant this was a lot of new experiences.
                        </p>
                        <p>Now i hear some people don't like taking the lead role, I had a good with it though. My teammates were very cooperative which definetly helped quite a bit. </p>
                        <p>The toughest challenge I personally had was with delagating tasks to the other programmer. I knew what I wanted to make, and how I wanted to make it, 
                            putting trust in someone else to handle it instead was something i had to get used to.</p>
                    </div>
                    
                    <div className='textBox'>
                        <h2>Some challenges</h2>
                        <p>We got a lot of feedback, most of which I think is spot on. Our greatest issue was in accesibility. </p>
                        <p>We did not communicate the control scheme to the player, and while the controls were simple enough
                             that it seems to not have posed too much of an issue, opening the pause menu was not in any way explained, and in a game where getting softlocked is very possible, 
                             that is a significant issue.
                        </p>
                        <p>Additionally the third level was built with a specific trick in mind, required to progress. It involves jumping off the box and grabbing it at the same time 
                            so that you can carry it with you onto a platform. Not too difficult but not very fair to expect the players to figure it out on their own.
                        </p>
                        <p>We did lean into the difficulty and frustration, ending up with something like a rage game, but unfair difficulty is different and should be avoided.</p>
                    </div>
                </div>
            </div>
        </div>
    </>

);

}
