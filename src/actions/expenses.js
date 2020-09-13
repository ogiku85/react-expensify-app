import uuid from 'uuid';

export const addExpense = (newExpense ={}) => {
    return {
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description:newExpense.description,
            note: newExpense.note,
            amount:newExpense.amount,
            createdAt: newExpense.createdAt
        }
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
