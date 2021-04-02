import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import LoadingIcon from '../assets/images/loading.gif'
import './GlobalLoading.scss'
const GlobalLoading = (props) => {
    const { isLoading } = props;
    return (
        <>
            { isLoading &&
                <div className='loading-fullscreen'>
                    <img src={LoadingIcon} alt='loading' className='loading-fullscreen__icon' />
                </div>
            }
        </>
    )
}
const mapStateToProps = ({ ui }) => {
    const { isLoading } = ui;
    return { isLoading }
}

const withConnect = connect(mapStateToProps);
//test use compose
export default compose(withConnect)(GlobalLoading);