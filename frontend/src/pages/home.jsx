import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    return (
        <div>
            <p>home</p>
            <table>
                <thead>
                    <tr>
                        <th>Slno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <th>{index}</th>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th><Link to={`/edit/${user.id}`}>Edit</Link></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Home;
