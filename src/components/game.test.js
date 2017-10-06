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

    // it('Render with feedback state equal to \'Make your guess!\'', () => {
    //     const wrapper = shallow(<Game />); 
    //     expect(wrapper.state('correctAnswer')).toEqual(); 
    // })
})