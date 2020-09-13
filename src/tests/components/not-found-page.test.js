import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/not-found-page';

test('should render not found page correctly', ()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});