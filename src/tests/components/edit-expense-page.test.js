import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/edit-expense-page';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper,removeExpense;

beforeEach(()=>{
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} expense={expenses[2]}/>);
   
});

test('should render EditExpensePage correctly', ()=>{
     expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
});

// test('should handle removeExpense', ()=>{
//     wrapper.find('button').simulate('click');
//     expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
// });