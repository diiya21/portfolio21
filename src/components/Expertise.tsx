import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faFigma } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Material UI",
    "Bootstrap",
    "Tailwind",
    "Firebase",
    "Web Sockets",
    "Github"
];

const labelsSecond = [
    "Figma",
    "User Stories",
    "User Flows",
    "Wireframes",
    "Hi-Fi Prototypes",
    "Personas",
    "Storyboards",
    "Design Systems",
];

const labelsThird = [
    "Firebase Auth",
    "Firebase Firestore",
    "Firebase Storage",
    "Cloud Functions",
    "AWS EC2",
    "S3",
    "SNS"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>
                    I specialize in building modern, responsive UIs using React and Jetpack Compose. 
                    From dynamic state management to reusable component libraries, I bring designs to life with clean, scalable code.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI/UX & Product Design</h3>
                    <p>
                    Design is where my heart’s at. I craft intuitive interfaces using tools like Figma, from early wireframes to polished high-fidelity prototypes. 
                    I’ve led end-to-end UX flows—personas, user journeys, storyboarding—you name it.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Mobile & Firebase Integration</h3>
                    <p>
                    With Firebase at my fingertips, I build powerful backend-integrated mobile and web apps. 
                    Whether it's authentication, Firestore DBs, or storage buckets, I make things talk to each other and behave.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;