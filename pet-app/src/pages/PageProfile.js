import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import { useEffect } from 'react';

const PageProfile = () => {

    useEffect(() => {
		document.title = `MatchaPet - Profile`;
	}, []);

    return (
        <main>
            <section className="page-profile">
                <Link to="/swipe"><span className="material-icons cancel">cancel</span></Link>
                <Profile />
                <Link to="/email"><span className="material-icons email">mail</span></Link>
            </section>
        </main>
    )
}

export default PageProfile;
