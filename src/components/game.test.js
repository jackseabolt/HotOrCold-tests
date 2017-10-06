import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import Game from './game'; 

describe('<Game /> component', () => {
    it('Smoke test', () => {
        shallow(<Game />); 
    })

    it('Renders a div', () => {
        const wrapper = shallow(<Game />); 
        expect(wrapper.type()).toEqual("div");
    })

    it('Renders with guesses state equal to []', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state('guesses')).toEqual([]); 
    })

    it('Render with feedback state equal to \'Make your guess!\'', () => {
        const wrapper = shallow(<Game />); 
        expect(wrapper.state('feedback')).toEqual('Make your guess!'); 
    })

    it('Render with feedback state equal to \'Make your guess!\'', () => {
        const wrapper = shallow(<Game />); 
        const type = typeof wrapper.state('correctAnswer')
        expect(type).toEqual('number'); 
    })

    it('Resets the state when newGame method is called', () => {
        const wrapper = shallow(<Game />); 
        const type = typeof wrapper.state('correctAnswer')
        wrapper.instance().setState({ guesses: ["hello"]})
        wrapper.instance().newGame(); 
        expect(wrapper.state('guesses')).toEqual([]); 
        expect(wrapper.state('feedback')).toEqual('Make your guess!'); 
        expect(type).toEqual('number');
    })

    it('The guess method updates the feedback state accordingly', () => {
        const wrapper = shallow(<Game />); 
        const passingVal = wrapper.instance().state.correctAnswer
        console.log(passingVal)
        wrapper.instance().guess(passingVal); 
        expect(wrapper.state('feedback')).toEqual('You got it!'); 
    })
})