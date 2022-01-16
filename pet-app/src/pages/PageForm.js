import Form from "../components/Form";
import { useEffect } from "react";

const PageForm = () => {

    useEffect(() => {
		document.title = `MatchaPet - Questionnaire`;
	}, []);

    return (
        <main>
            <section className="page">
                <h2 className="formheader">What are you looking for in a paw-mate?</h2>
                <Form />
            </section>
        </main>
    )
}

export default PageForm;
