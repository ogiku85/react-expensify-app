import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expensesReducerDefaultState = [];
const addExpense = (newExpense ={}) => {
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

const removeExpense = (expense ={}) => {
    return {
        type:'REMOVE_EXPENSE',
        id: expense.id
    }
}

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id:id,
        updates:updates
    }
}

const setTextFilter = (text = '') =>{
    return {
        type: 'SET_TEXT_FILTER',
        text:text

    }
}
//setStartDate
const setStartDate = (startDate) =>{
    return {
        type: 'SET_START_DATE',
        startDate:startDate

    }
}

//setEndDate
const setEndDate = (EndDate) =>{
    return {
        type: 'SET_END_DATE',
        EndDate:EndDate

    }
}
const sortByDate = () =>{
    return {
        type: 'SORT_BY_DATE'
    }
}
const sortByAmount = () =>{
    return {
        type: 'SORT_BY_AMOUNT'

    }
}
//Expenses Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){

        case 'ADD_EXPENSE':
            //concats creates a new array from the existing state expense array and the newly added array
           // return state.concat(action.expense);
           // ... is the spread array which returns a new array using the old and newly specifoed value
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            console.log('action in remove =', action);
            return state.filter((expense) =>{
                return expense.id != action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense;
                }

            })
        default:
            return state;

    }
}

//Filter Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) =>{

    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return { ...state,
            sortBy:'date'
        }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }

}

const getVisibleExpenses = (expenses, filter) =>{
    return expenses.filter((expense) =>{
        const startDateMatch = typeof filter.startDate !== 'number' || expense.createdAt >= filter.startDate ;
        const endDateMatch = typeof filter.endDate !== 'number' || expense.createdAt <= filter.endDate;
        const textMatch = expense.description.toLowerCase().includes(filter.text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if(filter.sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(filter.sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description:'rent',
    amount:'51234',
    createdAt:1000
}));

const expenseTwo = store.dispatch(addExpense({
    description:'Coffe',
    amount:'56789',
    createdAt:-1000
}));

// const remove = store.dispatch(removeExpense({id: expenseOne.expense.id}));

// const edit = store.dispatch(editExpense(expenseTwo.expense.id, {amount:7777 }));
store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());
const demoState = {
    expenses: [
        {
            id:'jajjshhsh',
            description:'March Rent',
            note: 'Third year payment',
            amount:9008,
            createdAt:0
        }
    ],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

// const user = {
//     name: 'Uyi Ogiku',
//     age: 35
// };
// console.log(user);

// console.log({
//     ...user,
//     location: 'Lagos',
//     age: 67
// })