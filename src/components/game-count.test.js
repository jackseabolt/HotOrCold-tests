import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import GuessCount from './guess-count'; 

describe('<GuessCount /> component', () => {
    it('Smoke test', () => {
        shallow(<GuessCount />); 
    })

    it('Renders props content', () => {
        const myCount = "4"; 
        const wrapper = shallow(<GuessCount count={myCount} />);
        expect(wrapper.contains(<span id="count">{myCount}</span>)).toEqual(true);
       
    })
})