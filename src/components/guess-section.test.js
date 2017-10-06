import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import GuessSection from './guess-section'; 

describe('<GuessSection /> component', () => {
    it('Smoke test', () => {
        shallow(<GuessSection />); 
    })

    it('Renders a Section', () => {
        const wrapper = shallow(<GuessSection />)
        expect(wrapper.type()).toEqual("section")
    })

    it('Renders a h2 with props passed into it', () => {
        const prop = "random"
        const wrapper = shallow(<GuessSection feedback={prop}/>)
        expect(wrapper.contains(<h2 id="feedback">{prop}</h2>))
    })
})