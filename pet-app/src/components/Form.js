import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/swipe");
                    }
    // need a saveData() function in another file?
    console.log(errors);

    return (
        <section className="form">

            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-input">

                <fieldset>
                    <label>Your Name</label>
                    <input  type="text" 
                            {...register("name", {required: true, maxLength: 80})} />
                </fieldset>

                <p>I'm looking for a...</p>

                <fieldset>
                    <label>
                        <input  type="checkbox" 
                                value="dog" 
                                {...register("type[]", {})} />
                    Dog
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="cat" 
                                {...register("type[]", {})} />
                    Cat
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="guineapig" 
                                {...register("type[]", {})} />
                    Guinea Pig
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="rat" 
                                {...register("type[]", {})} />
                    Rat
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="rabbit" 
                                {...register("type[]", {})} />
                    Rabbit
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="bird" 
                                {...register("type[]", {})} />
                    Bird
                    </label>
                </fieldset>

                <p>Who is...</p>

                <fieldset>
                    <label>
                        <input  type="checkbox" 
                                value="male" 
                                {...register("gender[]", {})} />
                    Male
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="female" 
                                {...register("gender[]", {})} />
                    Female
                    </label>
                </fieldset>

                <p>And is this old...</p>

                <fieldset>
                    <label>
                        <input  type="checkbox" 
                                value="young" 
                                {...register("age[]", {})} />
                    Young
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="youngadult" 
                                {...register("age[]", {})} />
                    Young Adult
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="adult" 
                                {...register("age[]", {})} />
                    Adult
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="senior" 
                                {...register("age[]", {})} />
                    Senior
                    </label>
                </fieldset>

                <p>I'd prefer if they're...</p>

                <fieldset>

                    <label>
                        <input  type="checkbox" 
                                value="small" 
                                {...register("size[]", {})} />
                    Small
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="medium"
                                {...register("size[]", {})} />
                    Medium
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="large" 
                                {...register("size[]", {})} />
                    Large
                    </label>
                </fieldset>
                    
                <p>With this fur length...</p>

                <fieldset>

                    <label>
                        <input  type="checkbox" 
                                value="short" 
                                {...register("hair[]", {})} />
                    Short
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="medium"
                                {...register("hair[]", {})} />
                    Medium
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="long" 
                                {...register("hair[]", {})} />
                    Long
                    </label>
                </fieldset>

                <p>Located this far away...</p>

                <fieldset>

                    <label>
                        <input {    ...register("location", 
                                    { required: true })} 
                                    type="radio" 
                                    value="10km" />
                        10km
                    </label>

                    <label>
                        <input {    ...register("location",
                                    { required: true })} 
                                    type="radio" 
                                    value="25km" />
                        25km
                    </label>

                    <label>
                        <input {    ...register("location", 
                                    { required: true })} 
                                    type="radio" 
                                    value="50km" />
                        50km
                    </label>

                    <label>
                        <input {    ...register("location", 
                                    { required: true })} 
                                    type="radio" 
                                    value="100km" />
                        100km
                    </label>
                </fieldset>

            </div>

            <input type="submit" value="Find my match!" />
            </form>

        </section>
    )
}

export default Form;