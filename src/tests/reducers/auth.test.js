import authReducer from '../../reducers/auth';

test('should set uid for login', () =>{
    const userid ='abc123';

    const action = {
        type:'LOGIN',
        uid: userid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () =>{
    const userid ='abc123';
    const action = {
        type:'LOGOUT'
    };
    const state = authReducer({uid: userid},action);
    expect(state).toEqual({});
});