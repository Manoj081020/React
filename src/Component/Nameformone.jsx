import { useState } from "react";

const Nameformone = ()=>{

    const [name,setName] = useState(""); //Name state
    const [submittedName,setSubmittedname]= useState("") //Submited name start
    const  handleChange = (event) => {  //Handle change for name input
            setName(event.target.value);
    };

    const handleSubmit = (event)=> { //handle for submission
        event.preventDefault();
        setSubmittedname(name);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
            </label>
            <input type="text" name="name" value= {name} onChange={handleChange}/>
            <button type= "submit">Submit</button>
            {submittedName && <p> Submitted Name: {submittedName}</p>}
        </form>
    )

}

export default Nameformone