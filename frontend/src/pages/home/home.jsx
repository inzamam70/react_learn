import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    const [users, setUsers] = useState([]);

    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get("http://localhost:8000/api/users");
            if (response?.data?.success) {
                setUsers(response?.data?.data);
            }
        };
        callApi();
    }, []);

    const deleteHandler = async (id) => {
        await axios.delete(`http://localhost:8000/api/users/${id}`);
        const response = await axios.get("http://localhost:8000/api/users");
        if (response?.data?.success) {
            setUsers(response?.data?.data);
        }
    };
    return (
        <div className="home-container">
           
            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>Slno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="action-btn">
                                <Link className="link" style={{ backgroundColor: 'blue' }} to={`/edit/${user.id}`}>Edit</Link>
                                <Link className="link" style={{ backgroundColor: 'green' }} to={`/view/${user.id}`}>View</Link>
                                <button className="link" style={{ backgroundColor: 'red' }} type="button" onClick={deleteHandler}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Home;
