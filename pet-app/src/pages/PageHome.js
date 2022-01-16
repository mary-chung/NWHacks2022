import { Link } from 'react-router-dom';

const PageHome = () =>{
    return (
        <main>
            <section className="page-home">
                <img class="logo" src="../assets/graphics/logo2.png" alt="Heart Paw"/>
                <div className="instructions">
                    <h2>Find your paw-mate!</h2>
                    <ol>
                        <li>Create your profile</li>
                        <li>Swipe to match</li>
                        <li>Connect with the shelter</li>
                    </ol>
                </div>
                <p class="home"><Link to="form">Let's match!</Link></p>
            </section>
        </main>
    );
}

export default PageHome;