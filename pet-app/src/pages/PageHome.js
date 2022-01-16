import { Link } from 'react-router-dom';

const PageHome = () =>{
    return (
        <main>
            <section className="page-home">
                <img class="logo" src="../assets/graphics/logo.png" alt="Heart Paw"/>
                <div className="instructions">
                    <h2>Find your paw-mate!</h2>
                    <ol>
                        <li>Create your profile</li>
                        <li>Swipe to match</li>
                        <li>Connect with the shelter</li>
                    </ol>
                </div>
                <Link class="home" to="form">Let's match!</Link>
            </section>
        </main>
    );
}

export default PageHome;