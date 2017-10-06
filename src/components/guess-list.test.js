import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import GuessList from './guess-list'; 

describe('<GuessList /> component', () => {
    it('Smoke test', () => {
        const myArr = []; 
        shallow(<GuessList guesses={myArr} />); 
    }); 

    it('Renders a ul element with class of guessBox', () => {
        const myArr = []; 
        const wrapper = shallow(<GuessList guesses={myArr} />); 
        expect(wrapper.hasClass('guessBox')).toEqual(true); 
    });

    it('Renders the data contained in props.guesses into the DOM', () => {
        const myArr = ['guess1']; 
        const wrapper = shallow(<GuessList guesses={myArr} />); 
        expect(wrapper.contains(<li key="0">guess1</li>)).toEqual(true);
    });
});