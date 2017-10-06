import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import GuessList from './guess-list'; 

describe('<GuessList /> component', () => {
    it('Smoke test', () => {
        const myArr = []; 
        shallow(<GuessList guesses={myArr} />); 
    })
})