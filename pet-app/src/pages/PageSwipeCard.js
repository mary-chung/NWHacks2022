import Card from '../components/Card';

const PageSwipeCard = () => {
    return (
        <main>
            <section className="page-swipe">
                <span className="material-icons cancel">cancel</span>
                <Card />
                <span className="material-icons yes">check_circle</span>
            </section>
        </main>
    )
}

export default PageSwipeCard;
