import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { hideUserForm } from '../actions/ui'
import { removeCurrentUser } from '../actions/currentUser'
import { addUser, updateUser } from '../actions/user'
import './InfoUserForm.scss'

const InfoUserForm = (props) => {
    const {
        currentUser,
        onCloseForm,
        onRemoveCurrentUser,
        onAddUser,
        onUpdateUser
    } = props;
    // const !currentUser = isEmptyObj(currentUser); //true => add; false => edit
    const [userName, setUserName] = useState(!currentUser ? '' : currentUser.name);
    const [age, setAge] = useState(!currentUser ? '' : currentUser.age);
    const [active, setActive] = useState(!currentUser ? false : currentUser.active);

    useEffect(() => {
        if (currentUser) {
            const { name, age, active } = currentUser;
            setUserName(name);
            setAge(age);
            setActive(active);
        }
        else {
            setUserName('');
            setAge('');
            setActive(false);
        }
    }, [currentUser])
    const handleSubmitForm = e => {
        e.preventDefault();
        const userInfo = { name: userName, age, active };
        if (!currentUser) {
            onAddUser(userInfo);
            setUserName('');
            setAge('');
            setActive('');
        }
        else {
            userInfo.id = currentUser.id;
            onUpdateUser(userInfo);
        }
    }
    const handleCancelClick = () => {
        onCloseForm();
        onRemoveCurrentUser();
    }

    return (
        <div>
            <form className='add-user bg-div' onSubmit={handleSubmitForm}>
                <div className='divide-haft'>
                    <label htmlFor="name" style={{ minWidth: 100 }}>Name</label>
                    <input
                        type='text'
                        id='name'
                        value={userName}
                        placeholder='Name'
                        required={true}
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
                        required={true}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className='divide-haft'>
                    <label htmlFor="active">Active</label>
                    <input id='active' type='checkbox' style={{ fontSize: 100 }} checked={active} onChange={() => setActive(!active)} />
                </div>
                <div className='divide-haft'>
                    <input type='submit' value={!currentUser ? 'Th??m m???i' : 'C???p nh???t'} className='add-user__submit' />
                    <input type='button' value={'H???y'} className='add-user__cancel' onClick={handleCancelClick} />
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseForm: () => dispatch(hideUserForm()),
        onRemoveCurrentUser: () => dispatch(removeCurrentUser()),
        onAddUser: (user) => dispatch(addUser(user)),
        onUpdateUser: (user) => dispatch(updateUser(user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoUserForm)