import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        // where to navigate to after finishing form?
        navigate("/swipe");
                    }
    // need a saveData() function in another file?
    console.log(errors);

    return (
        <section className="form">

            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-input-email">

                <fieldset>
                    <label>Email Address</label>
                    <input  type="text" 
                            {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                </fieldset>

                <fieldset>
                    <label>Subject</label>
                    <input  type="text" 
                            {...register("subject", {required: true})} />
                </fieldset>

                <fieldset>
                    <label>Message</label>
                    <textarea 
                            {...register("message", {required: true, maxLength: 80})} />
                </fieldset>

            </div>

            <input type="submit" value="Send to match!" />
            </form>

        </section>
    )
}

export default Form;