import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './home.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Editusers =()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let navigate = useNavigate()

    //useParam is hook which is present in react-router-dom and index is a variable which is used for taking a id from users
    let {index}=useParams();
    useEffect(()=>{
      axios.get(`http://localhost:3000/content/${index}`)
      .then((response)=>{
        console.log(response.data)
        setName(response.data.name)
        setSalary(response.data.salary)
        setCompany(response.data.company)

      })
    },[])
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let formHandler=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,payload)
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
                <th colSpan="2"><h4>Update USER DETAILS</h4></th>
            </tr>
            <tr>
                <td><label >Name</label></td>
                <td><input type="text" value={name} onChange={nameData}/></td>
            </tr>
            <tr>
                <td><label > Salary</label></td>
                <td><input type="text" value={salary} onChange={salaryData}/></td>
            </tr>
            <tr>
                <td><label>Company</label></td>
                <td><input type="text" value={company} onChange={companyData}/></td>
            </tr>
            <tr>
                <th colSpan="2"><button onClick={formHandler}>Update</button></th>
            </tr>
        </table>
               </div>
    )
}
export default Editusers