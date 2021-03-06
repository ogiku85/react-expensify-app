import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense,startEditExpense, editExpense,removeExpense, startRemoveExpense, startAddExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import  database  from '../../firebase/firebase';

const uid = '123abc';
const defaultAuthState = {auth:{uid}}
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) =>{
        expensesData[id] = {description, note, amount, createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() =>{
        done();
    });
});

test('should setup remove expense action object', () =>{
    const testId = '123abc';
    const action = removeExpense({id: testId});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:testId
    });
});
test('should remove expense from firebase', (done) =>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup edit expense action object', ()=>{
    const testId = '123abc';
    const action = editExpense(testId, {notes:'test note'});

    expect(action).toEqual(
        {
            type:'EDIT_EXPENSE',
            id:testId,
            updates:{notes:'test note'}

        }
    );
});

test('should edit expense on firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {amount: 21045};
    store.dispatch(startEditExpense(id, updates)).then(() =>{
       const actions = store.getActions(); 
       expect(actions[0]).toEqual({
           type: 'EDIT_EXPENSE',
           id,
           updates 
       });

       return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

test('should setup add expense action object with provided values', ()=>{
    const expenseData = expenses[2];

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    });
});

test('should add expense to database and store', (done) =>{
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount:3000,
        note: 'This one is better',
        createdAt:1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        // expect(snapshot.val()).resolves.toEqual(expenseData);
        done();
    });;
});

test('should add expense to database and store async await', async () =>{
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse Async Await',
        amount:3000,
        note: 'This one is better Async Await',
        createdAt:1000
    };
    await store.dispatch(startAddExpense(expenseData));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            ...expenseData
        }
    });
    let snapshot = await database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    expect(snapshot.val()).toEqual(expenseData);
});

test('should setup add expense action object with provided values', ()=>{
    const expenseData = expenses[2];

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    });
});

test('should add expense to database and store with default data', (done) =>{
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: '',
        amount:0,
        note: '',
        createdAt:0
    };
    store.dispatch(startAddExpense({})).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        // expect(snapshot.val()).resolves.toEqual(expenseData);
        done();
    });;
});
test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    });
});