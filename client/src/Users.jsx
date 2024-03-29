import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from './utils/constant';


function Users () {
    const [users, setUsers] = useState ([])
     const [handleui, sethandleui] = useState(false);

    useEffect(()=> {
        axios.get(`${baseURL}`)
        .then(result => setUsers(result.data))
        .catch (err=> Console.log(err))
    },[handleui])

    const handleDelete =(id) =>{
        axios.delete(`${baseURL}/deleteUser/`+id)
        .then(res => {console.log(res)
           sethandleui((prevstate) => !prevstate)
                     })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to={`update/${user._id}`} className="btn btn-success rounded-pill margin:2px">update</Link>
                                        <button className="btn btn-danger rounded-pill" 
                                        onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;
