import React from 'react'; 
import { shallow, mount } from 'enzyme'; 

import TopNav from './top-nav'; 

describe('<TopNav /> component', () => {
    it('Smoke test', () => {
        shallow(<TopNav />); 
    })

    it ('Renders a nav', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.type()).toEqual("nav")
    })

    it('Runs OnNewGame with props being passed through', () => {
        const callback = jest.fn();
        const prevDef= {preventDefault: function(){}} 
        const wrapper = shallow(<TopNav onNewGame={callback}/>);
        wrapper.find('a[className="new"]').simulate('click', prevDef);
        expect(callback).toHaveBeenCalled();
     })

     it('Runs onInfo with props being passed through', () => {
        const callback = jest.fn();
        const prevDef= {preventDefault: function(){}} 
        const wrapper = shallow(<TopNav onInfo={callback}/>);
        wrapper.find('a[className="what"]').simulate('click', prevDef);
        expect(callback).toHaveBeenCalled();
     })
})