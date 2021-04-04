import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    getUser,
    deleteUser
} from '../actions/user'
import { getCurrentUser, removeCurrentUser } from '../actions/currentUser'
import { showUserForm } from '../actions/ui'
import './ListUser.scss'
const ListUser = ({
    user,
    onSearchUser,
    onDeleteUser,
    onGetCurrentUser,
    onShowUserForm,
    onRemoveCurrentUser
}) => {
    const [keyword, setKeyword] = useState('');
    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
        onSearchUser(e.target.value)
    }
    const handleEditIconClick = (item) => {
        onGetCurrentUser(item);
        onShowUserForm();
    }
    const handleTrashIconClick = (item) => {
        const ans = window.confirm('Bạn thực sự muốn xóa tài khoản này ư?');
        if (ans) {
            onDeleteUser(item);
        }
    }
    const handleAddUserClick = () => {
        onShowUserForm();
        onRemoveCurrentUser();
    }
    return (
        <div className='list-user'>
            <div className='list-user__search bg-div' >
                <input type='search' value={keyword} placeholder='Tìm kiếm' onChange={handleKeywordChange} />
            </div>
            <input type='button' value='Thêm tài khoản' className='list-user__btn-add' onClick={handleAddUserClick}/>
            <div className='list-user__body bg-div'>
                <table className='list-user__table'>
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(item => <tr key={item.id}>
                                <td className='list-user__icon-action'>
                                    <span
                                        className='list-user__icon-action__edit'
                                        title='Sửa'
                                        onClick={() => handleEditIconClick(item)}
                                    >
                                        &#9998;
                                    </span>

                                    <span
                                        className='list-user__icon-action__trash'
                                        title='Xóa'
                                        onClick={() => handleTrashIconClick(item)}
                                    >&#128465;
                                    </span>
                                </td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.active ? <span style={{ color: 'greenyellow' }}>Active</span> : <span style={{ color: 'tomato' }}>Inactive</span>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return { user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchUser: (keyword) => dispatch(getUser(keyword)),
        onDeleteUser: (item) => dispatch(deleteUser(item)),
        onGetCurrentUser: (currentUser) => dispatch(getCurrentUser(currentUser)),
        onShowUserForm: () => dispatch(showUserForm()),
        onRemoveCurrentUser: () => dispatch(removeCurrentUser()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListUser);