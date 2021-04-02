import React, { useState } from 'react'
import './AddUser.scss'
export default function AddUser() {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [active, setActive] = useState(false);
    return (
        <div>
            <form className='add-user' onSubmit={(e) => { e.preventDefault(); alert('ok') }}>
                <div className='divide-haft'>
                    <label htmlFor="name" style={{ minWidth: 100 }}>Name</label>
                    <input
                        type='text'
                        id='name'
                        value={userName}
                        placeholder='Name'
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='divide-haft'>
                    <label htmlFor="age" style={{ minWidth: 100 }}>Age</label>
                    <input
                        type='number'
                        id='age'
                        value={age}
                        placeholder='Age'
                        min='0'
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className='divide-haft'>
                    <label htmlFor="active">Active</label>
                    <input id='active' type='checkbox' style={{ fontSize: 100 }} checked={active} onChange={(e) => setActive(!active)} />
                </div>
                <div className='divide-haft'>
                    <input type='submit' value='Thêm' className='add-user__submit' style={{backgroundColor: 'lightgreen'}} />
                    <input type='submit' value='Cập nhật' className='add-user__submit' />
                </div>
            </form>
        </div>
    )
}
