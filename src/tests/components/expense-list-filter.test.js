import React from 'react';
import {shallow} from 'enzyme'; 
import {ExpenseListFilters} from '../../components/expense-list-filters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() =>{
     setTextFilter = jest.fn();
     sortByDate = jest.fn();
     sortByAmount = jest.fn();
     setStartDate = jest.fn();
     setEndDate = jest.fn();
     wrapper = shallow(
     <ExpenseListFilters 
     filters={filters}
     setEndDate={setEndDate}
     setStartDate={setStartDate}
     setTextFilter={setTextFilter}
     sortByAmount={sortByAmount}
     sortByDate={sortByDate}
     />
     );
});

test('should render ExpenseListFilters correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt Filter correctly', ()=>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should hamdle text change',()=>{
    const value ='rent';
    wrapper.find('input').simulate('change',{target: {value: value}});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', ()=>{
    const value = 'date';

    wrapper.setProps({filters:altFilters});
    wrapper.find('select').simulate('change',{target:{value:value}});
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', ()=>{
    const value = 'amount';

    wrapper.setProps({filters:altFilters});
    wrapper.find('select').simulate('change',{target:{value:value}});
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () =>{
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:startDate, endDate:endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes',()=>{
const calendarFocused = 'endDate';
wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});