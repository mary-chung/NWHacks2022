import { Link } from "react-router-dom";
import Card from '../components/Card';
import ChangeForm from "../components/ChangeForm";
import { useEffect } from 'react';


const PageSwipeCard = () => {

    useEffect(() => {
		document.title = `MatchaPet - Swipe`;
	}, []);

    return (
        <main>
            <section className="page-swipe">
                <ChangeForm />
                <Link to="/swipe"><span className="material-icons cancel">cancel</span></Link>
                <Card />
                <Link to="/profile"><span className="material-icons yes">check_circle</span></Link>
            </section>
        </main>
    )
}

export default PageSwipeCard;
