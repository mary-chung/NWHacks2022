import { useState } from 'react';
import matchData from '../data/matchData';

const imageFolderPath = process.env.PUBLIC_URL + '/assets/profile-photos/';

function CardInfo(name, type) {

    return (
        <div className="card-info-component">
            <div className="profile-pic">
                <img src={`${imageFolderPath}${matchData[0].name}.jpg`} alt={matchData[0].name} />
            </div>
            <div className="card-text-container">
                <div className="animal-name-age">
                    <h2>{matchData[0].name}<span className="age">{matchData[0].age} years</span></h2>
                </div>
                <div className="animal-type-location">
                    <p><span>{matchData[0].type}</span> | <span>{matchData[0].location}</span></p>
                <div className="card-info">
                    <div className="attributes sex"><p>{matchData[0].sex}</p></div>
                    <div className="attributes age-range"><p>{matchData[0].ageRange}</p></div>
                    <div className="attributes size"><p>{matchData[0].size}</p></div>
                    <div className="attributes breed"><p>{matchData[0].breed}</p></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfo;
