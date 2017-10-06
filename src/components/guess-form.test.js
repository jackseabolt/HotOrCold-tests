import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import GuessForm from './guess-form'; 

describe('<GuessForm /> component', () => {
    it('Smoke test', () => {
        shallow(<GuessForm />); 
    })

    it('Renders a form', () => {
        const wrapper = shallow(<GuessForm />); 
        expect(wrapper.type()).toEqual('form')
    })
})