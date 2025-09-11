import {useState} from 'react';
import { Howl, Howler } from 'howler';


export default function ProjectIcon({iconPath, ProjectTitle, onSelect}){
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

 const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isClicked ? 'scale(0.85)': isHovered ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 50ms ease-in-out',
        cursor: 'pointer',
        paddingBottom: '1rem',
        paddingTop: '3rem',
      };

    const iconStyle = {
        width: '100%',
        borderRadius: '3vh',
        objectFit: 'cover',
    }
    const sound = new Howl({
        src:['./sounds/click.mp3'],
        format: ['mp3'],
        volume: '1.0',
    });

    const handleClick = () => {
        setIsClicked(true);
        sound.play();

        setTimeout(() => setIsClicked(false), 100);
        onSelect();
    }

    return (
        <>
            <div style={containerStyle}>
                <img
                src={iconPath}
                alt="Web Icon"
                style={iconStyle}
                draggable={false}
                onClick={handleClick}  // Added the click handler
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

                />
                <p style={{textAlign: 'center', fontSize: '25px', margin: '0', color: 'white', fontWeight: 'bold'}}>
                    {ProjectTitle}
                </p>

            </div>
        </>

      );    

}