import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import GuessForm from './guess-form'; 

describe('<GuessForm /> component', () => {
    it('Smoke test', () => {
        shallow(<GuessForm />); 
    })
})