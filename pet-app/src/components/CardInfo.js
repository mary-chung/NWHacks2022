const imageFolderPath = process.env.PUBLIC_URL + '/assets/profile-photos/';

const CardInfo = () =>  {
    return (
        <div class="card-info-component">
            <div className="profile-pic">
                <img src={`${imageFolderPath}Sugar.jpg`} alt="Sugar" />
            </div>
            <div className="card-text-container">
                <div className="animal-name-age">
                    <h2>Sugar<span class="age">7 years</span></h2>
                </div>
                <div className="animal-type-location">
                    <p><span>Cat</span> | <span>Kamloops, BC</span></p>
                <div className="card-info">
                    <div className="attributes sex"><p>Male</p></div>
                    <div className="attributes age-range"><p>Adult</p></div>
                    <div className="attributes size"><p>Large</p></div>
                    <div className="attributes breed"><p>Domestic Short Hair</p></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfo;
