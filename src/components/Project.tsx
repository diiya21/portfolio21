import React from "react";
import mock01 from '../assets/images/mock01.png'; // GoodEats
import mock02 from '../assets/images/mock02.png'; // JustPark
import mock03 from '../assets/images/mock03.png'; // Trello Clone
import mock04 from '../assets/images/mock04.png'; // UI/UX Case Study
import '../assets/styles/Project.scss';

function Project() {
    const imageStyle: React.CSSProperties = {
        height: '350px',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '8px'
    };

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <img src={mock04} style={imageStyle} className="zoom" alt="UI/UX Showcase" />
                    <h2>PicNyx</h2>
                    <p>
                        UI/UX Design Showcase. A polished and professional UI/UX case study demonstrating user research, wireframes, prototypes, and high-fidelity designs. The project emphasizes accessibility, responsive design, and user-centric thinking—delivered as a sleek Figma and PDF combo.
                    </p>
                </div>

                <div className="project">
                    <img src={mock02} style={imageStyle} className="zoom" alt="JustPark App" />
                    <h2>JustPark</h2>
                    <p>
                        An AI-based parking app built using React. As the frontend developer, I crafted a responsive UI and implemented logic to display parking availability using token-based access and WebSocket-based communication with a Firebase backend.
                    </p>
                </div>

                <div className="project">
                    <img src={mock01} style={imageStyle} className="zoom" alt="GoodEats App" />
                    <h2>GoodEats</h2>
                    <p>
                        A recipe-sharing Android app built with Kotlin and Jetpack Compose. Includes Firebase Authentication, Firestore, and Spoonacular API for nutritional data. Features dynamic recipe search, rating and review system and a clean, interactive user experience.
                    </p>
                </div>

                <div className="project">
                    <img src={mock03} style={imageStyle} className="zoom" alt="Trello Clone" />
                    <h2>Work Simple</h2>
                    <p>
                        A Trello clone built in React. Implemented draggable task cards, column sorting, and styled-components for a fluid and intuitive UI. This project mimics core Trello interactions with a clean developer-friendly codebase.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
