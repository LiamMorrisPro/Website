import "./AboutStyle.css"
import ClickIcon from "../ClickIcon";


export default function AboutPanel(){
    return (
        <>

            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>

                {/* About Text Section */}
                <div style={{display: 'flex', flexDirection: 'column', maxWidth:'65%'}}>
                    <div className="textBox" style={{marginBottom: 0}}>
                        <h1>Liam Morris</h1>
                        <h2>Programmer / Technical Artist</h2>
                        <p>Hello, I'm Liam, a gameplay programmer / technical artist for video games.</p>
                        <p>I've been working on many projects to create interesting visual effects and optimizing them for games.
                        I've worked on a handful of game jams as the main programmer, even taking the position of team lead when given the opportunity.</p>
                    </div>    
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                        <div className="textBox" style={{marginBottom: 0}}>
                            <h2>Language Proficiency</h2>
                            <p>I have native fluency in:</p>
                            <p>- English</p>
                            <p>- French</p>

                        </div>      
                        <div className="textBox" style={{marginBottom: 0}}>
                            <h2>Interests</h2>
                            <p>- Environment/Character Art</p>
                            <p>- RPG/Adventure games</p>
                            <p>- Shaders</p>

                        </div>                               
                    </div>
                    <div className="textBox" style={{marginBottom: 0}}>
                        <h2>Education</h2>
                        <p style={{padding: 0, margin: 0, fontSize: '30px'}}>Bachelors of Science in Computer Science</p>
                        <p style={{padding: 0, margin: 0, fontSize: '25px'}}>Bishops University | graduated 2024</p>
                        <br></br>
                        <p style={{padding: 0, margin: 0, fontSize: '30px'}}>DEC in Social Science With Math</p>
                        <p style={{padding: 0, margin: 0, fontSize: '25px'}}>John Abbott College | graduated 2020</p>
                    </div>   
              
                </div>

                {/* Profile Box */}
                <div className="textBox" style={{paddingLeft: 0}}>
                    <div style={{display: 'grid', gridTemplateColumns: '0.3fr 1fr', height:'80vh'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <a href="mailto:LiamMorrisPro@gmail.com" target="_blank"><ClickIcon iconPath={"./icons/emailIcon.png"}></ClickIcon></a>
                            <a href="https://www.linkedin.com/in/liammorrispro" target="_blank"><ClickIcon iconPath={"./icons/linkedin.png"}></ClickIcon></a>
                            <a href="https://bsky.app/profile/strigzzz.bsky.social" target="_blank"><ClickIcon iconPath={"./icons/bluesky.png"}></ClickIcon></a>
                        </div>
                        <div style={{display:"flex", flexDirection:'column', justifyItems:'center'}}>
                            <img className="boxImage" src="./ProfilePicEdit.JPG" alt="" style={{width:'100%', maxHeight: '70vh'}}/>
                            <a href="./Liam-Gamedev-Resume-En+Fr.pdf" target="_blank">
                                <div style={{display: 'grid', gridTemplateColumns: '0.20fr 1fr', backgroundColor: 'var(--color-primary)', marginTop: '1rem', borderRadius: '1rem', alignItems: 'center'}}>

                                    <ClickIcon iconPath={"./icons/PDFIcon.png"}></ClickIcon>
                                    <h1>Resume</h1>
                                </div>                        
                            </a>
                        </div>
                        
                    </div>

                   
                </div>
            </div>

        </>

    );
}