import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Damon Salvatore',
            url: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F09%2Fvd315c_0326b-2000.jpg",
        },
        {
            name: 'Marco Andre Da Silva',
            url: "https://i.pinimg.com/originals/4f/fa/39/4ffa39e2c7f101f6ce62188a63c5f931.jpg",
        },
        {
            name: 'Selena Gomez',
            url: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/selena_gomez_shares_hilarious_childhood_video_of_herself_.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return(
        <div className="tindercards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key = {person.name}
                        preventSwipe = {["up", "down"]}
                        onswipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        
                        <div 
                            style = {{ backgroundImage: `url(${person.url})` }}
                            className= "card">
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
    </div>
    );
}

export default TinderCards
