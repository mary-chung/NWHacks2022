import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import matchData from "../data/matchData";

const Form = () => {
    const asyncFetch = async (inputdata) => {
        let age = inputdata.age;
        let fur = inputdata.fur;
        let sex = inputdata.gender;
        let location = inputdata.location;
        let name = inputdata.name;
        let size = inputdata.size;
        let type = inputdata.type;

        var url = 'http://localhost:5000/adoptablepets?'
        url = url.concat('ageRange=')
        for (let i=0; i<age.length; i++) {
            if (i<age.length-1) {
                url = url.concat(age[i] + ',')
            } else {
                url = url.concat(age[i])
            }
            
        }
        url = url.concat('&sex=')
        for (let i=0; i<sex.length; i++) {
            if (i<sex.length-1) {
                url = url.concat(sex[i] + ',')
            } else {
                url = url.concat(sex[i])
            }
        }
        url = url.concat('&type=')
        for (let i=0; i<type.length; i++) {
            if (i<type.length-1) {
                url = url.concat(type[i] + ',')
            } else {
                url = url.concat(type[i])
            }
        }
        url = url.concat('&size=')
        for (let i=0; i<size.length; i++) {
            if (i<size.length-1) {
                url = url.concat(size[i] + ',')
            } else {
                url = url.concat(size[i])
            }
        }
        url = url.concat('&furLength=')
        for (let i=0; i<fur.length; i++) {
            if (i<fur.length-1) {
                url = url.concat(fur[i] + ',')
            } else {
                url = url.concat(fur[i])
            }
            
        }
        url = url.concat('&distance=' + location)

        //fetch(url).then(res => console.log(res.json()))
        let data = await fetch(url, { method : 'GET' })
        .then(res => {
            return res.json();
        })

        

        for (let i=0; i<data.length; i++) {
            let match = {
                name: data[i].name,
                type: data[i].type,
                sex: data[i].breed,
                size: data[i].size,
                furlength: data[i].furLength,
                ageRange: data[i].ageRange,
                age: data[i].age,
                kidsOK: data[i].kidsOK,
                indoorsOnly: data[i].indoorsOnly,
                apartmentOK: data[i].apartmentOK,
                houseTrained: data[i].houseTrained,
                catsOK: data[i].catsOK,
                dogsOK: data[i].dogsOK,
                bonded: data[i].bonded,
                specialNeeds: data[i].specialNeeds,
                location: data[i].location,
                description: data[i].description,
                websiteLink: data[i].websiteLink,
            }

            matchData.push(match)
        }

        await new Promise(r => setTimeout(r, 4000));
        console.log(matchData)
        


    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        asyncFetch(data);

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
                                {...register("type[]", {required: true})} />
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
                                value="guinea pig" 
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
                                value="M" 
                                {...register("gender[]", {required: true})} />
                    Male
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="F" 
                                {...register("gender[]", {})} />
                    Female
                    </label>
                </fieldset>

                <p>And is this age...</p>

                <fieldset>
                    <label>
                        <input  type="checkbox" 
                                value="young" 
                                {...register("age[]", {required: true})} />
                    Young
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="young adult" 
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
                                value="S" 
                                {...register("size[]", {required: true})} />
                    Small
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="M"
                                {...register("size[]", {})} />
                    Medium
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="L" 
                                {...register("size[]", {})} />
                    Large
                    </label>
                </fieldset>
                    
                <p>With this fur length...</p>

                <fieldset>

                    <label>
                        <input  type="checkbox" 
                                value="short" 
                                {...register("fur[]", {required: true})} />
                    Short
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="medium"
                                {...register("fur[]", {})} />
                    Medium
                    </label>

                    <label>
                        <input  type="checkbox" 
                                value="long" 
                                {...register("fur[]", {})} />
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