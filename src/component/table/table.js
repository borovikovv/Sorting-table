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
                <tr className='table-row'>
                    <th className='table-header'>Name</th>
                    <th className='table-header'>Profession</th>
                    <th className='table-header'>Gender</th>
                    <th className='table-header'>Age</th>
                    <th className='table-header'>Hobby</th>
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