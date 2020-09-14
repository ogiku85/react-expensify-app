import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (newExpense ={}) => {
    return {
        type:'ADD_EXPENSE',
        expense:newExpense
    }
}

export const startAddExpense = (expenseData = {}) =>{
    return (dispatch) =>{
        //create description note e.tc form expense datata using es6 syntax
        const {
            description = '',
            note ='',
            amount= 0,
            createdAt=0,
        } = expenseData;
        //{description} is the same as {description : description} when the key and value varibale name match you just write one of them without :
        const expense = {description, note, amount, createdAt};
    
        return database.ref('expenses').push(expense).then((ref) =>{
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

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id:id,
        updates:updates
    }
}
