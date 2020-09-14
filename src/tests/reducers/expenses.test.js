import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default state', ()=>{
    const state = expenseReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', ()=>{
    const expenseId = '109';
    const expense ={
        id:expenseId,
        description:'Laptop',
        note:'',
        createdAt:20000,
        amount:29500
    };

    const action ={
        type:'ADD_EXPENSE',
        expense:expense
    };

    const state = expenseReducer(expenses,action);
    expect(state).toEqual([...expenses, expense]);
    // expect(state.length).toBe((expenses.length) + 1);
});

test('should edit an expense', ()=>{
    const amount = 122000;
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount:amount
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', ()=>{
    const amount = 122000;
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount:amount
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', ()=>{
    const action ={
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses,action);

    expect(state).toEqual([expenses[1]]);
});