import matchData from "../data/matchData";

const Match = () =>  {
    return (
        <div className="match-info-component">
                <p>You matched with:</p>
                <h2>{matchData[0].name}</h2>
                <p>Introduce yourself to a paw-some new friend!</p>
              
        </div>
    )
}

export default Match;