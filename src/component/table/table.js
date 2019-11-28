import React from 'react';
import './table.scss';

const Table = ({users}) => {

    const row = (user) => {
        const {id, name, gender, age, hobby, profession} = user;
        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{profession}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{hobby}</td>
            </tr>
        )
    };

    return (
        <div className='table'>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Profession</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Hobby</th>
                </tr>
                </thead>
                <tbody>
                    {users.map(row)}
                </tbody>
            </table>
        </div>
    )
};

export default Table;