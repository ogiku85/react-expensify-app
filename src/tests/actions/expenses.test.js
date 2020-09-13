import {addExpense, editExpense,removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () =>{
    const testId = '123abc';
    const action = removeExpense({id: testId});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:testId
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

test('should setup add expense action object with provided values', ()=>{
    const expenseData = {
        description:'rent',
        amount:1500,
        createdAt:1000,
        note:'test rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});