import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                    <label>Age of Animal</label>

                    <input type="checkbox" value="young" {...register("age[]", {})} />
                    <label>Young</label>

                    <input type="checkbox" value="youngadult" {...register("age[]", {})} />
                    <label>Young Adult</label>

                    <input type="checkbox" value="adult" {...register("age[]", {})} />
                    <label>Adult</label>

                    <input type="checkbox" value="senior" {...register("age[]", {})} />
                    <label>Senior</label>
                </fieldset>

                <fieldset>
                    <label>Gender of Animal</label>

                    <input type="checkbox" value="young" {...register("gender[]", {})} />
                    <label>Male</label>

                    <input type="checkbox" value="youngadult" {...register("gender[]", {})} />
                    <label>Female</label>
                </fieldset>

                <fieldset>
                    <label>Type of Animal</label>

                    <input type="checkbox" value="dog" {...register("type[]", {})} />
                    <label>Dog</label>

                    <input type="checkbox" value="cat" {...register("type[]", {})} />
                    <label>Cat</label>

                    <input type="checkbox" value="guineapig" {...register("type[]", {})} />
                    <label>Guinea Pig</label>

                    <input type="checkbox" value="rat" {...register("type[]", {})} />
                    <label>Rat</label>

                    <input type="checkbox" value="rabbit" {...register("type[]", {})} />
                    <label>Rabbit</label>

                    <input type="checkbox" value="bird" {...register("type[]", {})} />
                    <label>Bird</label>
                </fieldset>

                <fieldset>
                    <label>Size of Animal</label>

                    <input type="checkbox" value="small" {...register("size[]", {})} />
                    <label>Small</label>

                    <input type="checkbox" value="medium" {...register("size[]", {})} />
                    <label>Medium</label>

                    <input type="checkbox" value="large" {...register("size[]", {})} />
                    <label>Large</label>
                </fieldset>

                <fieldset>
                    <label>Fur Length</label>

                    <input type="checkbox" value="short" {...register("hair[]", {})} />
                    <label>Short</label>

                    <input type="checkbox" value="medium" {...register("hair[]", {})} />
                    <label>Medium</label>

                    <input type="checkbox" value="long" {...register("hair[]", {})} />
                    <label>Long</label>
                </fieldset>

                <fieldset>
                    <label>Distance</label>
                    <input {...register("location", { required: true })} type="radio" value="10km" />
                    <label>10km</label>
                    <input {...register("location", { required: true })} type="radio" value="25km" />
                    <label>25km</label>
                    <input {...register("location", { required: true })} type="radio" value="50km" />
                    <label>50km</label>
                    <input {...register("location", { required: true })} type="radio" value="100km" />
                    <label>100km</label>
                </fieldset>

            </div>

            <input type="submit" />
            </form>

        </section>
    )
}

export default Form;