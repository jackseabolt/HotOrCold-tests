import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import GuessForm from './guess-form'; 

describe('<GuessForm /> component', () => {
    it('Smoke test', () => {
        shallow(<GuessForm />); 
    }); 

    it('Renders a form', () => {
        const wrapper = shallow(<GuessForm />); 
        expect(wrapper.type()).toEqual('form')
    });

    it('Should fire method in onGuess prop when form submits', () =>{
        const callback = jest.fn(); 
        const value = "testvalue"; 
        const wrapper = mount(<GuessForm onGuess={callback} />); 
        wrapper.find('input[type="text"]').node.value = value; 
        wrapper.simulate('submit'); 
        expect(callback).toHaveBeenCalledWith(value); 
    });
    
})