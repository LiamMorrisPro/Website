import './ProjectStyle.css'
import ClickIcon from "../ClickIcon";

export default function NecropolisProject({onBack}){





    
    return (
    <>
        <div className="articleContainer">
            <div className="backButton">
                <ClickIcon iconPath="./icons/X.png" onSelect={() => onBack()}></ClickIcon>
            </div>
            <div className="title">
                <h1>Necropolis</h1>

                <div className="subTitle">
                    <h3 style={{ backgroundColor:'rgb(190, 205, 255)', color: 'rgb(86, 77, 247)'}}>Godot</h3>
                    <h3 style={{ backgroundColor:'rgb(188, 252, 252)', color: 'rgb(49, 137, 155)'}}>GDScript</h3>
                </div>
            </div>    
                    
            
            <div className='articleBody'>
                <div style ={{display: 'grid', gridTemplateColumns: '1fr 0.8fr', width: '100%'}}>
                    <div className='textBox'>
                        <h1>Game Jam</h1>
                        <p>this was my second game jam ever, (we don't talk about the first one) but this one I was pretty happy with. Also I won the jam 
                            <span style={{fontSize:'12px'}}> by default</span> .</p>
                        <p>It was made for a local game jam, where the theme was build it and they will come. 
                            So i went with a city builder, where you play as a skeleton trying to take over the surface, you need to construct houses to attract your skeleton minions.</p>
                        <p>I mixed up the gameplay by having a day timer, and at theend of every day a event would occur that would either help the player, or would hurt the player if their military stat was not high enough.</p>
                        <p>This was a solo project so i did make all of the art myself which was fun in it's own way.</p>
                    </div>   
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <img className='boxImage' src='./projectRes/necropolisRes/NecropolisCover.PNG' style={{marginTop: '1rem'}}></img> 
                        <a href='https://strigzzz.itch.io/necropolis' target='_blank'>
                            <h1>Try it out on Itch.io</h1>
                        </a>
                    </div>
                                
                </div>

            </div>        
        </div>
    </>

);

}
