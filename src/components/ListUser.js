import React from 'react'
import { connect } from 'react-redux'
import './ListUser.scss'
const ListUser = ({ user }) => {
    console.log('user', user)
    return (
        <div className='list-user'>
            <div className='list-user__search'>
                <input type='search' placeholder='Tìm kiếm'/>
            </div>
            <div className='list-user__body'>
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
                                    <span className='list-user__icon-action__edit' title='Sửa'>&#9998;</span>
                                    {
                                        item.active ? <span className='list-user__icon-action__trash' title='Xóa'>&#128465;</span>
                                            : <span className='list-user__icon-action__undo' title='Hoàn tác'>
                                                &#9100;
                                    </span>
                                    }


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
export default connect(mapStateToProps)(ListUser);