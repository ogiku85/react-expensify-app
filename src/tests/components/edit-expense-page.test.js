import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/edit-expense-page';
import expenses from '../fixtures/expenses';

let startEditExpense, history, wrapper,startRemoveExpense;

beforeEach(()=>{
    startRemoveExpense = jest.fn();
    startEditExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} history={history} expense={expenses[2]}/>);
   
});

test('should render EditExpensePage correctly', ()=>{
     expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
});

// test('should handle startRemoveExpense', ()=>{
//     wrapper.find('button').simulate('click');
//     expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
// });