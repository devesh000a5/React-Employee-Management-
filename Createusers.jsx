import  "./home.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Createusers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let navigate=useNavigate()
    let nameData=(e)=>{
        setName(e.target.value);
    }
    let salaryData=(e)=>{
        setSalary(e.target.value);
    }
    let companyData=(e)=>{
        setCompany(e.target.value);
    }
    let formHandler=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/content",payload)
        .then(()=>{
            console.log("Data has been added");
        })
        .catch(()=>{
            console.log("Something is wrong");
        })
        navigate("/users");
    }
    return(
       <div id='myForm'>
<table>
    <tr>
        <th colSpan="2"><h4>USER DETAILS</h4></th>
    </tr>
    <tr>
        <td><label htmlFor="name">Name</label></td>
        <td><input  id="name" type="text" value={name} onChange={nameData}/></td>
    </tr>
    <tr>
        <td><label htmlFor="salary"> Salary</label></td>
        <td><input  id="salary" type="text"  value={salary} onChange={salaryData}/></td>
    </tr>
    <tr>
        <td><label htmlFor="company">Company</label></td>
        <td><input id="company" type="text" value={company} onChange={companyData} /></td>
    </tr>
    <tr>
        <th colSpan="2"><button onClick={formHandler}>Submit</button></th>
    </tr>
</table>
       </div>
            
    )
}
export default Createusers