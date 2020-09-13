import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/expenses-summary';

test('should correctly render ExpensesSummary with 1 expense', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1}  expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={3}  expensesTotal={3334445}/>);
    expect(wrapper).toMatchSnapshot();
});