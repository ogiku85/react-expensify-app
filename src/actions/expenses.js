import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (newExpense ={}) => {
    return {
        type:'ADD_EXPENSE',
        expense:newExpense
    }
}

export const startAddExpense = (expenseData = {}) =>{
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        //create description note e.tc form expense datata using es6 syntax
        const {
            description = '',
            note ='',
            amount= 0,
            createdAt=0,
        } = expenseData;
        //{description} is the same as {description : description} when the key and value varibale name match you just write one of them without :
        const expense = {description, note, amount, createdAt};
    
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) =>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
}
export const removeExpense = (expense ={}) => {
    return {
        type:'REMOVE_EXPENSE',
        id: expense.id
    }
}

export const startRemoveExpense =({id} = {}) =>{
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense({id}));
        });
    };
};
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id:id,
        updates:updates
    }
}
export const startEditExpense = (id, updates) =>{
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() =>{
            dispatch(editExpense(id, updates));
        });
    }
}
export const setExpenses = (expenses) =>{
    return{
        type: 'SET_EXPENSES',
        expenses
    }
};

export const startSetExpenses = () =>{
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) =>{
            const expenses = [];
            snapshot.forEach((childSnapshot) =>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};