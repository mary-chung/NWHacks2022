import Match from "../components/Match";
import EmailForm from "../components/EmailForm";
import ChangeForm from "../components/ChangeForm";
import { useEffect } from 'react';

const PageEmail = () => {

    useEffect(() => {
		document.title = `MatchaPet - Email`;
	}, []);

    return (
        <main>
            <section className="page">
                <ChangeForm />
                <h2 className="formheader">Connect with your paw-mate!</h2>
                <Match />
                <EmailForm />
            </section>
        </main>
    )
}

export default PageEmail;