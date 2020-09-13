import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/expense-list-item';

test('should display expense list item with expense', ()=>{
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});