import { Link } from "react-router-dom";
import matchData from "../data/matchData";

const ProfileInfo = () =>  {

    return (
        <div className="profile-info-component">
            <h2>Get to know {matchData[0].name}!</h2>
            <p className="description">{matchData[0].description}</p>
            <ul className="profile-list">
                <li>Fur Length? {matchData[0].furlength} </li>
                <li>Okay with kids? {matchData[0].kidsOK}</li>
                <li>Indoors only? {matchData[0].indoorsOnly}</li>
                <li>Okay in apartments/condos? {matchData[0].apartmentOK}</li>
                <li>House trained? {matchData[0].houseTrained}</li>
                <li>Okay with cats? {matchData[0].catsOK}</li>
                <li>Okay with dogs? {matchData[0].dogsOK}</li>
                <li>Bonded with another animal? {matchData[0].bonded}</li>
                <li>Special needs? {matchData[0].specialNeeds}</li>
            </ul>
            <p>Find out more about me <Link to="/">here!</Link></p>
        </div>
    )
}

export default ProfileInfo;
