import { useState } from "react";
import validator from "validator"


function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
    const [formerror, setFormerror] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const validateUser=(data)=>{
    const {name,value} = data;
    switch (name) {
        case "user_name":
            let isvalid = validator. isAlpha(value)
            console.log(isvalid);
            if (value.length<10) {
                setFormerror({...formerror, [name]:"please enter minimum 8 characters"})
            }
            else if (!isvalid) {
                setFormerror({...formerror,[name]: "please enter a alphabets only"})
            }
            else  {
                setFormerror({...formerror, [name]: ""})
            }
            break;


            case"email":
            let validemail=validator.isEmail(value)
            console.log(validemail);
            if(!validemail){
                setFormerror({...formerror,[name]: "please enter email"})
            }
            else {
                setFormerror({...formerror,[name]: ""})
            }
            break
            


            case "phone":
                let validnum = validator.isNumeric(value)
                console.log(validnum);
                if(value.length !==10){
                    setFormerror({...formerror,[name]: "please enter 10 digit phone number"})
                }
                else if (!validnum){
                    console.log("inside if")
                    setFormerror({...formerror,[name]: "please enter number only"})
                    
                }
                else {
                    setFormerror({...formerror,[name]:""})
                }
      
    }
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateUser(e.target)
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      `Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
  };

  return (
    <div className="form-container">
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span>{formerror.name}</span>
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span>{formerror.email}</span>
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <span>{formerror.phone}</span>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UserForm