import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

//destructure startLogin from props creates startLogin from props
//i.e does startLogin = props.startLogin behind the scenes

export const LoginPage =({startLogin}) =>{
    return (
        <div>
            <button onClick={startLogin}>Login</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogin: () =>{
            return dispatch(startLogin());
        }
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);