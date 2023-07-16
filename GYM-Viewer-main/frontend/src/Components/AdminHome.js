import React, { useEffect, useState } from 'react';
import '../css/workStyles.css';
import axios from 'axios';

export default function AdminHome() {

const[data, setData]=useState([]);

  useEffect(() => {
   getAllUserData()
  
  }, [])

  const getAllUserData = async () => {
    const userData = await axios("http://localhost:8080/admin/getAllUsers")
  console.log(userData.data)
  setData(userData.data);
  }
  ///const users = [

  //   {
  //     _id: "64ae0e24f7a3264db2d8e9cf",
  //     firstName: "Krishna",
  //     lastName: "Joshi",
  //     email: "krishnajoshi316@gmail.com",
  //     password: "$2b$10$5gLW9aMemC6OxEom46YdCecBPoFuJfrVES8g4GePglj4jMfHBfJeu",
  //     verified: true
  //   }
  // ];

  return (
    <div className="grid-workStyles">
      <h1>All Users List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.verified ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
