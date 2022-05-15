import React from 'react';
import './App.css';


const Table = ({data}) => {
  return (
    <div>
      
    <table>
        <tbody>
            <tr>
                <th >Name</th>
                <th >SurName</th>
                <th >Email</th>
                <th >Phone</th>
                <th >WEbsite</th>
            </tr>
            {
                data.map((user)=>(
            <tr>
                <td >{user.name}</td>
                <td >{user.username}</td>
                <td >{user.email}</td>
                <td >{user.phone}</td>
                <td >{user.website}</td>
            </tr>

                ))}
        </tbody>
    </table>

    </div>
  );
}

export default Table;
