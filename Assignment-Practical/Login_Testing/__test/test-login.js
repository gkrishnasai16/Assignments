import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';
describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'gkrishnasai16'}});
expect(wrapper.state('username')).toEqual('gkrishnasai16');
})
it('password check',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
expect(wrapper.state('password')).toEqual('123456');
})
it('login check with right data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'wrongUsername'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(true);
})
it('login check with wrong data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'gkrishnasai16'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'wrongPassword'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})
})