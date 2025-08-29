import {useState} from 'react'

export const Regform = () => {
    const [user,setUser]=useState({
        name:"mano",
        age:23,
        gender:"male",
        married:true,
        country:"India",
    });

    function changeHandler(e) {
    const name = e.target.name;
    // console.log(name);
    const value =e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({...user,[name]:value})
    }
  return (
    <div>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
  
                 <td>Age</td>
                 <td>{user.age}</td>
            </tr>
            <tr>
                    <td>gender</td>
                    <td>{user.gender}</td>
            </tr>
                <tr>
                    <td>marital status</td>
                    <td>{user.married ?"married":"Not married"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
        </tbody>
    </table>
     
     <form>
        <input type="text" placeholder='Full Name' value={user.name} onChange={changeHandler} name='name' />
        <input type='age' placeholder='age' value={user.age} onChange={changeHandler} name='age'/>
        <div className="gender">
            <label htmlFor="male">
                <input type="radio" name="gender" onChange={changeHandler} id="male" checked={user.gender == "Male"}
                 value="Male" />
                Male
            </label>
            <label htmlFor="female">
                <input type="radio" name="gender" onChange={changeHandler} id="female" checked={user.gender == "Female"}
                 value="Female" />
                Female
            </label>
            <label htmlFor="married">
                 <input type="checkbox" onChange={changeHandler} id="married" name='married' checked={user.married} />   
                 Married  
            </label>
            <div>
                <label htmlFor="country">Select Country</label>
                <select name="country" id="country" value={user.country} onChange={changeHandler}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                </select>
            </div>
        </div>

     </form>


   </div> 
  )
}
