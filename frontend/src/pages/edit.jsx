
// import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';

// const Edit = () => {
//     const history = useHistory();
//     const { id } = useParams();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get(`http://localhost:8000/api/users/${id}`);
//             if (response?.data?.success) {
//                 setName(response?.data?.data?.name);
//                 setEmail(response?.data?.data?.email);
//                 setPassword(response?.data?.data?.password);
//             }
//         };
//         fetchData();
//     }, [id]);

//     const nameChangeHandler = (event) => {
//         setName(event.target.value);
//     };

//     const emailChangeHandler = (event) => {
//         setEmail(event.target.value);
//     };

//     const passwordChangeHandler = (event) => {
//         setPassword(event.target.value);
//     };

//     const submitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('password', password);
//         await axios.put(`http://localhost:8000/api/users/${id}`, formData);
//         history.push('/');
//     };

//     return (
//         <div>
//             <p>Edit Form</p>
//             <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={submitHandler}>
//                 <div>
//                     <label>Name</label>
//                     <input type="text" value={name} onChange={nameChangeHandler} />
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input type="email" value={email} onChange={emailChangeHandler} />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input type="password" value={password} onChange={passwordChangeHandler} />
//                 </div>
//                 <div>
//                     <button type="submit">Submit</button>
//                     <button type="button" onClick={() => history.push('/')}>Cancel</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Edit;


